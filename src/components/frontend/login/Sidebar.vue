<template>
  <div class="layout">
    <aside class="sidebar">
      <h2 class="sidebar-title">Admin Panel</h2>
      <ul class="sidebar-menu">
        <li @click="goTo('dashboard')">
          <i class="fas fa-home"></i> Dashboard
        </li>
        <li @click="goTo('employees')">
          <i class="fas fa-users-cog"></i> Manage Employees
        </li>
       <li class="dropdown">
  <div class="dropdown-toggle" @click="toggleDropdown">
    <i class="fas fa-sign-out-alt"></i> Leave <i class="fas fa-caret-down"></i>
  </div>
  <ul v-if="dropdownOpen" class="dropdown-menu">
    <li @click="goTo('leaveapplications')">
      <i class="fas fa-list"></i> All Leaves
    </li>
    <li @click="goTo('approvedleaves')">
      <i class="fas fa-check-circle"></i> Approved Leaves
    </li>
    <li @click="goTo('rejectedleaves')">
      <i class="fas fa-times-circle"></i> Rejected Leaves
    </li>
   
     <li @click="goTo('pendingleaves')">
      <i class="fas fa-clock"></i> Pending Leaves
    </li>
  </ul>
</li>
<li @click="goTo('manageleavetype')">
      <i class="fas fa-clock"></i> Manage Leaves Type
    </li>
    

        <li @click="goTo('settings')">
          <i class="fas fa-cogs"></i> Settings
        </li>
        <li @click="logout">
          <i class="fas fa-sign-out-alt"></i> Logout
        </li>
      </ul>
    </aside>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: [],
       dropdownOpen: false,
      showRegister: false,
      isEditMode: false,
      editingId: null,  // changed from editingEmail to editingId
      registerForm: {
        id: '',  // include id for edit
        empId: '',
        username: '',
        email: '',
        gender: '',
        department: '',
        city: '',
        address: '',
        mobile: '',
        keyResponsibility: '',
        password: '',
        documents: []
      }
    }
  },
  methods: {
     toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  },
    goTo(route) {
      this.$router.push(`/${route}`)
    },

    openRegisterForm() {
      this.resetForm()
      this.showRegister = true
    },

    closeRegisterForm() {
      this.showRegister = false
      this.resetForm()
    },

    async handleRegister() {
      try {
        const formData = new FormData()
        for (const key in this.registerForm) {
          if (key === 'documents') {
            this.registerForm.documents.forEach((file) =>
              formData.append('documents', file)
            )
          } else {
            formData.append(key, this.registerForm[key])
          }
        }

        const url = this.isEditMode
          ? `http://127.0.0.1:3333/users/${this.editingId}`   // use id here
          : 'http://127.0.0.1:3333/register'

        const method = this.isEditMode ? 'put' : 'post'

        await axios({
          method,
          url,
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })

        alert(this.isEditMode ? 'User updated successfully!' : 'Registration successful!')
        this.showRegister = false
        this.resetForm()
        this.fetchUsers()
      } catch (error) {
        console.error('Register error:', error)
        if (error.response && error.response.data && error.response.data.message) {
          alert(`Operation failed: ${error.response.data.message}`)
        } else {
          alert('Operation failed due to network or server error.')
        }
      }
    },

    handleFileUpload(event) {
      this.registerForm.documents = Array.from(event.target.files)
    },

    resetForm() {
      this.registerForm = {
        id: '',
        empId: '',
        username: '',
        email: '',
        gender: '',
        department: '',
        city: '',
        address: '',
        mobile: '',
        keyResponsibility: '',
        password: '',
        documents: []
      }
      this.isEditMode = false
      this.editingId = null
    },

    async fetchUsers() {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('http://127.0.0.1:3333/users', {
          headers: { Authorization: `Bearer ${token}` }
        })
        this.users = response.data
      } catch (error) {
        alert('Failed to fetch users')
        console.error(error)
      }
    },

    editUser(user) {
      // Populate form with user data for editing
      this.registerForm = {
        id: user.id || '',               // assign id here
        empId: user.empId || '',
        username: user.username || '',
        email: user.email || '',
        gender: user.gender || '',
        department: user.department || '',
        city: user.city || '',
        address: user.address || '',
        mobile: user.mobile || '',
        keyResponsibility: user.keyResponsibility || '',
        password: '', // password not required on edit
        documents: []
      }
      this.isEditMode = true
      this.editingId = user.id   // set editingId here
      this.showRegister = true
    },

    async deleteUser(id) {
      if (confirm('Are you sure you want to delete this user?')) {
        try {
          await axios.delete(`http://127.0.0.1:3333/users/${encodeURIComponent(id)}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
          this.fetchUsers()
          alert('User deleted successfully!')
        } catch (error) {
          alert('Failed to delete user.')
          console.error(error)
        }
      }
    },

    logout() {
      const token = localStorage.getItem('token')
      axios
        .post(
          'http://127.0.0.1:3333/logout',
          {},
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        .finally(() => {
          localStorage.removeItem('token')
          this.$router.push('/auth')
        })
    }
  },

  mounted() {
    const token = localStorage.getItem('token')
    if (!token) {
      this.$router.push('/auth')
    } else {
      this.fetchUsers()
    }
  }
}
</script>




<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

/* Sidebar container */
.sidebar {
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  width: 250px;
  padding: 30px 20px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Sidebar title */
.sidebar-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 25px;
  text-align: center;
}

/* Menu styles */
.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu li,
.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  padding: 12px 38px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transition: background 0.3s, transform 0.2s;
  cursor: pointer;
}

.sidebar-menu li:hover,
.dropdown-toggle:hover {
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateX(5px);
  font-weight: 600;
}

.sidebar-menu i {
  min-width: 18px;
  text-align: center;
}

/* Dropdown menu styles */
.dropdown {
  position: relative;
}

.dropdown-menu {
  background: #ffffff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 5px 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 220px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 999;
}

.dropdown-menu li {
  padding: 10px 15px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background 0.2s;
    transition:  transform 0.2s ease;
}

.dropdown-menu li:hover {
  /* background-color: #f0f0f0; */
  color: #000;
  transform: translateX(5px);
  cursor: pointer;
}

/* Layout */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f4f6fa;
}

/* Adjust dropdown caret */
.dropdown-toggle i:last-child {
  margin-left: auto;
}

</style>
