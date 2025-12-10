<script>
import { useRouter } from "vue-router";
import { useStoryStore } from "@/stores/storyStore";

import ChoiceButton from "@/components/histoire/ChoiceButton.vue";
import ChoiceButtonText from "@/components/histoire/ChoiceButtonText.vue";
import ChoicePanel from "@/components/histoire/ChoicePanel.vue";
import NarrativeText from "@/components/histoire/NarrativeText.vue";
import NarrativeTextParagraph from "@/components/histoire/NarrativeTextParagraph.vue";
import StartBloc from "@/components/histoire/StartBloc.vue";

export default {
  name: "StartView",

  components: {
    ChoiceButton,
    ChoiceButtonText,
    ChoicePanel,
    NarrativeText,
    NarrativeTextParagraph,
    StartBloc,
  },

  data() {
    return {
      story: useStoryStore(), // Récupère le store de l'histoire
      router: useRouter(), // Récupère l'objet router pour la navigation
    };
  },

  mounted() {
    // Vérifie si les chapitres n'existent pas ou sont vides
    if (
      !this.story.chapitres ||
      Object.keys(this.story.chapitres).length === 0
    ) {
      this.story.loadChapters(); // Charge les chapitres si nécessaire
    }
  },

  methods: {
    startAt(chapterId) {
      // Redirige vers la page du chapitre correspondant
      this.router.push({
        name: "chapter",
        params: { id: chapterId },
      });
    },
  },
};
</script>

<template>
  <div>
    <StartBloc />

    <NarrativeText>
      <NarrativeTextParagraph>
        Dans un monde protégé par un groupe de valeureux gardiens connu sous le
        nom des Héros de l'Éclipse, la paix règne depuis des décennies. Mais un
        jour, cette tranquillité se fissure : une mystérieuse alerte signale de
        graves dégâts dans une ville autrefois paisible. Dispersés aux quatre
        coins du monde, les héros doivent alors se concerter. Ensemble, ils
        doivent décider quelle sous-équipe partira enquêter sur les événements
        inquiétants qui se trament dans cette ville.
      </NarrativeTextParagraph>
    </NarrativeText>

    <ChoicePanel>
      <ChoiceButton class="bouton-start" @click="startAt('0')">
        <ChoiceButtonText>L'Homme et le Tacticien</ChoiceButtonText>
      </ChoiceButton>

      <ChoiceButton class="bouton-start" @click="startAt('1')">
        <ChoiceButtonText>Le Barbare et le Cyborg</ChoiceButtonText>
      </ChoiceButton>

      <ChoiceButton class="bouton-start" @click="startAt('2')">
        <ChoiceButtonText>Capitaine Québec et le Magicien</ChoiceButtonText>
      </ChoiceButton>

      <ChoiceButton class="bouton-start" @click="startAt('3')">
        <ChoiceButtonText>Le Modélisateur et le Loup</ChoiceButtonText>
      </ChoiceButton>
    </ChoicePanel>
  </div>
</template>

<style scoped>
.bouton-start {
  width: 20vw;
}

.bouton-start:hover {
  filter: brightness(105%);
  transform: scale(1.05);
  box-shadow: 0 0.5vw 0.5vw 0 #000;
}
</style>
