import Swal from 'sweetalert2'




const LOG_IN = 'LOGIN';
const GET_USER_LOGIN = 'GET_USER_LOGIN';

const getUserLogin = (data) =>{
    return {
        type: GET_USER_LOGIN,
        data
    }
}

const login = (formData, history) => async (dispatch) =>{
    const url = 'https://5ef168f21faf160016b4d5c9.mockapi.io/api/users';
    const response = await fetch(url);
    const result =  await response.json();

    const checkUser = result.filter(users =>{
        return users.email === formData.email 

        
    })
    if(checkUser.length > 0){
        if(checkUser[0].passWord !== formData.passWord){
            Swal.fire({
                title: 'Password atau Email anda salah',
                text: '',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
        else{
            dispatch(getUserLogin(checkUser[0]));
            Swal.fire({
                title: `Selamat Datang ${checkUser[0].fullName}`,
                text: '',
                icon: 'success',
                confirmButtonText: 'Cool'
              });
              history.push('/restaurant')
        }
    }else{
        Swal.fire({
            title: 'Email anda tidak terdaftar',
            text: '',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
          history.push('/register')
    }
    
}


const registerUser = (formData, history) => async (dispatch) => {
    const url = 'https://5ef168f21faf160016b4d5c9.mockapi.io/api/users';
    const options = {
        method:'POST',
        body: JSON.stringify(formData),
        headers: {'content-type':'application/json'
    }
}

    const response = await fetch(url, options)
    await response.json();

    if(response.status === 201){
        Swal.fire({
            title: 'Selamat anda telah terdaftar',
            text: '',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
        history.push('/login')
    }
}

export {LOG_IN, GET_USER_LOGIN, login, registerUser}