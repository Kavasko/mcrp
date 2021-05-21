<template>
    <div>
        <b-row>
            <h5>Key list</h5>
        </b-row>
        <b-row>
            <b-col class="leftAlign">
                <!--<img alt="MCRP logo" src="../assets/keyboard.png">-->
                <h6><b-badge>N</b-badge> Hold down to talk using VOIP.</h6>
                <h6><b-badge>M</b-badge> Hold down to talk on your Radio or a phone call.</h6>
                <h6><b-badge>Y</b-badge> Any circles on the map such as shops, Car showrooms require the “Y” key to interact with.</h6>
                <h6><b-badge>K</b-badge> Lock/unlock doors in both buildings and cars.</h6>
                <h6><b-badge>L</b-badge> Cruise Control - Accelerate to a speed and press L to max the car at that speed.</h6>
                <h6><b-badge>I</b-badge> Open inventory. This will also show the paycheck you can collect from the bank.</h6>
            </b-col>
            <b-col class="leftAlign">
                <!--<img alt="MCRP logo" src="../assets/keyboard.png">-->
                <h6><b-badge>O</b-badge> Open the emote’s list. To cancel a performing an emote press “O” key again and select cancel emote.</h6>
                <h6><b-badge>F</b-badge> Enter Car as driver.</h6>
                <h6><b-badge>P</b-badge> Pause menu.</h6>
                <h6><b-badge>G</b-badge> Enter Car as Passenger.</h6>
                <h6><b-badge>F1</b-badge> Enter RAGE MP menu.</h6>
                <h6><b-badge>F2</b-badge> Toggle cursor. This can be used to accept job offers.</h6>
            </b-col>
            <b-col class="leftAlign">
                <!--<img alt="MCRP logo" src="../assets/keyboard.png">-->
                <h6><b-badge>F4</b-badge> The “F4” key will bring up this help guide in future.</h6>
                <h6><b-badge>F6</b-badge> If prompted that you will be kicked for AFK press this key to stop the kick timer.</h6>
                <h6><b-badge>F7</b-badge> Change your voice level i.e. whisper and shout.</h6>
                <h6><b-badge>F8</b-badge> Reset your VOIP - Also known IC as a Cough Drop</h6>
                <h6><b-badge>F9</b-badge> Media menu</h6>
                <h6><b-badge>F10</b-badge> Change the ID’s visible over the players head.</h6>
            </b-col>
        </b-row>
        <hr />
        <b-row>
            <b-col>
                <h5>Wheel Interaction / B Menu</h5>
Throughout your entire stay in MCRP you will be using the Interaction Menu. The Interaction Menu is our key to optimize and have fast-paced but immersive roleplay at all times.      
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <img alt="MCRP logo" src="../assets/b-wheel.png">
            </b-col>
            <b-col>
                <b-list-group style="max-width: 400px;">
                    <b-list-group-item class="d-flex align-items-center">
                        <b-avatar variant="primary" src="../assets/help.png" class="mr-3"></b-avatar>
                        <span class="mr-auto">Report an in game issue to server staff.</span>
                    </b-list-group-item>
                    <b-list-group-item class="d-flex align-items-center">
                        <b-avatar variant="primary" src="../assets/vehicle.png" class="mr-3"></b-avatar>
                        <span class="mr-auto">The list of owned cars. If your car is missing select marker to find it on the map. Use this to store/unstore your vehicles.</span>
                    </b-list-group-item>
                    <b-list-group-item class="d-flex align-items-center">
                        <b-avatar variant="primary" src="../assets/user-management.png" class="mr-3"></b-avatar>
                        <span class="mr-auto">Allows you to deal with corporations and groups</span>
                    </b-list-group-item>
                    <b-list-group-item class="d-flex align-items-center">
                        <b-avatar variant="primary" src="../assets/clothing.png" class="mr-3"></b-avatar>
                        <span class="mr-auto">Allows you to remove your clothes</span>
                    </b-list-group-item>
                    <b-list-group-item class="d-flex align-items-center">
                        <b-avatar variant="primary" src="../assets/door.png" class="mr-3"></b-avatar>
                        <span class="mr-auto">Open or/and close a specific door for a vehicle you own</span>
                    </b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col>
                <b-list-group style="max-width: 400px;">
                    <b-list-group-item class="d-flex align-items-center">
                        <b-avatar variant="primary" src="../assets/player.png" class="mr-3"></b-avatar>
                        <span class="mr-auto">Allows you to set your facial expressions, walking style and gives you a variety of things you can do to other players (a.e frisk them,seat or unseat them etc.)</span>
                    </b-list-group-item>
                    <b-list-group-item class="d-flex align-items-center">
                        <b-avatar variant="primary" src="../assets/weapon.png" class="mr-3"></b-avatar>
                        <span class="mr-auto">Can be used to unholster a weapon you have equipped.</span>
                    </b-list-group-item>
                    <b-list-group-item class="d-flex align-items-center">
                        <b-avatar variant="primary" src="../assets/donator.png" class="mr-3"></b-avatar>
                        <span class="mr-auto">Can only be seen by donors and can be used to set and view their special animations.</span>
                    </b-list-group-item>
                    <b-list-group-item class="d-flex align-items-center">
                        <b-avatar variant="primary" src="../assets/property.png" class="mr-3"></b-avatar>
                        <span class="mr-auto">Access the property information such as price and if it is currently owned.</span>
                    </b-list-group-item>
                </b-list-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  name: 'UI'
}
</script>

<style scoped>
    h6 {
        font-size: 14px;
    }
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
    .leftAlign {
        text-align: left;
        padding-left: 50px;
    }
</style>