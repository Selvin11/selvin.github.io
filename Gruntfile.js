// 包装函数
module.exports = function(grunt) {

    // 初始化配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Metadata
        meta: {
            basePath: './',
            srcPath: './sass/',
            deployPath: './css/'
        },
        uglify: {
            main: {
                src: 'js/<%= pkg.name %>.js',
                dest: 'js/<%= pkg.name %>.min.js'
            }
        },
        sass: {
          dist: {
            files: {
              '<%= meta.deployPath %>selvin.css': '<%= meta.srcPath %>selvin.scss'
            },
            options: {
               sourcemap: 'true'
            }
          }
        },
        banner: '/*!\n' +
            ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',
        // usebanner: {
        //     dist: {
        //         options: {
        //             position: 'top',
        //             banner: '<%= banner %>'
        //         },
        //         files: {
        //             src: ['<%= meta.deployPath %>/<%= pkg.name %>.css', 'css/<%= pkg.name %>.min.css', 'js/<%= pkg.name %>.min.js']
        //         }
        //     }
        // },
        watch: {
            scripts: {
                files: ['js/<%= pkg.name %>.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            sass: {
                files: ['<%= meta.srcPath %>/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    // 执行任务的顺序
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认的执行任务
    grunt.registerTask('default', ['sass' , 'watch']);

};
