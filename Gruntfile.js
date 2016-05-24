// 包装函数
module.exports = function(grunt) {

    // 初始化配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Metadata
        // meta: {
        //     basePath: './',
        //     srcPath: './sass/',
        //     deployPath: './css/'
        // },
        uglify: {
             options: {
               banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
             },
             build: {
               src: 'js/<%=pkg.name %>.js',
               dest: 'js/<%= pkg.name %>.min.js'
             }
           },
        sass: {
          dist: {
            files: {
              'css/selvin.css': 'sass/selvin.scss'
            },
            options: {
               sourcemap: 'true'
            }
          }
        },
        cssmin:{
            dist:{
                files:{
                    'css/selvin.css': 'css/selvin.min.css'
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/<%= pkg.name %>.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass']
            },
            cssmin:{
                files: ['css/**/*.min.css'],
                tasks: ['cssmin']
            }
        }
    });

    // 执行任务的顺序
    grunt.loadNpmTasks('grunt-sass');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认的执行任务
    grunt.registerTask('default', ['sass'  , 'watch']);

};
