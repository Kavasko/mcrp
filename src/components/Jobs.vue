<template>
    <div>
        <b-card no-body>
            <b-tabs pills card vertical>
                <b-tab title="Truck Driver " active>
                    <b-card-text>
                        <b-row>
                            <b-col>
                                <p>To start the job you will have to visit this location on the map and sign up.</p>
                                <img alt="Truck location" src="../assets/truck-location.png"><br /><br />
                                <p>Once you sign up for the job, press Y on the circle and choose your vehicle.</p>
                                <img alt="Choose truck" src="../assets/choose-truck.png" style="width: 88.5%;">
                                <p><span style="font-style:italic;">Note: Each cargo will make you go to a different location</span></p>
                            </b-col>
                            <b-col>
                                <p>Get in the truck (Press K to unlock it and Y to start the engine)
                                    From here on you will have to follow the red markers on your gps and press Y when the text tells you to. <br />Example:
                                </p>
                                <img alt="Press Y" src="../assets/press-y-truck.png"><br /><br />
                                <p><span style="font-weight:bold;">To End the job, return the truck to the same location you picked it up from, 
                                    failing to do so will cost you money to get it towed back!</span></p>
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-tab>
                <b-tab title="Lumberjack">
                    <b-card-text>
                        <b-row>
                            <b-col>
                                <p>You will have to come to this location and the map with a hatchet (you can buy one from gun stores)</p>
                                <img alt="Lumber location" src="../assets/lumber-location.png"><br /><br />
                                <p>After that approach a tree and press Y. This timer should appear.</p>
                                <img alt="Lumber timer" src="../assets/lumber-timer.jpg" style="width:100%;">
                            </b-col>
                            <b-col>
                                <p>Once the timer ends you should be able to see this <br /></p>
                                <img alt="Log count" src="../assets/lumber-logcount.png"><br /><br />
                                <p><span style="font-weight:bold;">Once your inventory is full go ahead and visit the dropoint. You will sell your logs there.</span></p>
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-tab>
                <b-tab title="Fishing">
                    <b-card-text>
                        <b-row>
                            <b-col>
                                <p>To Make money fishing head to the pier and purchase a rod from the shop:</p>
                                <img alt="Fishing shop" src="../assets/fishing-shop.png"><br /><br />
                                <p>Once you have the rod head to the end of the Pier and press y to start fishing:</p>
                                <img alt="Fishing pier" src="../assets/fishing-pier.png" style="width:86.5%;">
                            </b-col>
                            <b-col>
                                <p>Finally when your inventory is full of fish back to the shop you brought the rod from and sell your fish.  <br /></p>
                                <p><span style="font-weight:bold;">Reminder: In order to get money from these jobs you will have to visit the bank and cash in your paycheck (the value of which can be located at the bottom of your I menu)</span></p>
                                <img alt="Money UI" src="../assets/money-ui.png"><br /><br />
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
export default {
  name: 'Jobs'
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
        padding: 0px 20px 3px 20px;
        /*text-align: justify;*/
    }

    .badge {
        background-color: #79183A;
    }

    #radioImage {
        width: 118px;
    }

    .mcrp {
        color:#79183A;
        font-weight: bold;
    }

    .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
        color: #fff !important;
        background-color: #C46285 !important;
    }
</style>