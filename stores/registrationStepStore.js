import { action, observable } from 'mobx'

class Store {
  @observable FlatmatePreferencesAgeFrom
  @observable FlatmatePreferencesAgeTo
  @observable FlatmatePreferencesGender
  @observable FlatmatePreferencesOccupations
  @observable FlatmatePreferencesFlatshareExperience
  @observable FlatmatePreferencesPracticeOfAbstaining
  @observable FlatmatePreferencesCleanliness
  @observable FlatmatePreferencesCleaningSchedule
  @observable FlatmatePreferencesFlatshareActivities
  @observable FlatmatePreferencesSmoker
  @observable FlatmatePreferencesPetsAllowed

  @observable currentSteps = 2
  @observable maxSteps = 5

  @observable flatInfo = {}

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  isMax = () => this.currentSteps === this.maxSteps
  isMin = () => this.currentSteps === 0

  @action nextStep = () => !this.isMax() && (this.currentSteps += 1)

  @action prevStep = () => !this.isMin() && (this.currentSteps -= 1)

  @action updateFlatInfo = data => (this.flatInfo = data)
}

export default Store
