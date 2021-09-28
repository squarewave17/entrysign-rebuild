import { createStore } from 'vuex'

export default createStore({
  state: {
    orgSize: '',
    firstName: '',
    lastName: '',
    orgName: '',
    postcode: '',
    contactNumber: '',
    contactEmail: '',
    hardwareType: '',
    layout: '',
    buttonFill: 'Outline',
    buttonShape: 'Rectangle',
    themeColour: '#888888',
    themeStyle: 'Light',
    logoUpload:
      'https://www.dashmedia.co.uk/wp-content/uploads/2020/08/logo.png',
    additionalRFID: '',
    additionalDesk: '',
    additionalWall: '',
    accessDoorControl: '',
    misSystem: '',
  },
  mutations: {
    updateOrgSize(state, orgSize) {
      state.orgSize = orgSize
    },
    updateFirstName(state, firstName) {
      state.firstName = firstName
    },
    updateLastName(state, lastName) {
      state.lastName = lastName
    },
    updateOrgName(state, orgName) {
      state.orgName = orgName
    },
    updatePostcode(state, postcode) {
      state.postcode = postcode
    },
    updateContactNumber(state, contactNumber) {
      state.contactNumber = contactNumber
    },
    updateContactEmail(state, contactEmail) {
      state.contactEmail = contactEmail
    },
    updateHardwareType(state, hardwareType) {
      state.hardwareType = hardwareType
    },
    updateLayout(state, layout) {
      state.layout = layout
    },
    updateButtonFill(state, buttonFill) {
      state.buttonFill = buttonFill
    },
    updateButtonShape(state, buttonShape) {
      state.buttonShape = buttonShape
    },
    updateThemeColour(state, themeColour) {
      state.themeColour = themeColour
    },
    updateThemeStyle(state, themeStyle) {
      state.themeStyle = themeStyle
    },
    updatelogo(state, logoUpload) {
      state.logoUpload = logoUpload
    },
    updateAdditionalRFID(state, additionalRFID) {
      state.additionalRFID = additionalRFID
    },
    updateAdditionalDesk(state, additionalDesk) {
      state.additionalDesk = additionalDesk
    },
    updateAdditionalWall(state, additionalWall) {
      state.additionalWall = additionalWall
    },
    updateAccessDoorControl(state, accessDoorControl) {
      state.accessDoorControl = accessDoorControl
    },
    updateMisSystem(state, misSystem) {
      state.misSystem = misSystem
    },
  },
  actions: {},
  modules: {},
  getters: {
    orgSize: (state) => state.orgSize,
    firstName: (state) => state.firstName,
    lastName: (state) => state.lastName,
    orgName: (state) => state.orgName,
    postcode: (state) => state.postcode,
    contactNumber: (state) => state.contactNumber,
    contactEmail: (state) => state.contactEmail,
    hardwareType: (state) => state.hardwareType,
    layout: (state) => state.layout,
    buttonFill: (state) => state.buttonFill,
    buttonShape: (state) => state.buttonShape,
    themeColour: (state) => state.themeColour,
    themeStyle: (state) => state.themeStyle,
    logoUpload: (state) => state.logoUpload,
    additionalRFID: (state) => state.additionalRFID,
    additionalDesk: (state) => state.additionalDesk,
    additionalWall: (state) => state.additionalWall,
    accessDoorControl: (state) => state.accessDoorControl,
    misSystem: (state) => state.misSystem,
  },
})
