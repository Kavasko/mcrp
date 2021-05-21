<template>
    <div>
        <b-table hover sticky-header="669px" :items="commands" style="text-align:left; margin: 15px 15px;"></b-table>
    </div>
</template>

<script>
export default {
  name: 'Commands',
  data() {
      return {
          commands: [
            { command: "/me", description: '/me is to perform a roleplay act for example /me would extend his right arm out to shake the man\'s hand.' },
            { command: "/melow", description: 'Used to send a local action with a lower distance (Essentially a /me with a lower radius of showing up on the screen for others)' },
            { command: "/do", description: '/do is used as a factual statement or a descriptive term, /do I would not resist or /do would be carrying a cup of coffee' },
            { command: "/dolow", description: 'Used to send a local response with a lower distance' },
            { command: "/time", description: 'Shows the server time and date in EST in the chat box. /time also shows you the remainder of your prison sentence, and the amount of time until your next paycheck.' },
            { command: "/freq", description: 'Used to set your Radios Frequency, in game, for example /freq 112 will set your radio to channel 112' },
            { command: "/radiovolume", description: 'Changes the volume of the radio.' },
            { command: "/voipvolume 1-10", description: 'Change the volume of players using VOIP' },
            { command: "/phone", description: 'Used to show your phone number in that chat box.' },
            { command: "/hangup", description: 'Used to hang the phone up after you have finished a call.' },
            { command: "/q", description: 'Used to close your connection to the server.' },
            { command: "/sellvehicle", description: 'Used to sell your vehicle to a player' },
            { command: "/acceptvehiclesale", description: 'Used to accept the sale of a vehicle' },
            { command: "/getvehicleid", description: 'Used to get a vehicle’s ID' },
            { command: "/pm", description: 'Used to send a private message to another player' },
            { command: "/blockpm", description: 'Used to block an individual from sending you a private message' },
            { command: "/showvehicles", description: 'Used to show your vehicles' },
            { command: "/n", description: 'Newbie chat for Q&A only ' }
          ]
      }
  }
}
</script>

<style scoped>
    h5 {
        color: #79183A;
    }
    img {
        width: 60%;
    }

    .mr-auto {
        margin-left: 5px;
        font-size: 12px;
    }
    .row {
        padding:5px;
    }

    .table > :not(caption) > * > * {
        padding: 5px 5px !important;
    }
</style>