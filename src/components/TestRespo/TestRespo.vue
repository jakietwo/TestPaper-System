<template>
  <div class="TestRespo">
      <el-button class="addTestRespo" type="primary" @click="addTestRespo">增加试卷</el-button>
      <el-select class="selectTestPaper" v-model="testPaperValue" placeholder="请选择试卷">
        <el-option v-for="(item) in options" :key="item.value"
        :label="item.label"
        :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button class="goback" type="primary" @click="goback">返回</el-button>

      <h1 class="title">我是题库</h1>
      <div class="wrapper">
        <ul class="test-list">
          <li class="test-item" v-for="(item, index) in respoData" :key="`class${index}`">
            {{index+1}}.{{item.asktitle}}
            <el-button   type="primary" class="addtoTestPaper" @click="addtoTestPaper(item)" >添加到试卷</el-button>
            <p class="answer-item" v-for="(item1, index1) in item.answers" :key="`class${index1}`">
              {{item1.answername}}: {{item1.answercontent}}
            </p> 
            <span class="right-answer" style="display:block"> 正确答案: {{item.rightaid}}</span>  
            <span class="editCollection" >
              <el-button type="primary" icon="el-icon-edit" @click="editThisAsk(item)"></el-button>
              <el-button type="primary" icon="el-icon-delete" @click="deleteThisAsk(index)"></el-button>
            </span>
          </li>
        </ul>
      </div>
      <!-- 增加试卷的modal -->
      <el-dialog title="增加试卷" :visible.sync="addModal" width="40%" center>
        新的试卷名字: &nbsp;<el-input  style="width:80%" placeholder="请输入新的试卷名字" v-model="newTestPaperName"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addModal= false">取消</el-button>
          <el-button @click="confirmAddTestPaper">确定</el-button>
        </span>
      </el-dialog>
      <!-- 试卷显示题目 -->
      <div class="showHadAddAsk">
        <h1 class="showTitle" style="margin-left:40%;font-size:20px;">{{testPaperValue}}</h1>
        <ul style="width:100%">
           <transition-group name="el-fade-in-linear">
            <li style="width:90%;margin: 10px auto;" v-for="(item, index) in TestList" :key="`class${index}`">
              <span class="testitem-title">{{index+1}}.{{item.asktitle}}
                <el-button style="float:right;" type="warning"
                icon="el-icon-delete"
                ></el-button>
              </span> 
        
            </li>
           </transition-group>
        </ul>
        <el-button class="productTest"  type="primary">生成试卷</el-button>
      </div>
  </div>
</template>

<script>
import respoList from "@/common/api/TestRespo";
export default {
  name: "TestRespo",
  data() {
    return {
      respoData: [],
      testPaperValue: "",
      addModal: false,
      newTestPaperName: "",
      options: [
        {
          value: "心理测试",
          label: "心理测试"
        },
        {
          value: "压力测试",
          label: "压力测试"
        },
        {
          value: "生活测试",
          label: "生活测试"
        },
        {
          value: "交际测试",
          label: "交际测试"
        }
      ],
      TestList: []
    };
  },
  created() {},
  mounted() {
    this.respoData = respoList.data;
    console.log(this.respoData);
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    // 增加试卷种类
    addTestRespo() {
      this.addModal = true;
    },
    /* 
    点击题目添加到试卷
    */
    addtoTestPaper(item) {
      if (this.testPaperValue) {
        item.isadded = true;
        this.TestList.push(item);
        console.log(this.TestList);
      } else {
        this.$message({
          message: "请先选择试卷",
          type: "warning"
        });
      }
    },
    // 确定添加试卷
    confirmAddTestPaper() {
      if (this.newTestPaperName) {
        let obj = {};
        (obj.value = "testpaper5"), (obj.label = this.newTestPaperName);
        this.options.push(obj);
        this.addModal = false;
      } else {
        return;
      }
    },
    // 编辑这个问题
    editThisAsk() {},
    // 删除这个问题
    deleteThisAsk(index) {
      let arr = []
      // for (let i = 0; i <this.respoData.length; i++) {
      //   if (index===i) {
      //     continue
      //   }  
      //   arr.push(this.respoData[i])
      // }
      this.respoData.splice(index,1)
    }
  }
};
</script>
<style  scoped>
.addTestRespo {
  position: absolute;
  right: 250px;
  top: 20px;
}
.selectTestPaper {
  position: absolute;
  right: 400px;
  top: 20px;
}
.TestRespo {
  width: 100%;
  height: 100%;
}
.goback {
  position: absolute;
  top: 20px;
  left: 30%;
}
.title {
  margin: 20px 0 20px 50%;
  width: 200px;
  font-size: 24px;
  letter-spacing: 2px;
  transform: translate3d(-50%, 0, 0);
}
.wrapper {
  display: inline-block;
  margin: 50px 0 10px 40%;
  transform: translate3d(-50%, 0, 0);
  min-width: 700px;
  min-height: 600px;
  border: 1px solid orange;
  border-radius: 20px;
}
.test-list {
  width: 100%;
  margin: 0 auto;
}
.addtoTestPaper {
  float: right;
  margin-top: 20px;
}
.test-item {
  width: 90%;
  margin: 20px auto;
  font-size: 18px;
  letter-spacing: 2px;
}
.answer-item {
  text-indent: 18px;
  margin: 10px auto;
  font-size: 16px;
}
.right-answer {
  text-indent: 18px;
  font-size: 16px;
  margin: 10px auto;
}
.showHadAddAsk {
  position: absolute;
  top: 112px;
  right: 100px;
  padding-bottom: 50px;
  text-align: left;
  width: 400px;
  min-height: 800px;
  border: 1px solid orange;
  border-radius: 20px;
}
.showTitle {
  margin: 20px 0;
}
.productTest {
  position: absolute;
  bottom: 10px;
  font-size: 18px;
  margin-left: 50%;
  transform: translate3d(-50%, 0, 0);
}
.testitem-title {
  display: inline-block;
  margin: 10px auto;
  width: 100%;
  font-size: 16px;
  line-height: 32px;
}
.editCollection {
  opacity: 0;
  margin-left: 20px;
}
.editCollection:hover {
  opacity: 1;
}
</style>