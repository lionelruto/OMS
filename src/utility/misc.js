import sjcl from "sjcl";
import {
  LOCAL_STORAGE_PASSWORD_KEY,
  LOCAL_STORAGE_SECRET,
  LOCAL_STORAGE_USERNAME_KEY
} from "../constants/app_utils";

/**
 * Formats the URL so as to provide values for the its dynamic sections or
 * query strings. <br>
 * **Example**: `formatUrl("http://www.mydomain.com/{id}/{name}", {"query":"query_value"}, {id:1234, name:"name_value"})`
 * will return `http://www.mydomain.com/1234/name_value?query=query_value`
 * @param {String} endpoint The endpoint url
 * @param {Object} queryStrings Object containing the query string parameters
 * @param {Object} dynamicContent Object containing the values for the dynamic parts of the url
 */
export function formatUrl(endpoint, queryStrings, dynamicContent) {
  let qs = "";
  queryStrings = queryStrings ? queryStrings : {};
  dynamicContent = dynamicContent ? dynamicContent : {};

  Object.keys(queryStrings).forEach(key => {
    if (queryStrings.hasOwnProperty(key)) {
      qs = qs + `${qs.length > 0 ? "&" : ""}` + key + "=" + queryStrings[key];
    }
  });

  Object.keys(dynamicContent).forEach(key => {
    if (dynamicContent.hasOwnProperty(key)) {
      const re = RegExp(`{${key}}`);
      endpoint = endpoint.replace(re, dynamicContent[key]);
    }
  });

  if (qs.length > 0) {
    endpoint = endpoint + "?" + qs;
  }

  return endpoint;
}

/**
 * Combines all the reducers into one. This helper method helps
 * write efficient reducers which do not need long switch statements.
 * The keys of the objects are the actions to be dispatched to the mapped
 * reducer.
 * @param {object} initialState The initial state of the store
 * @param {object} reducerMap An object of reducers
 */
export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action.payload) : state;
  };
}

/**
 * Decrypts and retrieves the username and password stored in the local storage
 */
export function retrieveLocalStorageUser() {
  try {
    const encryptedPassword = window.localStorage.getItem(
      LOCAL_STORAGE_PASSWORD_KEY
    );
    const encryptedUsername = window.localStorage.getItem(
      LOCAL_STORAGE_USERNAME_KEY
    );
    const decryptedPassword = sjcl.decrypt(
      LOCAL_STORAGE_SECRET,
      encryptedPassword
    );
    const decryptedUser = sjcl.decrypt(LOCAL_STORAGE_SECRET, encryptedUsername);

    return {
      username: decryptedUser,
      password: decryptedPassword
    };
  } catch (Error) {
    console.log(Error);
    return {
      username: null,
      password: null
    };
  }
}

export function cleanObject(object) {
  if (!object) return null;
  for (let key in object) {
    if (
      object.hasOwnProperty(key) &&
      (object[key] == null || object[key] == "")
    ) {
      delete object[key];
    }
  }

  return object;
}

export function lightObjectEquals(object1, object2) {
  if (object1 == object2) return true;
  if (object1 instanceof Object && object2 instanceof Object) {
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);
    if (keys1.length != keys2.length) return false;
    for (let key of keys1) {
      if (object1[key] !== object2[key]) return false;
    }

    return true;
  }
  return false;
}

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

