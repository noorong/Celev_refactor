// 문자열+숫자로 이루어진 랜덤 5글자 반환
export const randomId = () => {
  return Math.random().toString(36).substring(2, 7);
};

// 이메일 형식인지 확인 (true 혹은 false 반환)
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// 숫자에 쉼표를 추가함. (10000 -> 10,000)
export const addCommas = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 13,000원, 2개 등의 문자열에서 쉼표, 글자 등 제외 후 숫자만 뺴냄
// 예시: 13,000원 -> 13000, 20,000개 -> 20000
export const convertToNumber = (string) => {
  return parseInt(string.replace(/(,|개|원)/g, ""));
};

// ms만큼 기다리게 함.
export const wait = (ms) => {
  return new Promise((r) => setTimeout(r, ms));
};

// 현재 날짜 YYYYMMDD로 출력
export const getToday = () => {
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);

  return year + month + day;
};

// 로그인 여부(토큰 존재 여부 확인) 확인
export const checkLogin = () => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    //현재 주소 url 추출
    const pathname = window.location.pathname;
    const search = window.location.search;

    //언제든지 로그인 후 원래 페이지로 이동하기 위함
    window.location.replace(`/login?previouspage=${pathname + search}`);
  }
};

//관리자 여부 확인
export const checkAdmin = async () => {
  window.document.body.style.display = "none"; //화면 가리고 시작
  const token = sessionStorage.getItem("token");
  if (!token) {
    const pathname = window.location.pathname;
    const search = window.location.search;

    window.location.replace(`/login?previouspage=${pathname + search}`);
  }

  const res = await fetch("/api/admin/check", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { result } = await res.json();

  if (result === "success") {
    window.document.body.style.display = "block";

    return;
  } else {
    alert("관리자 전용 페이지 입니다.");

    window.location.replace("/");
  }
};
