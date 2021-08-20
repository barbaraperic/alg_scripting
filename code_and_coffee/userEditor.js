import React, {useState, useEffect, createContext, useContext} from 'react';
import { useAPI } from '../../providers/Api'
import { Modal } from '../../components/Modal'
import GlobalButton from '../GlobalButton'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import TextField from '@material-ui/core/TextField'
import styles from './styles.module.scss'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikInput from '../../components/FormikInput';

import { useTheme } from '@material-ui/core/styles';

export const UserEditorContext = createContext()
export function useUserEditor() {
  return useContext(UserEditorContext);
}

export const UserEditorProvider = ({ children }) => {

  const [user, setUser]   = useState({})
  const [open, setOpen]             = useState(false)
  const [error, setError]           = useState(false)
  const [saving, setSaving]         = useState(false)

  const API = useAPI();
  const theme = useTheme();

  // whatever we expose to the rest of the app
  let out = {
    user: user ,
    setUser: setUser,
    open: open,
    setOpen: setOpen,
    error: error,
    setError: setError,
    saving: saving,
    setSaving: setSaving,
  }

  // a clever thing we could do is watch for changes to objective, and use that to open the modal?


  useEffect(() => {

    if (saving===false) return

    handleSave();


  }, [saving])


  const handleSave = () => {
    // event.preventDefault(event);

    let path = '/api/user';
    if (user.id) {
      path += '/' + user.id };

    user.company_id = 1;  // FIXME for multi-tenancy

    ;(async () => {
      await fetch(path, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
        })
      .then( (response) => {
          setOpen(false)
          setSaving(false)
          API.setLoaded(false)  // kind of clunky, but basically reset our entire data
        })


    })();

  };


  return (
    <UserEditorContext.Provider
      value = {{...out}}
    >
      {children}
    </UserEditorContext.Provider>
  )
}


export default function UserEditor( {thisUser}) {

  const API = useAPI();
  const EditorCtx = useUserEditor();
  const theme = useTheme();

  const handleInput = (data) => {
    let out = {...EditorCtx.user, ...data};
    EditorCtx.setUser(out)
    // console.log(out)
  };

  const validation = Yup.object({
    name: Yup.string()
    .min(1, "Minimum 1 character."),
    email: Yup.string().email(),
    password: Yup.string()
    .min(8, 'Password is too short - should be 8 characters minimum.')
  });

  return (
    <>
      <Grid container justify="flex-end">
        <Button 
          startIcon={<AddCircleOutlineIcon />}
          variant = "outlined"
          color = "primary" 
          style={{marginBottom:theme.spacing(2)}}
          onClick={() => {EditorCtx.setUser({}); EditorCtx.setOpen(true); }}
        >
          Add User
        </Button>
      </Grid>
      <Modal title="User Editor" {...EditorCtx} handleClose={()=>{EditorCtx.setOpen(false)}}>
        <Formik
          initialValues={{ 
            name: EditorCtx.user.name,
            email: EditorCtx.user.email,
            title: EditorCtx.user.title,
            team: EditorCtx.user.team,
            password: EditorCtx.user.password
          }}
          validationSchema={validation}
          onSubmit={(values) => {
            console.log(values)
            handleInput(values)
            EditorCtx.setSaving(true)
          }}
        >
          <Form>
            <Grid container justify="space-around" style={{marginBottom:'16px'}}>
              <FormikInput         
                autoFocus
                // required
                fullWidth
                name="name"
                label="Full Name"
                type="text"
              />
              <FormikInput
                focusRipple
                fullWidth
                name='email'
                label='Email'
                type='text'
              />
              <FormikInput
                focusRipple
                fullWidth
                name='title'
                label='Title'
                type='text'
              />
              <FormikInput
                focusRipple
                fullWidth
                name='team'
                label='Team'
                type='text'
              />
              <FormikInput
                // required
                focusRipple
                fullWidth
                name='password'
                type='password'
                label='Reset Password'
                // onChange={ handleInput }
              />
            </Grid>
            <Button 
              variant="contained" 
              className={ styles.button }
              disabled = { EditorCtx.error || EditorCtx.saving}
              type="submit"
            >
              { EditorCtx.saving ? '...' : 'SAVE USER' }
            </Button>
          </Form>
        </Formik>
      </Modal>
    </>
  )
}