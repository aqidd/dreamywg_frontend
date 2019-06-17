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

  @observable currentSteps = 0;
  @observable maxSteps = 5;

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action nextStep = () => !this.isMax() && (this.currentSteps += 1)

  @action prevStep = () => !this.isMin() && (this.currentSteps -= 1)
}

export default Store
