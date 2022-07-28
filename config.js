const environments = {};

    environments.dev = {
        port: 65535,
        auth: {
            minPassworLength: 4,
            verifyEmail: false,
        db: {
            user: 'root',
            pass: 'admin',
            port: 1234,
        }    
        }
    };
    environments.test = {
        port: 7331,
        auth: {
            minPassworLength: 12,
            verifyEmail: true,
        db: {
            user: 'root',
            pass: 'test',
            port: 4567,
        }    
        }
    };
    environments.prod = {
        port: 3000,
        auth: {
            minPassworLength: 12,
            verifyEmail: true,
        db: {
            user: 'root',
            pass: 'asdasdasd',
            port: 3456,
        }    
        }
    };


console.log(process);


// Bet tik 1 is ju!!! ->
// export environments.dev
// export environments.test
// export environments.prod
let env = process.env.NODE_ENV;
env = env ? env : 'dev';
let config = environments[env];
config = config ? config : environments.dev;


export default config;