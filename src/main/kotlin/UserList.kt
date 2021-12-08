import react.Props
import react.dom.p
import react.fc

data class User(val name : String)

external interface UserListProps : Props {
    var users : List<User>
}

val userList = fc<UserListProps> { props ->

    props.users.forEach {
        p {
            +it.toString()
        }
    }

}