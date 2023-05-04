// kakao-sharing.js
function initKakaoSharing() {
  Kakao.Share.createCustomButton({
    container: "#kakaotalk-sharing-btn",
    templateId: 93311,
    templateArgs: {
      title: "제목 영역입니다.",
      description: "설명 영역입니다.",
    },
  });
}
