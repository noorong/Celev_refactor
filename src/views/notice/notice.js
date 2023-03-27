import * as Api from "../api.js";
import { header } from "../utils/header.js";
import { footer } from "../utils/footer.js";
header();
footer();

const postList = document.querySelector(".board-post");
const addNoitce = document.querySelector('.on')

insertPostElement();

async function insertPostElement() {
  const posts = await Api.get("/api/posts");

  for (const post of posts) {
    const { postNo, title, user, createdAt, count } = post;
    const date = createdAt.split("T")[0];

    postList.insertAdjacentHTML(
      "beforeend",
      `
            <div class="num">${postNo}</div>
                <div class="title" id="${postNo}">${title}</div>
                <div class="writer">${user}</div>
                <div class="date">${date}</div>
                <div class="count" id="Count_${postNo}">${count}</div>
            `
    );
    const postItem = document.getElementById(`${postNo}`);
    const countText = document.getElementById(`Count_${postNo}`);

    postItem.addEventListener("click", moveToPost);
    addNoitce.addEventListener("click", moveToUpdate);
    postItem.addEventListener("click", clickCount);

    async function clickCount(e) {
      e.preventDefault();

      try {
        const data = { postNo, count };
        const newCount = count + 1;
        if (count != newCount) {
          data.count = newCount;
          await Api.patch("/api/posts", postNo, data);
          countText.innerText = data.count;
        }
      } catch (err) {
        alert(`조회수 증가 중 오류 발생: ${err}`);
      }
    }

    function moveToPost() {
      window.location.assign(`/notice/noticeDetail/${postNo}`);
    }
    function moveToUpdate() {
      window.location.assign(`/notice/addNoitce/`);
    }
  }
}
