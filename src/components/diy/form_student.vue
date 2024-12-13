<template>
	<div>
		<el-form-item v-if="$check_register_field('add','gender','/student/view')" label="性别" prop="gender">
		<el-select id="gender" v-model="form['gender']">
			<el-option v-for="o in list_gender" :key="o" :label="o" :value="o">
			</el-option>
		</el-select>
		</el-form-item>
		<el-form-item v-if="$check_register_field('add','age','/student/view')" label="年龄" prop="age">
		<el-input id="age" v-model="form['age']" placeholder="请输入年龄"></el-input>
		</el-form-item>

	</div>
</template>

<script>
	import mixin from "@/mixins/component.js";

	export default {
		mixins: [mixin],
		props:{

			form:{
				type: Object,
				default: function(){
					return {
						"gender":'',
						"age":'',
					}
				}
			},

		},
		data() {
			return {
				field: "student_id",
				url_add: "~/api/student/add?",
				url_set: "~/api/student/set?",
				url_upload: "~/api/student/upload?",
				list_gender: ['男','女'],

				rules: {
					"gender": [ ],
					"age": [ ],
				}

			}
		},
		methods: {

		},
		created() {
		}
	}
</script>
