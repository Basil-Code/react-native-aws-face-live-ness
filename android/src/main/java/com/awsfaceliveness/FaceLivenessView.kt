package com.awsfaceliveness

import android.content.Context
import android.util.AttributeSet
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.AbstractComposeView
import com.amplifyframework.ui.liveness.ui.FaceLivenessDetector
import com.amplifyframework.ui.liveness.ui.LivenessColorScheme

class FaceLiveNessView @JvmOverloads constructor(
  context: Context,
  attrs: AttributeSet? = null,
) : AbstractComposeView(context, attrs) {
    private var mSessionId: String = ""

    fun setSessionId(sessionId: String) {
      mSessionId = sessionId
    }
    @Composable
    override fun Content() {
      MaterialTheme(
        colorScheme = LivenessColorScheme.default()
      ) {
        FaceLivenessDetector(
          sessionId = mSessionId,
          region = "ap-northeast-1",
          onComplete = {
            Log.i("MyApp", "Face Liveness flow is complete")
            // The Face Liveness flow is complete and the
            // session results are ready. Use your backend to
            // retrieve the results for the Face Liveness session.
          },
          onError = { error ->
            // Log.e("MyApp", "Error during Face Liveness flow", error)
            // An error occurred during the Face Liveness flow, such
            // as time out or missing the required permissions.
          }
        )
      }
    }
}
