import { router } from './modules/engine/router/router'
import { SignUp } from './pages/PublicPages/SignUp'
import { Login } from './pages/PublicPages/Login'
import { Profile } from './pages/AuthPages/Profile'
import { ChangePassword } from './pages/AuthPages/ChangePassword'
import { Messenger } from './pages/AuthPages/Messenger'
import { Error } from './pages/Error'

router.component404 = Error({ name: 'error404', props: { errorCode: 404 } })

router
  .use('/', Login())
  .use('sign-up', SignUp())
  .use('settings', Profile())
  .use('change-password', ChangePassword())
  .use('messenger', Messenger({ props: { h100: true } }))

export { router as urls }
