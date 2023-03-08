export function change() {
  window.addEventListener("load", async () => {
    const rightHeader = document.querySelector('.header_right')

    const token = sessionStorage.getItem("token");
    if (token) {
      const res = await fetch("/api/admin/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { result } = await res.json();

      if (result === "success") {
        window.addEventListener('load', () => {
          rightHeader.insertAdjacentHTML(
            "afterBegin",
            `      
            <li id="header_addProduct">
              <a href="/products">
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
          )
        })
      } else {
        window.addEventListener('load', () => {
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
          )
        })
      }
    }
    window.addEventListener('load', () => {
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
      )
    })
    }
    
  )}