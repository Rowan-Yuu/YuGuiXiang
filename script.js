// ===============================
// YuGuiXiang Character Archive
// script.js
// ===============================

// ---------- 基础页面配置 ----------

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

// ---------- Markdown 文件路径 ----------
// 简介页面：Intro / Likes / Dislikes 用 md
const INTRO_MD_PATH = "Introduction/Intro.md";
const INTRO_LIKES_MD_PATH = "Introduction/Likes.md";
const INTRO_DISLIKES_MD_PATH = "Introduction/Dislikes.md";

// Timeline：目前用一个 LifeStory.md
const TIMELINE_MD_PATH = "Timeline/LifeStory.md";

// ---------- 图片清单 ----------
// 注意：GitHub Pages 不能自动扫描文件夹，所以图片要在这里列出来。
// date 不写也可以，系统会自动用文件名去掉后缀作为日期。
// 建议图片格式用 jpg / JPG / png / PNG。
// heic 在很多浏览器里不能正常显示，最好转成 jpg/png。

const IMAGE_LIST = [
  {
    file: "余归巷/2023.11.14.PNG",
    title: "余归巷",
    date: "2023.11.14"
  },
  {
    file: "余归巷/2026.3.9.jpg",
    title: "余归巷",
    date: "2026.3.9"
  },
  {
    file: "余归巷/2025.7.PNG",
    title: "余归巷",
    date: "2025.7"
  },
  {
    file: "余归巷/2025.4.23.jpg",
    title: "余归巷",
    date: "2025.4.23"
  },
  {
    file: "余归巷/2025.10.PNG",
    title: "余归巷",
    date: "2025.10"
  },
  {
    file: "余归巷/2024.11.PNG",
    title: "余归巷",
    date: "2024.11"
  },
  {
    file: "余归巷/2024.10.PNG",
    title: "余归巷",
    date: "2024.10"
  },
  {
    file: "余归巷/2024.4.8.PNG",
    title: "余归巷",
    date: "2024.4.8"
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
    file: "余归巷/2021.8.22.JPG",
    title: "余归巷",
    date: "2021.8.22"
  },
  {
    file: "余归巷/2021.7.20.jpg",
    title: "余归巷",
    date: "2021.7.20"
  },
  {
    file: "余归巷/2021.6.10.jpg",
    title: "余归巷",
    date: "2021.6.10"
  },
  {
    file: "余归巷/2021.4.22.JPG",
    title: "余归巷",
    date: "2021.4.22"
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
  },
  {
    file: "余归巷/2021.1.jpg",
    title: "余归巷",
    date: "2021.1"
  }
];

// ---------- 故事清单 ----------
// 按时间从最近到最久之前排列。
// 新增故事时，在这里加一项。

const STORY_LIST = [
  {
    title: "Story 2026.01.29",
    date: "2026.01.29",
    file: "stories/Story20260129.md",
    summary: "故事片段。点击进入阅读。"
  },
  {
    title: "Story 2023.05.28",
    date: "2023.05.28",
    file: "stories/Story20230528.md",
    summary: "故事片段。点击进入阅读。"
  }
];

// ---------- 创作笔记清单 ----------
// 按时间从最近到最久之前排列。

const INSPIRATION_LIST = [
  {
    title: "2026.05.13",
    date: "2026.05.13",
    file: "Inspirations/20260513.md",
    summary: "角色创作笔记。"
  },
  {
    title: "2022.11.06",
    date: "2022.11.06",
    file: "Inspirations/20221106.md",
    summary: "角色创作笔记。"
  }
];

// ---------- DOM 元素 ----------

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

const galleryGrid = document.getElementById("galleryGrid");

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
const modalImageDate = document.getElementById("modalImageDate");
const closeImageModal = document.getElementById("closeImageModal");

// ---------- 通用工具函数 ----------

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

  if (sectionTitle) sectionTitle.textContent = config.title;
  if (sectionEyebrow) sectionEyebrow.textContent = config.eyebrow;
  if (sectionStatus) sectionStatus.textContent = config.status;
  if (currentPageLabel) currentPageLabel.textContent = config.title;
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

function getDateFromFileName(filePath) {
  const fileName = filePath.split("/").pop() || "";
  return fileName.replace(/\.[^/.]+$/, "");
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

  // 如果 marked 加载失败，至少用普通文本显示
  return `<pre>${escapeHtml(markdownText)}</pre>`;
}

async function fetchMarkdown(path) {
  const response = await fetch(encodeURI(path));

  if (!response.ok) {
    throw new Error(`Cannot load file: ${path}`);
  }

  return await response.text();
}

async function loadMarkdownInto(path, targetElement, fallbackText = "内容暂未填写。") {
  if (!targetElement) return;

  targetElement.innerHTML = `<p class="loading-text">内容读取中...</p>`;

  try {
    const markdown = await fetchMarkdown(path);
    const trimmed = markdown.trim();

    if (!trimmed) {
      targetElement.innerHTML = `<p class="empty-text">${fallbackText}</p>`;
      return;
    }

    targetElement.innerHTML = renderMarkdownToHtml(trimmed);
  } catch (error) {
    console.warn(error);
    targetElement.innerHTML = `
      <div class="notice-card">
        <p>这个文件还没有读取到：</p>
        <code>${escapeHtml(path)}</code>
        <p>请检查文件名、大小写和路径是否一致。</p>
      </div>
    `;
  }
}

function sortByDateDesc(list) {
  return [...list].sort((a, b) => {
    const dateA = String(a.date || "");
    const dateB = String(b.date || "");
    return dateB.localeCompare(dateA);
  });
}

// ---------- 页面切换 ----------

function switchPage(pageKey) {
  hideAllViews();
  setPageHeader(pageKey);
  setActiveNav(pageKey);

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
}

// ---------- 简介页面 ----------

function loadIntroduction() {
  loadMarkdownInto(
    INTRO_MD_PATH,
    introMdContent,
    "简介暂未填写。"
  );

  loadMarkdownInto(
    INTRO_LIKES_MD_PATH,
    introLikesContent,
    "喜欢内容暂未填写。"
  );

  loadMarkdownInto(
    INTRO_DISLIKES_MD_PATH,
    introDislikesContent,
    "讨厌内容暂未填写。"
  );
}

// ---------- 图片页面 ----------

function renderGallery() {
  if (!galleryGrid) return;

  const images = sortByDateDesc(IMAGE_LIST);

  if (!images.length) {
    galleryGrid.innerHTML = `
      <div class="notice-card">
        <p>当前还没有图片。</p>
      </div>
    `;
    return;
  }

  galleryGrid.innerHTML = images
    .map((item) => {
      const file = item.file;
      const title = item.title || "余归巷";
      const date = item.date || getDateFromFileName(file);

      return `
        <button
          class="gallery-card"
          type="button"
          data-full="${escapeHtml(file)}"
          data-date="${escapeHtml(date)}"
          data-title="${escapeHtml(title)}"
        >
          <div class="gallery-image-wrap">
            <img
              src="${escapeHtml(file)}"
              alt="${escapeHtml(title)} ${escapeHtml(date)}"
              loading="lazy"
            />
          </div>
          <span class="image-date">绘制日期：${escapeHtml(date)}</span>
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

      openImageModal(fullPath, date, title);
    });
  });
}

function openImageModal(imagePath, date, title) {
  if (!imageModal || !modalImage || !modalImageDate) return;

  modalImage.src = imagePath;
  modalImage.alt = `${title} ${date}`;
  modalImageDate.textContent = `绘制日期：${date}`;

  imageModal.classList.remove("hidden");
  imageModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function closeModal() {
  if (!imageModal || !modalImage) return;

  imageModal.classList.add("hidden");
  imageModal.setAttribute("aria-hidden", "true");

  modalImage.src = "";
  document.body.classList.remove("modal-open");
}

// ---------- Timeline 页面 ----------

async function loadTimeline() {
  if (!timelineList) return;

  timelineList.innerHTML = `<p class="loading-text">人生经历读取中...</p>`;

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
    timelineList.innerHTML = `
      <div class="notice-card">
        <p>人生经历文件没有读取到：</p>
        <code>${escapeHtml(TIMELINE_MD_PATH)}</code>
        <p>请检查路径是否为 Timeline/LifeStory.md。</p>
      </div>
    `;
  }
}

// ---------- Stories 页面 ----------

function renderStoryList() {
  if (!storyList || !storyListPanel || !storyReader) return;

  showElement(storyListPanel);
  hideElement(storyReader);

  const stories = sortByDateDesc(STORY_LIST);

  if (!stories.length) {
    storyList.innerHTML = `
      <div class="notice-card">
        <p>当前还没有故事片段。</p>
      </div>
    `;
    return;
  }

  storyList.innerHTML = stories
    .map((story, index) => {
      return `
        <button
          class="story-card"
          type="button"
          data-index="${index}"
        >
          <div class="story-card-date">${escapeHtml(story.date)}</div>
          <div class="story-card-main">
            <h4>${escapeHtml(story.title)}</h4>
            <p>${escapeHtml(story.summary || "点击进入阅读。")}</p>
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

  storyArticleContent.innerHTML = `<p class="loading-text">故事读取中...</p>`;

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
    storyArticleContent.innerHTML = `
      <div class="notice-card">
        <p>这篇故事没有读取到：</p>
        <code>${escapeHtml(story.file)}</code>
        <p>请检查文件名、大小写和路径是否一致。</p>
      </div>
    `;
  }
}

function returnToStoryList() {
  showElement(storyListPanel);
  hideElement(storyReader);
}

// ---------- Inspirations 页面 ----------

function renderInspirations() {
  if (!inspirationList) return;

  const notes = sortByDateDesc(INSPIRATION_LIST);

  if (!notes.length) {
    inspirationList.innerHTML = `
      <div class="notice-card">
        <p>当前还没有创作笔记。</p>
      </div>
    `;
    return;
  }

  inspirationList.innerHTML = notes
    .map((note, index) => {
      return `
        <article class="timeline-item inspiration-item">
          <div class="timeline-date">${escapeHtml(note.date)}</div>
          <div class="timeline-card">
            <h4>${escapeHtml(note.title)}</h4>
            <p>${escapeHtml(note.summary || "创作笔记。")}</p>
            <button
              class="read-note-btn"
              type="button"
              data-index="${index}"
            >
              打开笔记
            </button>
            <div class="note-content markdown-content hidden" id="note-content-${index}">
              <p class="loading-text">笔记读取中...</p>
            </div>
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

      await loadMarkdownInto(note.file, contentBox, "创作笔记暂未填写。");
      contentBox.dataset.loaded = "true";
    });
  });
}

// ---------- 事件绑定 ----------

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageKey = button.dataset.page;
    switchPage(pageKey);
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

// ---------- 初始化 ----------

document.addEventListener("DOMContentLoaded", () => {
  switchPage("introduction");
});
