package com.awsfaceliveness;

import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class AwsFaceLiveNessViewManager extends SimpleViewManager<View> {
  public static final String REACT_CLASS = "AwsFaceLiveNessView";
  ReactApplicationContext mCallerContext;
  public AwsFaceLiveNessViewManager(ReactApplicationContext reactContext) {
    mCallerContext = reactContext;
  }

  @Override
  @NonNull
  public String getName() {
    return REACT_CLASS;
  }

  @NonNull
  @Override
  protected View createViewInstance(@NonNull ThemedReactContext themedReactContext) {
    return new FaceLiveNessView(themedReactContext);
  }

//  @ReactProp(name = "sessionId")
//  @NonNull
//  public void setSessionId(FaceLiveNessView view, String sessionId) {
//    view.setSessionId(sessionId);
//  }
}
