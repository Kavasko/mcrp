<template>
    <div>
        <b-row>
            <b-col>
                <h5>Voice & Radio</h5>
                <p>
                    If you would like to speak to people that are near you, you must press and hold the <b-badge>N</b-badge> key on your keyboard. 
                    In order to change your voice radius (whisper, talk, shout) you can press <b-badge>F7</b-badge>.
                    To use the radio, you can open the radio UI using the <b-badge>.</b-badge> key and input the frequency into the UI, 
                    you can also use <span style="color:#79183A;">/freq [number]</span>, you use the <b-badge>M</b-badge> key to talk.
                </p>
                <img alt="Radio" src="../assets/radio.png" id="radioImage">
                <p style="font-size:14px;">
                    <span style="font-weight:bold;font-style:italic;">Note:</span> The button at the top left of the radio can be used to turn it off and the button in the middle changes the volume of the radio 
                </p>
                <p style="font-weight:bold;">
                    If you voice is not working Press <b-badge>F8</b-badge> to refresh it, if someone says you need a “Cough drop” it means you need to press <b-badge>F8</b-badge>
                </p>
            </b-col>
            <b-col>
                <img alt="Radio Indication" src="../assets/radio-indication.png" style="width: 80%;">
                <p style="font-weight:bold;text-align: center;"> (Indication you’re talking on Radio)</p>
                <img alt="Local Indication" src="../assets/local-indication.png" style="width: 80%;">
                <p style="font-weight:bold;text-align: center;">  (Indication you’re talking in voice) </p>
            </b-col>
            <b-col>
                <h5>Phone</h5>
                <p>To speak to players across the map you can buy a phone in a general store, using the phone you can dial a players phone number and either text or call, when you’re on the phone your radio will be disabled and you will be using the <b-badge>M</b-badge> key to talk.</p>

                <h5>Text IC / OOC</h5>
                <h6>OOC Chat</h6>
                <p><span class="mcrp">/b</span> is used to communicate on an OOC basis.</p>
                <img alt="OOC chat" src="../assets/ooc-chat.png" style="width:100%">

                <p><span class="mcrp">/b</span> Chat can be for things like, letting someone know they've crashed or they are having issues on an OOC stand point / BE MORE SPECIFIC </p>

                <h6>OOC Private Message</h6>
                <p><span class="mcrp">/pm [ID]</span> is used to message someone OOC using their ID, this will send to them anywhere on the map.</p>

                <h6>OOC Newbie Chat</h6>
                <p><span class="mcrp">/n</span> to ask an OOC question in our newbie chat. Please note this is only for Q&A as shown below:</p>
                <img alt="OOC Newbie chat" src="../assets/n-chat.jpg" style="width:100%">

            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  name: 'Communication'
}
</script>

<style scoped>
    h5 {
        color: #79183A;
    }

    h6 {
        font-weight: bold;
    }

    p {
        padding: 0px 20px 5px 20px;
        text-align: justify;
    }

    #radioImage {
        width: 118px;
    }

    .mcrp {
        color:#79183A;
        font-weight: bold;
    }
</style>