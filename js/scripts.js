
window.onload = function () {
    var main = new Vue({
        el: '#app',
        data: {
            password: '',
            isMember: false
        },
        methods: {
            report: function() {
                // You can change the password below, if you'd like.
                if (this.password === "member") {
                    this.isMember = true;
                    console.log('member: ', this.isMember);
                } else {
                    this.isMember = false;
                }
            }, 
        }
    })
    
    // main.report();
}
