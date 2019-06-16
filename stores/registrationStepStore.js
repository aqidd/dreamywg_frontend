import {action, observable} from 'mobx'

class Store {

  @observable FlatmatePreferencesAgeFrom;
  @observable FlatmatePreferencesAgeTo;
  @observable FlatmatePreferencesGender;
  @observable FlatmatePreferencesOccupations;
  @observable FlatmatePreferencesFlatshareExperience;
  @observable FlatmatePreferencesPracticeOfAbstaining;
  @observable FlatmatePreferencesCleanliness;
  @observable FlatmatePreferencesCleaningSchedule;
  @observable FlatmatePreferencesFlatshareActivities;
  @observable FlatmatePreferencesSmoker;
  @observable FlatmatePreferencesPetsAllowed;

  @observable currentSteps = 1;
  @observable maxSteps = 0;

  constructor() {
  }

  isMin = () => this.currentSteps === 0;
  isMax = () => this.currentSteps === this.maxSteps;

  @action nextStep = () => !this.isMax() && (this.currentSteps = this.currentSteps + 1);

  @action prevStep = () => !this.isMin() && (this.currentSteps = this.currentSteps - 1);
}

const RegistrationStepStore = () => new Store();

export default RegistrationStepStore
