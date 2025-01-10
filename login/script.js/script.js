// 인증 관련 로직
document.getElementById('requestVerification').addEventListener('click', () => {
    alert('전화번호로 인증번호를 보냈습니다.');
  });
  
  document.getElementById('verifyCode').addEventListener('click', () => {
    alert('인증번호가 확인되었습니다.');
  });
  
  document.getElementById('requestIdVerification').addEventListener('click', () => {
    alert('전화번호로 인증번호를 보냈습니다.');
  });
  
  document.getElementById('verifyIdCode').addEventListener('click', () => {
    alert('아이디 찾기 인증번호가 확인되었습니다.');
  });
  
  document.getElementById('requestPwReset').addEventListener('click', () => {
    alert('전화번호로 인증번호를 보냈습니다.');
    document.getElementById('newPasswordSection').style.display = 'block';
  });
  
  // 폼 제출 처리 예시 (회원가입)
  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;
  
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다!');
      return;
    }
  
    console.log('회원가입 요청:', { name, phone, password });
    alert('회원가입이 완료되었습니다!');
  });
  // 폼 DOM 요소 가져오기
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const findForm = document.getElementById('findForm');
const resetForm = document.getElementById('resetForm');

// 로그인 -> 회원가입 폼으로 전환
document.getElementById('showSignup').addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

// 회원가입 -> 로그인 폼으로 전환
document.getElementById('backToLogin').addEventListener('click', (e) => {
  e.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});

// 로그인 -> 아이디/비밀번호 찾기 폼으로 전환
document.getElementById('showFind').addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  findForm.style.display = 'block';
});

// 비밀번호 찾기 선택 -> 비밀번호 찾기 폼으로 전환
document.getElementById('goToFindPw').addEventListener('click', () => {
    findMenu.style.display = 'none';
    resetForm.style.display = 'block';
  });  
    
// 아이디/비밀번호 찾기 -> 로그인 폼으로 전환
document.getElementById('backToLoginFromFind').addEventListener('click', (e) => {
  e.preventDefault();
  findForm.style.display = 'none';
  loginForm.style.display = 'block';
});

// 비밀번호 찾기 -> 비밀번호 재설정 폼 처리
document.getElementById('backToLoginFromReset').addEventListener('click', (e) => {
  e.preventDefault();
  resetForm.style.display = 'none';
  loginForm.style.display = 'block';
});

// 로그인 -> 비밀번호 찾기 폼으로 전환
document.getElementById('showFind').addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    resetForm.style.display = 'block'; // 비밀번호 찾기 폼 표시

});

// 비밀번호 찾기 -> 로그인 폼으로 돌아가기
  document.getElementById('backToLoginFromReset').addEventListener('click', (e) => {
    e.preventDefault();
    resetForm.style.display = 'none';
    loginForm.style.display = 'block'; // 로그인 폼 표시
});
