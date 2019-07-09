// I would add more generic types here & change the name of the file
// idk what default is meant to be

// what does set refer to here?
export interface ActionSet<T> {
  type: T;
  payload?: any; // Actions can either have a payload or not
}
