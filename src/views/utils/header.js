import { searchProduct } from "./searching.js";

export function header() {
  window.addEventListener("load", async () => {
    const main = document.querySelector(".main");
    main.insertAdjacentHTML(
      "afterBegin",
      `
    <header class="header">
      <div class="header_logo">
        <a href="/">
          Ce1ev.
        </a>
      </div>
      <ul class="search">
        <li>
          <input type="text" placeholder="검색어를 입력하세요." class="header_search" id="text" />
          <button type="button" class="searchBtn">
            <i class="fa fa-magnifying-glass fa-2x"></i>
          </button>
        </li>
      </ul>
      <ul class="header_right"></ul>
    </header>
    `
    );

    const rightHeader = document.querySelector(".header_right");

    const token = sessionStorage.getItem("token");
    if (token) {
      const res = await fetch("/api/admin/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { result } = await res.json();

      if (result === "success") {
        rightHeader.insertAdjacentHTML(
          "afterBegin",
          `      
        <li id="header_addProduct">
          <a href="/admin/addProduct">
            ADD-PRODUCT
          </a>  
        </li>
        <li id="header_mypage">
          <a href="/admin">
            ADMIN-PAGE
          </a>  
        </li>
        <li id="header_notice">
          <a href="/notice"> 
            NOTICE 
          </a>
        </li>
        <li id="header_logout">
          <a href="/#" id="logout">
            LOG OUT
          </a>
        </li>
        `
        );
      } else {
        rightHeader.insertAdjacentHTML(
          "afterBegin",
          `      
        <li id="header_cart">
          <a href="/mypage/myPageCart">
            CART
          </a>
        </li>
        <li id="header_myPage">
          <a href="/mypage">
            MY PAGE
          </a>
        </li>
        <li id="header_notice">
          <a href="/notice"> NOTICE </a>
        </li>
        <li id="header_logout">
          <a href="/#" id="logout">
             LOG OUT
          </a>
        </li>
        `
        );
      }

      const logoutBtn = document.querySelector("#logout");

      logoutBtn.addEventListener("click", () => {
        sessionStorage.removeItem("token");
        window.location.href = "/";
      });
    } else {
      rightHeader.insertAdjacentHTML(
        "afterBegin",
        `
      <li id="header_login">
        <a href="/login">
          LOGIN
        </a>
      </li>
      <li id="header_wish">
        <a href="/register">
          REGISTER
        </a>
      </li>
      <li id="header_cart">            
        <a href="/guest">
          GUEST
        </a>
      </li>
      <li id="header_notice">
        <a href="/notice"> 
          NOTICE 
        </a>
      </li>
      `
      );
    }
    const searchBtn = document.querySelector(".searchBtn");
    const searchBar = document.querySelector(".header_search");

    searchBtn.addEventListener("click", (searchBtn) =>
      searchProduct(searchBar)
    );
    searchBar.addEventListener("keyup", function (e) {
      if (e.keyCode === 13) {
        searchProduct(searchBar);
      }
    });
  });
}
