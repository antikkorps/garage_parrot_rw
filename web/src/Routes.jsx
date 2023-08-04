// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import GarageLayout from 'src/layouts/GarageLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Private unauthenticated="home">
        <Set wrap={ScaffoldLayout} title="Images" titleTo="images" buttonLabel="New Image" buttonTo="newImage">
          <Route path="/admin/images/new" page={ImageNewImagePage} name="newImage" />
          <Route path="/admin/images/{id:Int}/edit" page={ImageEditImagePage} name="editImage" />
          <Route path="/admin/images/{id:Int}" page={ImageImagePage} name="image" />
          <Route path="/admin/images" page={ImageImagesPage} name="images" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Equipments" titleTo="equipments" buttonLabel="New Equipment" buttonTo="newEquipment">
          <Route path="/admin/equipments/new" page={EquipmentNewEquipmentPage} name="newEquipment" />
          <Route path="/admin/equipments/{id:Int}/edit" page={EquipmentEditEquipmentPage} name="editEquipment" />
          <Route path="/admin/equipments/{id:Int}" page={EquipmentEquipmentPage} name="equipment" />
          <Route path="/admin/equipments" page={EquipmentEquipmentsPage} name="equipments" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
          <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/admin/users" page={UserUsersPage} name="users" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Annonces" titleTo="annonces" buttonLabel="New Annonce" buttonTo="newAnnonce">
          <Route path="/admin/annonces/new" page={AnnonceNewAnnoncePage} name="newAnnonce" />
          <Route path="/admin/annonces/{id:Int}/edit" page={AnnonceEditAnnoncePage} name="editAnnonce" />
          <Route path="/admin/annonces/{id:Int}" page={AnnonceAnnoncePage} name="annonce" />
          <Route path="/admin/annonces" page={AnnonceAnnoncesPage} name="annonces" />
        </Set>
      </Private>
      <Set wrap={GarageLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/annonce-detail/{id:Int}" page={AnnonceDetailPage} name="annonceDetail" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route notfound page={NotFoundPage} />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
    </Router>
  )
}

export default Routes
