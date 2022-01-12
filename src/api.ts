import React from "react";

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const request = (url: string, options?: RequestInit | undefined) => {
  return fetch(`${BASE_URL}${url}`, options)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error');
      }
      return res.json();
    })
}

export const getComments = () => {    //[{}, {}]
  return request(`/posts`);
};

export const postNewComment = (data: string) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: data,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

}