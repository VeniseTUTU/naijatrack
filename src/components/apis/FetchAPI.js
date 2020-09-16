const aboutcontroller = new AbortController();
const API_URL = process.env.NODE_ENV === 'development' 
		? process.env.API_URL_DEV
		: process.env.API_URL;

export default (url,data,post=false) => {

 let options;
 const args = {
    method: 'POST',
    credentials:'include',
    headers:{
      'Content-Type' : 'text/plain',
      },
    body: JSON.stringify(data)
 };
 post ? options = {...args} : null;

  return fetch(API_URL+url,{
    signal: aboutcontroller.signal,
    ...options
  }
  )
 .then( (response) => {
  if (response.ok) {
      return response.json();
  }else{
      throw new Error('Could not fetch data');
  }
})

};




