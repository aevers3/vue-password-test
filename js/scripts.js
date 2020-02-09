
window.onload = function () {
    var main = new Vue({
        el: '#app',
        data: {
            password: '',
            message: 'hey there',
            isMember: false
        },
        methods: {
            report: function() {
                // console.log(this.password === "member");
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
