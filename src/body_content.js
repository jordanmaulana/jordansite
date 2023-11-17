const statistics = document.getElementById("statistics");
const portofolio = document.getElementById("portofolio");
const originalApps = document.getElementById("originalApps");

const socialMedia = document.getElementById("socialMedia");

const createStatistics = (title, value) => {
  const item = document.createElement("div");
  item.className = "flex flex-col items-end";

  const titleText = document.createElement("p");
  titleText.textContent = title;

  const bodyText = document.createElement("h1");
  bodyText.textContent = value;

  item.append(titleText, bodyText);
  statistics.append(item);
};

const createSocial = (icon, link) => {
  const item = document.createElement("a");
  item.href = link;
  item.target = "_blank";

  const iconElement = document.createElement("img");
  iconElement.src = icon;
  iconElement.className = "w-7 h-7";

  item.append(iconElement);
  socialMedia.append(item);
};

const createPortofolio = ({ icon, title, desc, link, target }) => {
  const item = document.createElement("a");
  item.className =
    "flex gap-8 bg-black p-8 bg-opacity-30 rounded-3xl no-underline border border-slate-800";
  item.href = link;
  item.target = "_blank";

  const img = document.createElement("img");
  img.src = icon;
  img.className = "w-32 h-32 rounded-3xl shadow-md";

  const content = document.createElement("div");
  content.className = "flex flex-col h-32 justify-between";

  const titleContent = document.createElement("h3");
  titleContent.textContent = title;

  const descContent = document.createElement("p");
  descContent.className = "mt-2";
  descContent.textContent = desc;

  content.append(titleContent, descContent);

  item.append(img, content);
  target.append(item);
};

createStatistics("Years of Experience", "5+");
createStatistics("Completed Projects", "14+");
createStatistics("Total Clients", "7+");

createPortofolio({
  icon: "https://play-lh.googleusercontent.com/H_aUTk4jfoVLzbkZo8bIxP5TrTiw4m7yiFxS5IV4gRXd842iD55stgJgBPX3sCZy09qN=w240-h480-rw",
  title: "Peppermint Wallet",
  desc: "Peppermint is a futuristic application that offers the ease and flexibility to show your arts to the world while enjoying the benefits of Web3 technology.",
  link: "https://play.google.com/store/apps/details?id=io.adgo.peppermint_wallet",
  target: portofolio,
});

createPortofolio({
  icon: "https://play-lh.googleusercontent.com/go6Qns0ykt_36gyGxAEN3jvNCeWy-CLaktxyEHjNI_pPpXnRZPdfyvJPtP_POxMFPp0=w240-h480-rw",
  title: "Ecosystem Commons",
  desc: "Welcome to the ultimate platform where Venture Capitals, Startups, and industry experts unite, connect, and share ideas exclusively with each other.",
  link: "https://play.google.com/store/apps/details?id=io.adgo.ecosystemcommons",
  target: portofolio,
});

createPortofolio({
  icon: "https://play-lh.googleusercontent.com/OfP7uBOk8R9vk7F6qsldVVtpzqzNfbnhUXcfwLDZVmiRQdmRNS_PFywiP2do50LMuB0=w240-h480-rw",
  title: "Hitung Duit",
  desc: "Hitung Duit! Aplikasi penghitung duit yang akan mempermudah kamu ngitung duit lebih cepet dari kalkulator!",
  link: "https://play.google.com/store/apps/details?id=com.kakjoe.hitung_duit",
  target: originalApps,
});

createPortofolio({
  icon: "https://play-lh.googleusercontent.com/HUFY0o7TFjUXH7F0EPE3cZN3SdKIdEDtEVBCHuMxCuiyAvS1VoTlHeabKigVcEqru7g=w240-h480-rw",
  title: "Tagar",
  desc: "Tagar menyediakan kemampuan pencarian dan penyaringan yang kuat berdasarkan tag, sehingga mudah untuk menemukan item data yang spesifik dengan cepat.",
  link: "https://play.google.com/store/apps/details?id=com.isenjo.tagar",
  target: originalApps,
});

createSocial(
  "../public/facebook.svg",
  "https://www.facebook.com/jordan.maulana.5/"
);
createSocial(
  "../public/instagram.svg",
  "https://www.instagram.com/jordan.maulana/"
);
