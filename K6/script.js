import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  // Ramp from 1 to 50 virtual users over 30s, hold 50 VUs for 1m, then ramp down
  stages: [
    { duration: '30s', target: 50 },
    { duration: '1m',  target: 50 },
    { duration: '30s', target: 0  },
  ],
  thresholds: {
    // 95% of requests must complete below 500ms
    http_req_duration: ['p(95)<500'],
  },
};

export default function () {
  const url = 'https://gorest.co.in/public/v2/users';
  const bearerToken = __ENV.BEARER_TOKEN; // Retrieve the token from environment variables
  const params = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${bearerToken}`, // Add the bearer token here
    },
  };

  const res = http.get(url, params);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response is JSON array': (r) => {
      try {
        return Array.isArray(r.json());
      } catch (e) {
        return false;
      }
    },
    'body not empty': (r) => r.body && r.body.length > 0,
  });

  // pacing: one iteration per second per VU
  sleep(1);
}
