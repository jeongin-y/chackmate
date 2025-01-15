import React, { useState } from 'react';
import './Authform.css';

interface FormData {
  name: string;
  phone: string;
  password: string;
  passwordConfirm: string;
  email: string;
}

function AuthForm() {
  const [currentForm, setCurrentForm] = useState<'login' | 'signup' | 'find' | 'reset'>('login');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    password: '',
    passwordConfirm: '',
    email: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateInput = (name: keyof FormData, value: string) => {
    if (name === 'email' && !/^\S+@\S+\.\S+$/.test(value)) return '유효한 이메일 형식이 아닙니다.';
    if (name === 'password' && value.length < 6) return '비밀번호는 6자 이상이어야 합니다.';
    if (name === 'passwordConfirm' && value !== formData.password) return '비밀번호가 일치하지 않습니다.';
    return '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateInput(name as keyof FormData, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors: Partial<FormData> = {};
    Object.keys(formData).forEach((key) => {
      const error = validateInput(key as keyof FormData, formData[key as keyof FormData]);
      if (error) formErrors[key as keyof FormData] = error;
    });
    if (Object.values(formErrors).some((err) => err)) {
      setErrors(formErrors);
      return;
    }
    alert('요청이 완료되었습니다!');
    setFormData({
      name: '',
      phone: '',
      password: '',
      passwordConfirm: '',
      email: '',
    });
    setErrors({});
    setCurrentForm('login');
  };

  const switchForm = (form: 'login' | 'signup' | 'find' | 'reset') => {
    setCurrentForm(form);
  };

  return (
    <div className="AuthForm">
      {currentForm === 'login' && (
        <form onSubmit={handleSubmit}>
          <h2>로그인</h2>
          <input type="text" name="email" placeholder="이메일" />
          <input type="password" name="password" placeholder="비밀번호" />
          <button type="submit">로그인</button>
          <div className="links">
            <a href="#" onClick={() => switchForm('signup')}>회원가입</a>
            <a href="#" onClick={() => switchForm('find')} style={{ marginLeft: '10px' }}>아이디/비밀번호 찾기</a>
          </div>
        </form>
      )}
      {currentForm === 'signup' && (
        <form onSubmit={handleSubmit}>
          <h2>회원가입</h2>
          <input
            type="text"
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            type="text"
            name="phone"
            placeholder="전화번호"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
          <input
            type="text"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <input
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
          />
          {errors.passwordConfirm && (
            <span className="error">{errors.passwordConfirm}</span>
          )}
          <button type="submit">회원가입</button>
          <a href="#" onClick={() => switchForm('login')} className="back-link">
            로그인 화면으로 돌아가기
          </a>
        </form>
      )}
      {currentForm === 'find' && (
        <form onSubmit={handleSubmit}>
          <h2>아이디/비밀번호 찾기</h2>
          <input
            type="text"
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            type="text"
            name="phone"
            placeholder="전화번호"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
          <input
            type="text"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <button type="submit">찾기</button>
          <a href="#" onClick={() => switchForm('login')} className="back-link">
            로그인 화면으로 돌아가기
          </a>
        </form>
      )}
    </div>
  );
}

export default AuthForm;
