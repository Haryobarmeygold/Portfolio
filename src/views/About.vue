<template>
  <div style="margin-bottom: 80px">
    <h1>HELLO!,</h1>

    <div class="paragraph">
      <div>
        <p>
          I'm <strong>Fawaz Anifowoshe</strong>, an accomplished
          <strong>Unreal Engine</strong>
          Game Developer renowned for my ability to craft visually stunning and
          immersive gaming experiences. With a strong background in computer
          science and a creative mindset, I've mastered the intricacies of
          Unreal Engine, showcasing my talent through diverse and engaging
          projects. My portfolio reflects a commitment to pushing the boundaries
          of game development, incorporating cutting-edge graphics, captivating
          storytelling, and seamless gameplay mechanics. My collaborative and
          forward-thinking approach, coupled with a dedication to staying at the
          forefront of industry trends, positions me as a notable figure shaping
          the future of gaming.
        </p>
      </div>
    </div>

    <div class="photo">
      <img
        style="height: 300px; width: 300px; border-radius: 100%"
        src="img/fawaz.jpg"
        alt="Avatar of Fawaz"
      />
    </div>

    <div style="clear: both"></div>
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}
</style>
