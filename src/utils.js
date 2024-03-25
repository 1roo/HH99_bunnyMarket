// 유틸 'updated_at' 값을 '몇 분 전' 형태로 바꿔줌!
export const formatUpdateTime = (timestamp) => {
  const timePosted = new Date(
    timestamp,
  ).getTime();
  const timeNow = new Date().getTime();
  const differenceInMinutes = Math.floor(
    (timeNow - timePosted) / (60 * 1000),
  );

  if (differenceInMinutes < 60) {
    return `${differenceInMinutes}분 전`;
  } else {
    const differenceInHours = Math.floor(
      differenceInMinutes / 60,
    );
    return `${differenceInHours}시간 전`;
  }
};
