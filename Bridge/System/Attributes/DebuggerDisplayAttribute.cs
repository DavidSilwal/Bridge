// ==++==
// 
//   Copyright (c) Microsoft Corporation.  All rights reserved.
// 
// ==--==
/*============================================================
**
** Class:  DebuggerAttributes
**
**
** Purpose: Attributes for debugger
**
**
===========================================================*/

namespace System.Diagnostics
{
    using System;
    using System.Runtime.InteropServices;
    using System.Diagnostics.Contracts;
    using System.ComponentModel;

    [Serializable]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Method | AttributeTargets.Constructor, Inherited = false)]
    [ComVisible(true)]
    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.NonScriptable]
    [Bridge.External]
    public sealed class DebuggerStepThroughAttribute : Attribute
    {
        public extern DebuggerStepThroughAttribute();
    }

    [Serializable]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Constructor, Inherited = false)]
    [ComVisible(true)]
    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.NonScriptable]
    [Bridge.External]
    public sealed class DebuggerStepperBoundaryAttribute : Attribute
    {
        public extern DebuggerStepperBoundaryAttribute();
    }

    [Serializable]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Property | AttributeTargets.Constructor, Inherited = false)]
    [ComVisible(true)]
    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.NonScriptable]
    [Bridge.External]
    public sealed class DebuggerHiddenAttribute : Attribute
    {
        public extern DebuggerHiddenAttribute();
    }

    [Serializable]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method | AttributeTargets.Property | AttributeTargets.Constructor | AttributeTargets.Struct, Inherited = false)]
    [ComVisible(true)]
    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.NonScriptable]
    [Bridge.External]
    public sealed class DebuggerNonUserCodeAttribute : Attribute
    {
        public extern DebuggerNonUserCodeAttribute();
    }

    // Attribute class used by the compiler to mark modules.  
    // If present, then debugging information for everything in the
    // assembly was generated by the compiler, and will be preserved
    // by the Runtime so that the debugger can provide full functionality
    // in the case of JIT attach. If not present, then the compiler may
    // or may not have included debugging information, and the Runtime
    // won't preserve the debugging info, which will make debugging after
    // a JIT attach difficult.
    [AttributeUsage(AttributeTargets.Assembly | AttributeTargets.Module, AllowMultiple = false)]
    [ComVisible(true)]
    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.NonScriptable]
    [Bridge.External]
    public sealed class DebuggableAttribute : Attribute
    {
        [Flags]
        [ComVisible(true)]
        [Bridge.NonScriptable]
        [Bridge.External]
        public enum DebuggingModes
        {
            None = 0x0,
            Default = 0x1,
            DisableOptimizations = 0x100,
            IgnoreSymbolStoreSequencePoints = 0x2,
            EnableEditAndContinue = 0x4
        }

        public extern DebuggableAttribute(bool isJITTrackingEnabled,
                                   bool isJITOptimizerDisabled);

        public extern DebuggableAttribute(DebuggingModes modes);

        public extern bool IsJITTrackingEnabled { get; }

        public extern bool IsJITOptimizerDisabled { get; }

        public extern DebuggingModes DebuggingFlags { get; }
    }

    //  DebuggerBrowsableState states are defined as follows:
    //      Never       never show this element
    //      Expanded    expansion of the class is done, so that all visible internal members are shown
    //      Collapsed   expansion of the class is not performed. Internal visible members are hidden
    //      RootHidden  The target element itself should not be shown, but should instead be 
    //                  automatically expanded to have its members displayed.
    //  Default value is collapsed

    //  Please also change the code which validates DebuggerBrowsableState variable (in this file)
    //  if you change this enum.
    [ComVisible(true)]
    [Bridge.NonScriptable]
    [Bridge.External]
    public enum DebuggerBrowsableState
    {
        Never = 0,
        //Expanded is not supported in this release
        //Expanded = 1, 
        Collapsed = 2,
        RootHidden = 3
    }


    // the one currently supported with the csee.dat 
    // (mcee.dat, autoexp.dat) file. 
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Property, AllowMultiple = false)]
    [ComVisible(true)]
    [Bridge.NonScriptable]
    [Bridge.External]
    public sealed class DebuggerBrowsableAttribute : Attribute
    {
        public extern DebuggerBrowsableAttribute(DebuggerBrowsableState state);
        public extern DebuggerBrowsableState State { get; }
    }


    // DebuggerTypeProxyAttribute
    [AttributeUsage(AttributeTargets.Struct | AttributeTargets.Class | AttributeTargets.Assembly, AllowMultiple = true)]
    [ComVisible(true)]
    [Bridge.NonScriptable]
    [Bridge.External]
    public sealed class DebuggerTypeProxyAttribute : Attribute
    {
        public extern DebuggerTypeProxyAttribute(Type type);
        public extern DebuggerTypeProxyAttribute(string typeName);
        public extern string ProxyTypeName { get; }
        public extern Type Target { get; set; }
        public extern string TargetTypeName { get; set; }
    }

    // This attribute is used to control what is displayed for the given class or field 
    // in the data windows in the debugger.  The single argument to this attribute is
    // the string that will be displayed in the value column for instances of the type.  
    // This string can include text between { and } which can be either a field, 
    // property or method (as will be documented in mscorlib).  In the C# case, 
    // a general expression will be allowed which only has implicit access to the this pointer 
    // for the current instance of the target type. The expression will be limited, 
    // however: there is no access to aliases, locals, or pointers. 
    // In addition, attributes on properties referenced in the expression are not processed.
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Delegate | AttributeTargets.Enum | AttributeTargets.Field | AttributeTargets.Property | AttributeTargets.Assembly, AllowMultiple = true)]
    [ComVisible(true)]
    [Bridge.NonScriptable]
    [Bridge.External]
    public class DebuggerDisplayAttribute : Attribute
    {
        public extern DebuggerDisplayAttribute(string value);

        public extern string Value { get; }

        public extern string Name { get; set; }

        public extern string Type { get; set; }

        public extern Type Target { get; set; }

        public extern string TargetTypeName { get; set; }
    }


    /// <summary>
    /// Signifies that the attributed type has a visualizer which is pointed
    /// to by the parameter type name strings.
    /// </summary>
    [AttributeUsage(AttributeTargets.Struct | AttributeTargets.Class | AttributeTargets.Assembly, AllowMultiple = true)]
    [ComVisible(true)]
    [Bridge.NonScriptable]
    [Bridge.External]
    public sealed class DebuggerVisualizerAttribute : Attribute
    {
        public extern DebuggerVisualizerAttribute(string visualizerTypeName);
        public extern DebuggerVisualizerAttribute(string visualizerTypeName, string visualizerObjectSourceTypeName);
        public extern DebuggerVisualizerAttribute(string visualizerTypeName, Type visualizerObjectSource);
        public extern DebuggerVisualizerAttribute(Type visualizer);
        public extern DebuggerVisualizerAttribute(Type visualizer, Type visualizerObjectSource);
        public extern DebuggerVisualizerAttribute(Type visualizer, string visualizerObjectSourceTypeName);
        public extern string VisualizerObjectSourceTypeName { get; }
        public extern string VisualizerTypeName { get; }
        public extern string Description { get; set; }

        public extern Type Target { get; set; }

        public extern string TargetTypeName { get; set; }
    }
}
