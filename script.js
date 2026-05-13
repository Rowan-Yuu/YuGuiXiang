// ===============================
// YuGuiXiang Character Archive
// script.js
// ===============================


// ===============================
// 1. 页面标题配置
// ===============================

const PAGE_LABELS = {
  introduction: {
    title: "简介 Introduction",
    eyebrow: "Character Profile",
    status: "Profile"
  },
  gallery: {
    title: "图片 Gallery",
    eyebrow: "Visual Archive",
    status: "Images"
  },
  timeline: {
    title: "人生经历概要 Timeline",
    eyebrow: "Life Record",
    status: "Timeline"
  },
  preference: {
    title: "兴趣爱好 Preference",
    eyebrow: "Personal Details",
    status: "Preference"
  },
  relations: {
    title: "角色社会关系 Relations",
    eyebrow: "Social Network",
    status: "Relations"
  },
  stories: {
    title: "详细故事片段 Stories",
    eyebrow: "Story Archive",
    status: "Reading"
  },
  inspirations: {
    title: "角色创作笔记 Inspirations",
    eyebrow: "Creation Notes",
    status: "Notes"
  }
};


// ===============================
// 2. Markdown 文件路径
// ===============================

// 简介页面
const INTRO_MD_PATH = "Introduction/Intro.md";
const INTRO_LIKES_MD_PATH = "Introduction/Likes.md";
const INTRO_DISLIKES_MD_PATH = "Introduction/Dislikes.md";

// Preference 页面
const PREFERENCE_LIKES_MD_PATH = "Preferences/Likes/Details.md";
const PREFERENCE_DISLIKES_MD_PATH = "Preferences/Dislikes/Details.md";

// Timeline 页面
const TIMELINE_MD_PATH = "Timeline/LifeStory.md";


// ===============================
// 3. 自绘图片清单
// ===============================
// 注意：GitHub Pages 区分大小写，所以这里的 JPG / PNG / jpg / jpeg
// 必须和 GitHub 文件夹里显示的一模一样。

const IMAGE_LIST = [
  {
    file: "余归巷/2026.3.9.jpg",
    title: "余归巷",
    date: "2026.3.9"
  },
  {
    file: "余归巷/2025.4.23.jpg",
    title: "余归巷",
    date: "2025.4.23"
  },
  {
    file: "余归巷/2025.4.10.PNG",
    title: "余归巷",
    date: "2025.4.10"
  },
  {
    file: "余归巷/2025.4.7.PNG",
    title: "余归巷",
    date: "2025.4.7"
  },
  {
    file: "余归巷/2024.4.8.PNG",
    title: "余归巷",
    date: "2024.4.8"
  },
  {
    file: "余归巷/2024.3.11.PNG",
    title: "余归巷",
    date: "2024.3.11"
  },
  {
    file: "余归巷/2024.3.11 (2).PNG",
    title: "余归巷",
    date: "2024.3.11"
  },
  {
    file: "余归巷/2024.3.10.PNG",
    title: "余归巷",
    date: "2024.3.10"
  },
  {
    file: "余归巷/2023.11.14.PNG",
    title: "余归巷",
    date: "2023.11.14"
  },
  {
    file: "余归巷/2023.11.9.jpeg",
    title: "余归巷",
    date: "2023.11.9"
  },
  {
    file: "余归巷/2023.6.19.jpg",
    title: "余归巷",
    date: "2023.6.19"
  },
  {
    file: "余归巷/2023.5.14.jpg",
    title: "余归巷",
    date: "2023.5.14"
  },
  {
    file: "余归巷/2023.5.7.jpg",
    title: "余归巷",
    date: "2023.5.7"
  },
  {
    file: "余归巷/2023.2.21.jpg",
    title: "余归巷",
    date: "2023.2.21"
  },
  {
    file: "余归巷/2022.11.10.jpg",
    title: "余归巷",
    date: "2022.11.10"
  },
  {
    file: "余归巷/2022.10.24.jpg",
    title: "余归巷",
    date: "2022.10.24"
  },
  {
    file: "余归巷/2022.6.15.jpg",
    title: "余归巷",
    date: "2022.6.15"
  },
  {
    file: "余归巷/2022.6.5.jpg",
    title: "余归巷",
    date: "2022.6.5"
  },
  {
    file: "余归巷/2022.5.29.PNG",
    title: "余归巷",
    date: "2022.5.29"
  },
  {
    file: "余归巷/2022.1.2.jpg",
    title: "余归巷",
    date: "2022.1.2"
  },
  {
    file: "余归巷/2022.1.2.jpeg",
    title: "余归巷",
    date: "2022.1.2"
  },
  {
    file: "余归巷/2021.9.4.PNG",
    title: "余归巷",
    date: "2021.9.4"
  },
  {
    file: "余归巷/2021.8.22.JPG",
    title: "余归巷",
    date: "2021.8.22"
  },
  {
    file: "余归巷/2021.7.26.jpg",
    title: "余归巷",
    date: "2021.7.26"
  },
  {
    file: "余归巷/2021.7.24.PNG",
    title: "余归巷",
    date: "2021.7.24"
  },
  {
    file: "余归巷/2021.7.20.jpg",
    title: "余归巷",
    date: "2021.7.20"
  },
  {
    file: "余归巷/2021.7.9.jpg",
    title: "余归巷",
    date: "2021.7.9"
  },
  {
    file: "余归巷/2021.6.10.jpg",
    title: "余归巷",
    date: "2021.6.10"
  },
  {
    file: "余归巷/2021.6.1.jpg",
    title: "余归巷",
    date: "2021.6.1"
  },
  {
    file: "余归巷/2021.6.1 (2).jpg",
    title: "余归巷",
    date: "2021.6.1"
  },
  {
    file: "余归巷/2021.4.22.JPG",
    title: "余归巷",
    date: "2021.4.22"
  },
  {
    file: "余归巷/2021.4.15.JPG",
    title: "余归巷",
    date: "2021.4.15"
  },
  {
    file: "余归巷/2021.3.7.JPG",
    title: "余归巷",
    date: "2021.3.7"
  },
  {
    file: "余归巷/2021.1.30.JPG",
    title: "余归巷",
    date: "2021.1.30"
  }
];


// ===============================
// 4. 友绘图片清单
// ===============================
// 作者会自动从文件名中提取：
// 例如：2021.8.4匿名.png
// 日期 = 2021.8.4
// 作者 = 匿名
//
// 注意：这里的大小写按 GitHub 截图写。
// 如果你已经把这些文件名统一改成了小写 jpg/png，
// 那就把这里对应的 JPG / PNG 改成 jpg / png。

const FRIEND_IMAGE_LIST = [
  {
    file: "同人/2024.6.18Sonorode.jpg"
  },
  {
    file: "同人/2024.6.18Sonorode.jpg"
  },
  {
    file: "同人/2021.8.19栖红柿.JPG"
  },
  {
    file: "同人/2021.8.7C.C.jpg"
  },
  {
    file: "同人/2021.8.7C.C (2).jpg"
  },
  {
    file: "同人/2021.8.6匿名.JPG"
  },
  {
    file: "同人/2021.8.4匿名.JPG"
  },
  {
    file: "同人/2021.8.4匿名.PNG"
  },
  {
    file: "同人/2021.7.18鱼头.jpg"
  },
  {
    file: "同人/2021.7.9栖红柿.JPG"
  },
  {
    file: "同人/2021.7.5Sonorode.JPG"
  },
  {
    file: "同人/2021.7.1栖红柿.JPG"
  },
  {
    file: "同人/2021.5.14栖红柿.JPG"
  }
];


// ===============================
// 5. 故事清单
// ===============================

const STORY_LIST = [
  {
    title: "Story 2026.01.29",
    date: "2026.01.29",
    file: "stories/Story20260129.md",
    summary: ""
  },
  {
    title: "Story 2023.05.28",
    date: "2023.05.28",
    file: "stories/Story20230528.md",
    summary: ""
  }
];


// ===============================
// 6. 创作笔记清单
// ===============================

const INSPIRATION_LIST = [
  {
    title: "2026.05.13",
    date: "2026.05.13",
    file: "Inspirations/20260513.md",
    summary: ""
  },
  {
    title: "2022.11.06",
    date: "2022.11.06",
    file: "Inspirations/20221106.md",
    summary: ""
  }
];


// ===============================
// 7. DOM 元素
// ===============================

const navButtons = document.querySelectorAll(".nav-btn");

const sectionTitle = document.getElementById("sectionTitle");
const sectionEyebrow = document.getElementById("sectionEyebrow");
const sectionStatus = document.getElementById("sectionStatus");
const currentPageLabel = document.getElementById("currentPageLabel");

const introView = document.getElementById("introView");
const galleryView = document.getElementById("galleryView");
const timelineView = document.getElementById("timelineView");
const preferenceView = document.getElementById("preferenceView");
const relationsView = document.getElementById("relationsView");
const storiesView = document.getElementById("storiesView");
const inspirationView = document.getElementById("inspirationView");

const introMdContent = document.getElementById("introMdContent");
const introLikesContent = document.getElementById("introLikesContent");
const introDislikesContent = document.getElementById("introDislikesContent");

const preferenceLikesContent = document.getElementById("preferenceLikesContent");
const preferenceDislikesContent = document.getElementById("preferenceDislikesContent");

const galleryGrid = document.getElementById("galleryGrid");
const friendGalleryGrid = document.getElementById("friendGalleryGrid");

const galleryTabs = document.querySelectorAll(".gallery-tab");
const selfGallerySection = document.getElementById("selfGallerySection");
const friendGallerySection = document.getElementById("friendGallerySection");

const timelineList = document.getElementById("timelineList");

const storyList = document.getElementById("storyList");
const storyListPanel = document.getElementById("storyListPanel");
const storyReader = document.getElementById("storyReader");
const storyArticleContent = document.getElementById("storyArticleContent");
const backToStoryList = document.getElementById("backToStoryList");

const inspirationList = document.getElementById("inspirationList");

const imageModal = document.getElementById("imageModal");
const imageModalBackdrop = document.getElementById("imageModalBackdrop");
const modalImage = document.getElementById("modalImage");
const modalImageAuthor = document.getElementById("modalImageAuthor");
const modalImageDate = document.getElementById("modalImageDate");
const closeImageModal = document.getElementById("closeImageModal");


// ===============================
// 8. 通用工具函数
// ===============================

function hideElement(element) {
  if (element) {
    element.classList.add("hidden");
  }
}

function showElement(element) {
  if (element) {
    element.classList.remove("hidden");
  }
}

function hideAllViews() {
  hideElement(introView);
  hideElement(galleryView);
  hideElement(timelineView);
  hideElement(preferenceView);
  hideElement(relationsView);
  hideElement(storiesView);
  hideElement(inspirationView);
}

function setPageHeader(pageKey) {
  const config = PAGE_LABELS[pageKey];

  if (!config) return;

  if (sectionTitle) {
    sectionTitle.textContent = config.title;
  }

  if (sectionEyebrow) {
    sectionEyebrow.textContent = config.eyebrow;
  }

  if (sectionStatus) {
    sectionStatus.textContent = config.status;
  }

  if (currentPageLabel) {
    currentPageLabel.textContent = config.title;
  }
}

function setActiveNav(pageKey) {
  navButtons.forEach((button) => {
    if (button.dataset.page === pageKey) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderMarkdownToHtml(markdownText) {
  if (window.marked) {
    return marked.parse(markdownText);
  }

  return `<pre>${escapeHtml(markdownText)}</pre>`;
}

async function fetchMarkdown(path) {
  const response = await fetch(encodeURI(path));

  if (!response.ok) {
    throw new Error(`Cannot load file: ${path}`);
  }

  return await response.text();
}

async function loadMarkdownInto(path, targetElement) {
  if (!targetElement) return;

  targetElement.innerHTML = "";

  try {
    const markdown = await fetchMarkdown(path);
    const trimmed = markdown.trim();

    if (!trimmed) {
      targetElement.innerHTML = "";
      return;
    }

    targetElement.innerHTML = renderMarkdownToHtml(trimmed);
  } catch (error) {
    console.warn(error);
    targetElement.innerHTML = "";
  }
}

function parseDateToNumber(dateText) {
  const parts = String(dateText || "")
    .split(".")
    .map((part) => Number(part));

  const year = parts[0] || 0;
  const month = parts[1] || 0;
  const day = parts[2] || 0;

  return year * 10000 + month * 100 + day;
}

function sortByDateDesc(list) {
  return [...list].sort((a, b) => {
    const dateA = parseDateToNumber(a.date || getDateFromFileName(a.file).date);
    const dateB = parseDateToNumber(b.date || getDateFromFileName(b.file).date);

    return dateB - dateA;
  });
}

function removeFileExtension(fileName) {
  return String(fileName).replace(/\.[^/.]+$/, "");
}

function getBaseFileName(filePath) {
  return String(filePath).split("/").pop() || "";
}

function getDateFromFileName(filePath) {
  const fileName = getBaseFileName(filePath);
  const noExtension = removeFileExtension(fileName);

  const match = noExtension.match(/^(\d{4}\.\d{1,2}(?:\.\d{1,2})?)/);

  if (!match) {
    return {
      date: noExtension,
      rest: ""
    };
  }

  const date = match[1];
  const rest = noExtension.slice(date.length).trim();

  return {
    date,
    rest
  };
}

function getFriendImageMeta(filePath) {
  const parsed = getDateFromFileName(filePath);

  return {
    date: parsed.date,
    author: parsed.rest || "未知"
  };
}


// ===============================
// 9. 页面切换
// ===============================

function switchPage(pageKey) {
  hideAllViews();
  setPageHeader(pageKey);
  setActiveNav(pageKey);

  document.body.classList.toggle("introduction-page", pageKey === "introduction");

  if (pageKey === "introduction") {
    showElement(introView);
    loadIntroduction();
    return;
  }

  if (pageKey === "gallery") {
    showElement(galleryView);
    renderGallery();
    return;
  }

  if (pageKey === "timeline") {
    showElement(timelineView);
    loadTimeline();
    return;
  }

  if (pageKey === "preference") {
    showElement(preferenceView);
    loadPreference();
    return;
  }

  if (pageKey === "relations") {
    showElement(relationsView);
    return;
  }

  if (pageKey === "stories") {
    showElement(storiesView);
    renderStoryList();
    return;
  }

  if (pageKey === "inspirations") {
    showElement(inspirationView);
    renderInspirations();
    return;
  }

  showElement(introView);
  loadIntroduction();
}


// ===============================
// 10. 简介页面
// ===============================

function loadIntroduction() {
  loadMarkdownInto(INTRO_MD_PATH, introMdContent);
  loadMarkdownInto(INTRO_LIKES_MD_PATH, introLikesContent);
  loadMarkdownInto(INTRO_DISLIKES_MD_PATH, introDislikesContent);
}


// ===============================
// 11. Preference 页面
// ===============================

function loadPreference() {
  loadMarkdownInto(PREFERENCE_LIKES_MD_PATH, preferenceLikesContent);
  loadMarkdownInto(PREFERENCE_DISLIKES_MD_PATH, preferenceDislikesContent);
}


// ===============================
// 12. 图片页面：自绘 / 友绘
// ===============================

function renderGallery() {
  renderSelfGallery();
  renderFriendGallery();
  switchGalleryTab("self");
}

function renderSelfGallery() {
  if (!galleryGrid) return;

  const images = sortByDateDesc(IMAGE_LIST);

  galleryGrid.innerHTML = images
    .map((item) => {
      const file = item.file;
      const title = item.title || "余归巷";
      const date = item.date || getDateFromFileName(file).date;

      return `
        <button
          class="gallery-card"
          type="button"
          data-full="${escapeHtml(file)}"
          data-date="${escapeHtml(date)}"
          data-title="${escapeHtml(title)}"
          data-author=""
          data-gallery-type="self"
        >
          <div class="gallery-image-wrap">
            <img
              src="${escapeHtml(file)}"
              alt="${escapeHtml(title)} ${escapeHtml(date)}"
              loading="lazy"
            />
          </div>
          <span class="image-date">${escapeHtml(date)}</span>
        </button>
      `;
    })
    .join("");

  const galleryCards = galleryGrid.querySelectorAll(".gallery-card");

  galleryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const fullPath = card.dataset.full;
      const date = card.dataset.date;
      const title = card.dataset.title || "余归巷";

      openImageModal({
        imagePath: fullPath,
        date,
        title,
        author: "",
        type: "self"
      });
    });
  });
}

function renderFriendGallery() {
  if (!friendGalleryGrid) return;

  const images = FRIEND_IMAGE_LIST.map((item) => {
    const meta = getFriendImageMeta(item.file);

    return {
      ...item,
      title: "余归巷",
      date: item.date || meta.date,
      author: item.author || meta.author
    };
  });

  const sortedImages = sortByDateDesc(images);

  friendGalleryGrid.innerHTML = sortedImages
    .map((item) => {
      const file = item.file;
      const title = item.title || "余归巷";
      const date = item.date;
      const author = item.author;

      return `
        <button
          class="gallery-card"
          type="button"
          data-full="${escapeHtml(file)}"
          data-date="${escapeHtml(date)}"
          data-title="${escapeHtml(title)}"
          data-author="${escapeHtml(author)}"
          data-gallery-type="friend"
        >
          <div class="gallery-image-wrap">
            <img
              src="${escapeHtml(file)}"
              alt="${escapeHtml(title)} ${escapeHtml(date)}"
              loading="lazy"
            />
          </div>
          <span class="image-date">${escapeHtml(date)}</span>
        </button>
      `;
    })
    .join("");

  const galleryCards = friendGalleryGrid.querySelectorAll(".gallery-card");

  galleryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const fullPath = card.dataset.full;
      const date = card.dataset.date;
      const title = card.dataset.title || "余归巷";
      const author = card.dataset.author || "";

      openImageModal({
        imagePath: fullPath,
        date,
        title,
        author,
        type: "friend"
      });
    });
  });
}

function switchGalleryTab(tabName) {
  const isFriend = tabName === "friend";

  if (selfGallerySection) {
    selfGallerySection.classList.toggle("hidden", isFriend);
  }

  if (friendGallerySection) {
    friendGallerySection.classList.toggle("hidden", !isFriend);
  }

  galleryTabs.forEach((tab) => {
    const active = tab.dataset.galleryTab === tabName;

    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });
}

function openImageModal({ imagePath, date, title, author, type }) {
  if (!imageModal || !modalImage || !modalImageDate) return;

  modalImage.src = imagePath;
  modalImage.alt = `${title} ${date}`;
  modalImageDate.textContent = date;

  if (modalImageAuthor) {
    if (type === "friend" && author) {
      modalImageAuthor.textContent = `作者：${author}`;
      modalImageAuthor.classList.remove("hidden");
    } else {
      modalImageAuthor.textContent = "";
      modalImageAuthor.classList.add("hidden");
    }
  }

  imageModal.classList.remove("hidden");
  imageModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function closeModal() {
  if (!imageModal || !modalImage) return;

  imageModal.classList.add("hidden");
  imageModal.setAttribute("aria-hidden", "true");

  modalImage.src = "";

  if (modalImageAuthor) {
    modalImageAuthor.textContent = "";
    modalImageAuthor.classList.add("hidden");
  }

  if (modalImageDate) {
    modalImageDate.textContent = "";
  }

  document.body.classList.remove("modal-open");
}


// ===============================
// 13. Timeline 页面
// ===============================

async function loadTimeline() {
  if (!timelineList) return;

  timelineList.innerHTML = "";

  try {
    const markdown = await fetchMarkdown(TIMELINE_MD_PATH);
    const html = renderMarkdownToHtml(markdown.trim());

    timelineList.innerHTML = `
      <article class="timeline-md-card markdown-content">
        ${html}
      </article>
    `;
  } catch (error) {
    console.warn(error);
    timelineList.innerHTML = "";
  }
}


// ===============================
// 14. Stories 页面
// ===============================

function renderStoryList() {
  if (!storyList || !storyListPanel || !storyReader) return;

  showElement(storyListPanel);
  hideElement(storyReader);

  const stories = sortByDateDesc(STORY_LIST);

  storyList.innerHTML = stories
    .map((story, index) => {
      const summaryHtml = story.summary
        ? `<p>${escapeHtml(story.summary)}</p>`
        : "";

      return `
        <button
          class="story-card"
          type="button"
          data-index="${index}"
        >
          <div class="story-card-date">${escapeHtml(story.date)}</div>

          <div class="story-card-main">
            <h4>${escapeHtml(story.title)}</h4>
            ${summaryHtml}
          </div>

          <span class="story-card-arrow">→</span>
        </button>
      `;
    })
    .join("");

  const storyCards = storyList.querySelectorAll(".story-card");

  storyCards.forEach((card) => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.index);
      openStory(stories[index]);
    });
  });
}

async function openStory(story) {
  if (!story || !storyListPanel || !storyReader || !storyArticleContent) return;

  hideElement(storyListPanel);
  showElement(storyReader);

  storyArticleContent.innerHTML = "";

  try {
    const markdown = await fetchMarkdown(story.file);
    const html = renderMarkdownToHtml(markdown.trim());

    storyArticleContent.innerHTML = `
      <div class="article-meta">
        <p>${escapeHtml(story.date)}</p>
      </div>
      ${html}
    `;
  } catch (error) {
    console.warn(error);
    storyArticleContent.innerHTML = "";
  }
}

function returnToStoryList() {
  showElement(storyListPanel);
  hideElement(storyReader);
}


// ===============================
// 15. Inspirations 页面
// ===============================

function renderInspirations() {
  if (!inspirationList) return;

  const notes = sortByDateDesc(INSPIRATION_LIST);

  inspirationList.innerHTML = notes
    .map((note, index) => {
      const summaryHtml = note.summary
        ? `<p>${escapeHtml(note.summary)}</p>`
        : "";

      return `
        <article class="timeline-item inspiration-item">
          <div class="timeline-date">${escapeHtml(note.date)}</div>

          <div class="timeline-card">
            <h4>${escapeHtml(note.title)}</h4>
            ${summaryHtml}

            <button
              class="read-note-btn"
              type="button"
              data-index="${index}"
            >
              打开笔记
            </button>

            <div class="note-content markdown-content hidden" id="note-content-${index}"></div>
          </div>
        </article>
      `;
    })
    .join("");

  const noteButtons = inspirationList.querySelectorAll(".read-note-btn");

  noteButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const index = Number(button.dataset.index);
      const note = notes[index];
      const contentBox = document.getElementById(`note-content-${index}`);

      if (!note || !contentBox) return;

      const isHidden = contentBox.classList.contains("hidden");

      if (!isHidden) {
        contentBox.classList.add("hidden");
        button.textContent = "打开笔记";
        return;
      }

      contentBox.classList.remove("hidden");
      button.textContent = "收起笔记";

      if (contentBox.dataset.loaded === "true") {
        return;
      }

      await loadMarkdownInto(note.file, contentBox);
      contentBox.dataset.loaded = "true";
    });
  });
}


// ===============================
// 16. 事件绑定
// ===============================

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageKey = button.dataset.page;
    switchPage(pageKey);
  });
});

galleryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabName = tab.dataset.galleryTab;
    switchGalleryTab(tabName);
  });
});

if (backToStoryList) {
  backToStoryList.addEventListener("click", returnToStoryList);
}

if (closeImageModal) {
  closeImageModal.addEventListener("click", closeModal);
}

if (imageModalBackdrop) {
  imageModalBackdrop.addEventListener("click", closeModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});


// ===============================
// 17. 初始化
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  switchPage("introduction");
});
