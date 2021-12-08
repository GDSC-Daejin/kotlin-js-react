import kotlinx.css.h1
import react.Props
import react.dom.div
import react.dom.h1
import react.fc

val app = fc<Props> {

    h1 {
        +"Hello Kotlin React"
    }

    div {
        child(userList) {
            attrs {
                users = listOf(
                    User("Harry")
                )
            }
        }
    }

}