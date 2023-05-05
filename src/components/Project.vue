<template>
  <div>
    <br /><br />
    <h1>{{ title }}</h1>    
    <br /><br />
    <img :src="imageSrc1" alt="My Picture" style="max-width: 40%; height: auto;"/>
    <br /><br />
    <p><b>ผลงานที่เคยทำ: </b>{{ mywork }}</p>
    <br /><br />
  </div>
</template>

<script>
export default {
  name: "MyProject",
  data: () => ({
    title: "Project ",
    mywork: "ทำเว็บน้ำหอม",
    imageSrc1: "https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.15752-9/342661934_130351310032385_5625496939257141872_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=2WdXAFTrLzgAX_SePJz&_nc_ht=scontent.fbkk2-7.fna&oh=03_AdTqhDtQSohA60TPjcEapzHzt4ecwK5kdw-Ryz-pcrSHDw&oe=647C3955",
  }),
};
</script>