import { useRef, useState } from 'react';

const Hello = () => {
  const [userName, setUserName] = useState<string | undefined>("");


  // 참조객체 생성
  // useRef<참조객체타입>(초기값);

  // JSX Element를 참조하는 객체라면
  // JSX Element로 렌더링 되는 HTML 요소의 타입을 넣어야함, 기본값은 null
  const inputRef = useRef<HTMLInputElement>(null);

  const hello = () => {
    // // JSX Element를 참조하는 객체일때
    // // 참조객체.current는 현재 렌더링된 HTML요소
    // console.log(inputRef.current);
    // // inputRef.current가 null/undefined가 아니면 value 속성을 참조해라
    // console.log(inputRef.current?.value)

    // current 객체가 있으면 == 렌더링된 HTML요소 있으면
    // current.value == 입력박스의 입력값

    // current 객체가 없으면 == 렌더링된 HTML요소 없음(렌더링 되기 전 , null)
    // current?.value == undefined
    const inputName = inputRef.current?.value;
    setUserName(inputName);

    // 값 비워주기

  };



  return (
    <div>
      <h2>Hello</h2>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          hello();
        }}
      >
        인사
      </button>
      <div>
        안녕하세요, [{userName}]님 ! </div>
    </div>
  );
};

export default Hello;