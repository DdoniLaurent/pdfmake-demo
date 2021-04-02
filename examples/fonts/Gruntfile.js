 module.exports = function(grunt) {

 
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //uglify ����
        uglify: {
            options: {
                banner: '/* <%= grunt.template.today("yyyy-mm-dd") %> / ' //������ ��ó�� �ٴ� banner ����
            },
            build: {
                src: 'public/build/result.js', //uglify�� ��� ����
                dest: 'public/build/result.min.js' //uglify ��� ���� ����
            }
        },
        //concat ����
        concat:{
            basic: {
                src: ['public/js/common/util.js', 'public/js/app.js', 'public/js/lib/.js', 'public/js/ctrl/.js'], //concat Ÿ�� ����(�տ������� ������� ��������.)
                dest: 'public/build/result.js' //concat ��� ����
            }
        },
		dump_dir: {
			fonts: {
				options: {
					pre: 'window.pdfMake = window.pdfMake || {}; window.pdfMake.vfs = ',
			        rootPath: 'D:/pdfmake-master/examples/fonts'
				},
				files: {
				  //'dest.js': [ 'directory/**/*' ]
				  'dist/plugins/js/vfs_fonts.js': ['D:/pdfmake-master/examples/fonts/*' ]
				}
			}
		}
    });
 
    // Load the plugin that provides the "uglify", "concat" tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-dump-dir');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify','dump_dir']); //grunt ���ɾ�� ������ �۾�
 
};