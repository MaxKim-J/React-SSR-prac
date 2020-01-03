import React from 'react';

export default function About() {
  return (
    <div className="about">
      <div className="about__name">
        이건 제 깃헙주소입니다
        <div className="about_tell">
          <input placeholder="연락처를 적어주세요"></input>
        </div>
      </div>
      <div className="about__github">
        <a href="https://github.com/MaxKim-J">깃헙 주소로 가기!</a>
      </div>
    </div>
  )
}