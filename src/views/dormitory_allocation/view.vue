<template>
	<el-main class="bg">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
			<el-col v-if="user_group === '管理员' || $check_field('get','building') || $check_field('add','building') || $check_field('set','building')" :xs="24" :sm="12" :lg="8">
				<el-form-item label="楼栋" prop="building">
					<el-input id="building" v-model="form['building']" placeholder="请输入楼栋"
							  v-if="user_group === '管理员' || (form['dormitory_allocation_id'] && $check_field('set','building')) || (!form['dormitory_allocation_id'] && $check_field('add','building'))" :disabled="disabledObj['building_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','building')">{{form['building']}}</div>
				</el-form-item>
			</el-col>
			<el-col v-if="user_group === '管理员' || $check_field('get','floor') || $check_field('add','floor') || $check_field('set','floor')" :xs="24" :sm="12" :lg="8">
				<el-form-item label="楼层" prop="floor">
					<el-input id="floor" v-model="form['floor']" placeholder="请输入楼层"
							  v-if="user_group === '管理员' || (form['dormitory_allocation_id'] && $check_field('set','floor')) || (!form['dormitory_allocation_id'] && $check_field('add','floor'))" :disabled="disabledObj['floor_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','floor')">{{form['floor']}}</div>
				</el-form-item>
			</el-col>
			<el-col v-if="user_group === '管理员' || $check_field('get','room_number') || $check_field('add','room_number') || $check_field('set','room_number')" :xs="24" :sm="12" :lg="8">
				<el-form-item label="房号" prop="room_number">
					<el-input id="room_number" v-model="form['room_number']" placeholder="请输入房号"
							  v-if="user_group === '管理员' || (form['dormitory_allocation_id'] && $check_field('set','room_number')) || (!form['dormitory_allocation_id'] && $check_field('add','room_number'))" :disabled="disabledObj['room_number_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','room_number')">{{form['room_number']}}</div>
				</el-form-item>
			</el-col>
			<el-col v-if="user_group === '管理员' || $check_field('get','room_type') || $check_field('add','room_type') || $check_field('set','room_type')" :xs="24" :sm="12" :lg="8">
				<el-form-item label="房间类型" prop="room_type">
					<el-input id="room_type" v-model="form['room_type']" placeholder="请输入房间类型"
							  v-if="user_group === '管理员' || (form['dormitory_allocation_id'] && $check_field('set','room_type')) || (!form['dormitory_allocation_id'] && $check_field('add','room_type'))" :disabled="disabledObj['room_type_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','room_type')">{{form['room_type']}}</div>
				</el-form-item>
			</el-col>
			<el-col v-if="user_group === '管理员' || $check_field('get','bed_number') || $check_field('add','bed_number') || $check_field('set','bed_number')" :xs="24" :sm="12" :lg="8">
				<el-form-item label="床位号" prop="bed_number">
					<el-input id="bed_number" v-model="form['bed_number']" placeholder="请输入床位号"
							  v-if="user_group === '管理员' || (form['dormitory_allocation_id'] && $check_field('set','bed_number')) || (!form['dormitory_allocation_id'] && $check_field('add','bed_number'))" :disabled="disabledObj['bed_number_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','bed_number')">{{form['bed_number']}}</div>
				</el-form-item>
			</el-col>
			<el-col v-if="user_group === '管理员' || $check_field('get','seize_a_seat') || $check_field('add','seize_a_seat') || $check_field('set','seize_a_seat')" :xs="24" :sm="12" :lg="8">
				<el-form-item label="占位" prop="seize_a_seat">
					<el-input-number id="seize_a_seat" v-model.number="form['seize_a_seat']"
						v-if="user_group === '管理员' || (form['dormitory_allocation_id'] && $check_field('set','seize_a_seat')) || (!form['dormitory_allocation_id'] && $check_field('add','seize_a_seat'))"></el-input-number>
					<div v-else-if="$check_field('get','seize_a_seat')">{{form['seize_a_seat']}}</div>
				</el-form-item>
			</el-col>
			<el-col v-if="user_group === '管理员' || $check_field('get','student_account') || $check_field('add','student_account') || $check_field('set','student_account')" :xs="24" :sm="12" :lg="8">
				<el-form-item label="学生账号" prop="student_account">
						<el-select v-if="user_group === '管理员' || (form['dormitory_allocation_id'] && $check_field('set','student_account')) || (!form['dormitory_allocation_id'] && $check_field('add','student_account'))" id="student_account" v-model="form['student_account']" :disabled="disabledObj['student_account_isDisabled']">
							<el-option v-for="o in list_user_student_account" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','student_account')" id="student_account" v-model="form['student_account']" :disabled="true">
							<el-option v-for="o in list_user_student_account" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
				</el-form-item>
			</el-col>
			<el-col v-if="user_group === '管理员' || $check_field('get','housekeeping_personnel') || $check_field('add','housekeeping_personnel') || $check_field('set','housekeeping_personnel')" :xs="24" :sm="12" :lg="8">
				<el-form-item label="宿管人员" prop="housekeeping_personnel">
						<div v-if="user_group !== '管理员'">
							{{ get_user_session_housekeeping_personnel(form['housekeeping_personnel']) }}
							<!--<el-input id="business_name" v-model="form['housekeeping_personnel']" placeholder="请输入宿管人员"-->
							<!--v-if="user_group === '管理员' || (form['dormitory_allocation_id'] && $check_field('set','housekeeping_personnel')) || (!form['dormitory_allocation_id'] && $check_field('add','housekeeping_personnel'))" :disabled="disabledObj['housekeeping_personnel_isDisabled']"></el-input>-->
							<!--<div v-else-if="$check_field('get','housekeeping_personnel')">{{form['housekeeping_personnel']}}</div>-->
							<el-select v-if="user_group === '管理员' || (form['dormitory_allocation_id'] && $check_field('set','housekeeping_personnel')) || (!form['dormitory_allocation_id'] && $check_field('add','housekeeping_personnel'))" id="housekeeping_personnel" v-model="form['housekeeping_personnel']" :disabled="disabledObj['housekeeping_personnel_isDisabled']">
								<el-option v-for="o in list_user_housekeeping_personnel" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
							<el-select v-else-if="$check_field('get','housekeeping_personnel')" id="housekeeping_personnel" v-model="form['housekeeping_personnel']" :disabled="true">
								<el-option v-for="o in list_user_housekeeping_personnel" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
						</div>
						<el-select v-else id="housekeeping_personnel" v-model="form['housekeeping_personnel']" :disabled="disabledObj['housekeeping_personnel_isDisabled']">
							<el-option v-for="o in list_user_housekeeping_personnel" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
				</el-form-item>
			</el-col>
			<el-col :xs="24" :sm="12" :lg="8">
				<el-form-item>
					<el-button type="primary" @click="submit()">提交</el-button>
					<el-button @click="cancel()">取消</el-button>
				</el-form-item>
			</el-col>

		</el-form>
	</el-main>
</template>

<script>
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		data() {
			return {
				field: "dormitory_allocation_id",
				url_add: "~/api/dormitory_allocation/add?",
				url_set: "~/api/dormitory_allocation/set?",
				url_get_obj: "~/api/dormitory_allocation/get_obj?",
				url_upload: "~/api/dormitory_allocation/upload?",

				query: {
					"dormitory_allocation_id": 0,
				},

				form: {
					"building":'', // 楼栋
					"floor":'', // 楼层
					"room_number":'', // 房号
					"room_type":'', // 房间类型
					"bed_number":'', // 床位号
					"seize_a_seat":0, // 占位
					"student_account": 0, // 学生账号
					"housekeeping_personnel": 0, // 宿管人员
					"dormitory_allocation_id": 0, // ID

				},
				disabledObj:{
					"building_isDisabled": false,
					"floor_isDisabled": false,
					"room_number_isDisabled": false,
					"room_type_isDisabled": false,
					"bed_number_isDisabled": false,
					"student_account_isDisabled": false,
					"housekeeping_personnel_isDisabled": false,
				},
				// 用户列表
				list_user_student_account: [],
				// 用户列表
				list_user_housekeeping_personnel: [],
				// 用户组
				group_user_housekeeping_personnel: "",

			}
		},
		methods: {
			/**
			 * 获取学生用户列表
			 */
			async get_list_user_student_account() {
                // if(this.user_group !== "管理员" && this.form["student_account"] === 0) {
                //     this.form["student_account"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=学生");
                if(json.result && json.result.list){
                    this.list_user_student_account = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
			get_user_student_account(id){
				var obj = this.list_user_student_account.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			/**
			 * 获取宿管人员用户列表
			 */
			async get_list_user_housekeeping_personnel() {
                // if(this.user_group !== "管理员" && this.form["housekeeping_personnel"] === 0) {
                //     this.form["housekeeping_personnel"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=宿管人员");
                if(json.result && json.result.list){
                    this.list_user_housekeeping_personnel = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
			/**
			 * 获取宿管人员用户组
			 */
			async get_group_user_housekeeping_personnel() {
				this.form["housekeeping_personnel"] = this.user.user_id;
				var json = await this.$get("~/api/user_group/get_obj?name=宿管人员");
				if(json.result && json.result.obj){
					this.group_user_housekeeping_personnel = json.result.obj;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_session_housekeeping_personnel(id){
				var _this = this;
				var user_id = {"user_id":id}
				var url = "~/api/"+_this.group_user_housekeeping_personnel.source_table+"/get_obj?"
				this.$get(url, user_id, function(res) {
					if (res.result && res.result.obj) {
						var arr = []
						for (let key in res.result.obj) {
							arr.push(key)
						}
						var arrForm = []
						for (let key in _this.form) {
							arrForm.push(key)
						}
						for (var i=0;i<arr.length;i++){
							for (var j=0;j<arrForm.length;j++){
								if (arr[i]===arrForm[j]){
									if (arr[i]!=="housekeeping_personnel") {
										_this.form[arrForm[j]] = res.result.obj[arr[i]]
										_this.disabledObj[arrForm[j] + '_isDisabled'] = true
										break;
									}else {
										_this.disabledObj[arrForm[j] + '_isDisabled'] = true
									}
								}
							}
						}
					}
				});
			},
			get_user_housekeeping_personnel(id){
				var obj = this.list_user_housekeeping_personnel.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},

			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
				// 获取缓存数据附加
				form = $.db.get("form");
				$.push(this.form ,form);
				/**
				* 请求列表前
				* @param {Object} param
				*/
				var user_group = this.user.user_group;
				if (user_group !== "管理员") {
					switch (user_group) {
						case "学生账号":
							if(param["student_account"] > 0){
								param["student_account"] = this.user.user_id;
							}
							break;
						case "宿管人员":
							if(param["housekeeping_personnel"] > 0){
								param["housekeeping_personnel"] = this.user.user_id;
							}
							break;
					}
				}
				if(this.form && form){
					Object.keys(this.form).forEach(key => {
						Object.keys(form).forEach(dbKey => {
							if(dbKey === "charging_standard"){
								this.form['charging_rules'] = form[dbKey];
								this.disabledObj['charging_rules_isDisabled'] = true;
							};
							if(key === dbKey){
								this.disabledObj[key+'_isDisabled'] = true;
							}
						})
					})
				}
				$.db.del("form");
				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){

			},

			is_view(){
				var bl = this.user_group == "管理员";

				if(!bl){
					bl = this.$check_action('/dormitory_allocation/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/dormitory_allocation/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/dormitory_allocation/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/dormitory_allocation/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/dormitory_allocation/view','get');
					console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
				}

				console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

				return bl;
			},
			/**
			 * 上传文件
			 * @param {Object} param
			 */
			uploadimg(param) {
				this.uploadFile(param.file, "avatar");
			},

		},
		created() {
			this.get_list_user_student_account();
			this.get_list_user_housekeeping_personnel();
			this.get_group_user_housekeeping_personnel();
		}
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>
