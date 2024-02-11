<template>
    <vue-cal
      locale="pl"
      :disable-views="['years', 'year']"
      :events="events"
      :on-event-click="onEventClick">
    </vue-cal>

    <modal v-show="showDialog">
      sss
    </modal>
    <!-- Using Vuetify (but we prefer Wave UI 🤘) 
    <v-dialog v-model="showDialog">
      <v-card>
        <v-card-title>
          <v-icon>{{ selectedEvent.icon }}</v-icon>
          <span>{{ selectedEvent.title }}</span>
          <v-spacer/>
          <strong>{{ selectedEvent.start && selectedEvent.start.format('DD/MM/YYYY') }}</strong>
        </v-card-title>
        <v-card-text>
          <p v-html="selectedEvent.contentFull"/>
          <strong>Event details:</strong>
          <ul>
            <li>Event starts at: {{ selectedEvent.start && selectedEvent.start.formatTime() }}</li>
            <li>Event ends at: {{ selectedEvent.end && selectedEvent.end.formatTime() }}</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-dialog>-->
</template>

<script setup>
import VueCal from "vue-cal"
import 'vue-cal/dist/vuecal.css'
import Modal from "@/components/Modal.vue"
import { ref } from 'vue'
  let selectedEvent = ref({})
  let showDialog = ref(false)
  const events = ref([
    {
      start: '2024-02-20 14:00',
      end: '2024-02-20 18:00',  
      title: 'Need to go shopping',
      icon: 'shopping_cart', // Custom attribute.
      content: 'Click to see my shopping list',
      contentFull: 'My shopping list is rather long:<br><ul><li>Avocados</li><li>Tomatoes</li><li>Potatoes</li><li>Mangoes</li></ul>', // Custom attribute.
      class: 'leisure'
    },
    {
      start: '2024-02-22 10:00',
      end: '2024-02-22 15:00',
      title: 'Golf with John',
      icon: 'golf_course', // Custom attribute.
      content: 'Do I need to tell how many holes?',
      contentFull: 'Okay.<br>It will be a 18 hole golf course.', // Custom attribute.
      class: 'sport'
    }
  ])
  function onEventClick(event, e) {
    this.selectedEvent = event
    console.log('event', event)
    console.log('event', e)
    // this.showDialog.value = !showDialog.value;

    // Prevent navigating to narrower view (default vue-cal behavior).
    e.stopPropagation()
  }
</script>

<style>
.vuecal__event {cursor: pointer;}

.vuecal__event-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 4px 0 8px;
}

.vuecal__event-time {
  display: inline-block;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.vuecal__event-content {
  font-style: italic;
}
</style>