import 'whatwg-fetch';
import Cookies from 'js-cookie';

import { entitlementList } from './endpoints';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-CSRFToken': Cookies.get('csrftoken'),
}

export function requestEntitlements({usernameOrEmail}) {
  return fetch(
    `${entitlementList}/${usernameOrEmail}`, {
      credentials: 'same-origin',
      method: 'get'
    },
  );
}

export function createEntitlement({courseUuid, user, mode, reason, comments}) {
  return fetch(
    `${entitlementList}/${user}`, {
      credentials: 'same-origin',
      method: 'post',
      headers: headers,
      body: JSON.stringify({
        course_uuid: courseUuid,
        user: user,
        mode: mode,
        reason: reason,
        comments: comments
      })
    }
  );
}

export function updateEntitlement({email, reason, entitlementUuid, comments}) {
  //Email param may be removable when EntitlementSupportListView
  // url pattern is modified to not require a username/email 
  return fetch(
    `${entitlementList}/${email}`, {
      credentials: 'same-origin',
      method: 'put',
      headers: headers,
      body: JSON.stringify({
        entitlement_uuid: entitlementUuid,
        reason: reason,
        comments: comments
      }),
    }
  );
}