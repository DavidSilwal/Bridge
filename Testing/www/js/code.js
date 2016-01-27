﻿/* global Bridge */

"use strict";

Bridge.define('Bridge.ClientTest.Constants', {
    statics: {
        PREFIX_SYSTEM_CLASSES: "Simple types",
        PREFIX_SYSTEM_INTERFACES: "System interface",
        PREFIX_COLLECTIONS: "Collections",
        PREFIX_UTILITIES: "Utilities",
        PREFIX_EXCEPTIONS: "Exceptions",
        MODULE_BASIC_CSHARP: "C#",
        MODULE_ISSUES: "Issues",
        MODULE_LINQ: "LINQ",
        MODULE_DATETIME: "Date and time",
        MODULE_NULLABLE: "Nullable",
        MODULE_STRING: "String",
        MODULE_REGEX: "Regex",
        MODULE_ENUM: "Enum",
        MODULE_MATH: "Math",
        MODULE_DECIMAL_MATH: "Decimal Math",
        MODULE_COMPARER: "Comparer",
        MODULE_EQUALITYCOMPARER: "EqualityComparer",
        MODULE_NUMBERFORMATINFO: "NumberFormatInfo",
        MODULE_CULTUREINFO: "СultureInfo",
        MODULE_PROPERTYACCESSOR: "Property accessor",
        IGNORE_DATE: null,
        config: {
            init: function () {
                this.MODULE_DECIMAL = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_DOUBLE = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_INT16 = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_INT64 = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_SBYTE = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_FLOAT = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_UINT64 = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_UINT32 = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_OBJECT = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_CHAR = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_INT32 = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_UINT16 = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_BYTE = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_TUPLE = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_VERSION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_CLASSES;
                this.MODULE_ICOLLECTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_COLLECTIONS;
                this.MODULE_IDICTIONARY = Bridge.get(Bridge.ClientTest.Constants).PREFIX_COLLECTIONS;
                this.MODULE_LIST = Bridge.get(Bridge.ClientTest.Constants).PREFIX_COLLECTIONS;
                this.MODULE_ILIST = Bridge.get(Bridge.ClientTest.Constants).PREFIX_COLLECTIONS;
                this.MODULE_ITERATORBLOCK = Bridge.get(Bridge.ClientTest.Constants).PREFIX_COLLECTIONS;
                this.MODULE_ARRAY = Bridge.get(Bridge.ClientTest.Constants).PREFIX_COLLECTIONS;
                this.MODULE_IENUMERABLE = Bridge.get(Bridge.ClientTest.Constants).PREFIX_COLLECTIONS;
                this.MODULE_GENERICDICTIONARY = Bridge.get(Bridge.ClientTest.Constants).PREFIX_COLLECTIONS;
                this.MODULE_ICOMPARABLE = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_INTERFACES;
                this.MODULE_IEQUATABLE = Bridge.get(Bridge.ClientTest.Constants).PREFIX_SYSTEM_INTERFACES;
                this.MODULE_RUNTIMEHELPERS = Bridge.get(Bridge.ClientTest.Constants).PREFIX_UTILITIES;
                this.MODULE_ENVIRONMENT = Bridge.get(Bridge.ClientTest.Constants).PREFIX_UTILITIES;
                this.MODULE_NOTSUPPORTEDEXCEPTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_EXCEPTIONS;
                this.MODULE_KEYNOTFOUNDEXCEPTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_EXCEPTIONS;
                this.MODULE_EXCEPTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_EXCEPTIONS;
                this.MODULE_ARGUMENTNULLEXCEPTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_EXCEPTIONS;
                this.MODULE_DIVIDEBYZEROEXCEPTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_EXCEPTIONS;
                this.MODULE_NOTIMPLEMENTEDEXCEPTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_EXCEPTIONS;
                this.MODULE_OVERFLOWEXCEPTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_EXCEPTIONS;
                this.MODULE_ARITHMETICEXCEPTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_EXCEPTIONS;
                this.MODULE_FORMATEXCEPTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_EXCEPTIONS;
                this.MODULE_INVALIDOPERATIONEXCEPTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_EXCEPTIONS;
                this.MODULE_INVALIDCASTEXCEPTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_EXCEPTIONS;
                this.MODULE_ARGUMENTEXCEPTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_EXCEPTIONS;
                this.MODULE_NULLREFERENCEEXCEPTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_EXCEPTIONS;
                this.MODULE_ARGUMENTOUTOFRANGEEXCEPTION = Bridge.get(Bridge.ClientTest.Constants).PREFIX_EXCEPTIONS;
            }
        }
    }
});

Bridge.define('Bridge.ClientTest.ArrayTests.C', {
    i: 0,
    constructor: function (i) {
        this.i = i;
    },
    equals: function (o) {
        return Bridge.is(o, Bridge.ClientTest.ArrayTests.C) && this.i === (Bridge.cast(o, Bridge.ClientTest.ArrayTests.C)).i;
    },
    getHashCode: function () {
        return this.i;
    }
});

Bridge.define('Bridge.ClientTest.ArrayTests.TestReverseComparer', {
    inherits: [Bridge.IComparer$1(Bridge.Int)],
    compare: function (x, y) {
        return x === y ? 0 : (x > y ? -1 : 1);
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.Class68', {
    x: 0,
    y: 1,
    test: function () {
        // Multiple local vars correctly
        var x = 1, y = 2;

        var z = x + y;
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.ClassA', {
    statics: {
        constructor: function () {
            Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).staticString = "Defined string";
            Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).staticInt = -340;
        },
        statitIntNotInitialized: 0,
        statitStringNotInitialized: null,
        staticInt: 0,
        staticString: null,
        CONST_CHAR: 81,
        CONST_DECIMAL: Bridge.Decimal("3.123456789324324324"),
        staticMethod1: function (i, s, d) {
            Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).statitIntNotInitialized = i;
            Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).statitStringNotInitialized = s;

            return Bridge.merge(new Bridge.ClientTest.BasicCSharp.ClassA("constructor"), {
                setDoubleA: d
            } );
        },
        staticMethod2: function (p) {
            var i = Bridge.cast(p[0], Bridge.Int) + 1000;
            var s = Bridge.cast(p[1], String);
            var d = Bridge.cast(p[2], Number);

            return Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).staticMethod1(i, s, d);
        },
        tryParse: function (o, i) {
            i.v = 3;

            return true;
        },
        getDefaultInt: function () {
            return Bridge.getDefaultValue(Bridge.Int);
        }
    },
    data: null,
    config: {
        properties: {
            NumberA: 0,
            StringA: null,
            BoolA: false,
            DoubleA: 0,
            DecimalA: Bridge.Decimal(0.0)
        }
    },
    constructor: function () {
        this.setNumberA(10);
        this.setStringA("Str");
        this.setBoolA(true);
        this.setDoubleA(Number.POSITIVE_INFINITY);
        this.setDecimalA(Bridge.Decimal.MinusOne);
        this.setData(Bridge.merge(new Bridge.ClientTest.BasicCSharp.ClassA.Aux1(), {
            setNumber: 700
        } ));
    },
    constructor$1: function (d) {
        Bridge.ClientTest.BasicCSharp.ClassA.prototype.$constructor.call(this);

        if (!Bridge.hasValue(d)) {
            throw new Bridge.Exception("Related should not be null");
        }

        this.setData(d);
    },
    constructor$2: function (p) {
        Bridge.ClientTest.BasicCSharp.ClassA.prototype.$constructor.call(this);

        if (!Bridge.hasValue(p) || p.length < 6) {
            throw new Bridge.Exception("Should pass six parameters");
        }

        if (Bridge.is(p[0], Bridge.Int)) {
            this.setNumberA(Bridge.cast(p[0], Bridge.Int));
        }

        if (Bridge.is(p[1], String)) {
            this.setStringA(Bridge.cast(p[1], String));
        }

        if (Bridge.is(p[2], Boolean)) {
            this.setBoolA(Bridge.cast(p[2], Boolean));
        }

        if (Bridge.is(p[3], Number)) {
            this.setDoubleA(Bridge.cast(p[3], Number));
        }

        if (Bridge.is(p[4], Bridge.Decimal)) {
            this.setDecimalA(Bridge.cast(p[4], Bridge.Decimal));
        }

        if (Bridge.is(p[5], Bridge.ClientTest.BasicCSharp.ClassA.Aux1)) {
            this.setData(Bridge.cast(p[5], Bridge.ClientTest.BasicCSharp.ClassA.Aux1));
        }
    },
    getData: function () {
        return this.data;
    },
    setData: function (value) {
        this.data = value;
    },
    method1: function () {
        var a1 = Bridge.merge(new Bridge.ClientTest.BasicCSharp.ClassA.Aux1(), {
            setNumber: 1
        } );

        return Bridge.merge(new Bridge.ClientTest.BasicCSharp.ClassA.Aux1(), {
            setNumber: 2,
            setRelated: a1
        } );
    },
    method2: function (a) {
        a.setRelated(a);
    },
    method3: function () {
        if (Bridge.hasValue(this.getData())) {
            return this.getData().toString();
        }

        return "no data";
    },
    method4: function (i, add) {
        i = i + add;
        return i;
    },
    method5: function (i) {
        if (i === void 0) { i = -5; }
        return i;
    },
    method5$1: function (i, k) {
        if (i === void 0) { i = -50; }
        if (k === void 0) { k = -60; }
        return i + k;
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.ClassA.Aux1', {
    config: {
        properties: {
            Number: 0,
            Related: null
        }
    },
    toString: function () {
        return Bridge.String.format("{0} Has related {1}", this.getNumber(), Bridge.hasValue(this.getRelated()) ? this.getRelated().getNumber().toString() : "No");
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.Data', {
    config: {
        properties: {
            Count: 0
        }
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.Point', {
    statics: {
        constructor: function () {
            Bridge.get(Bridge.ClientTest.BasicCSharp.Point).staticInt = 500;
            Bridge.get(Bridge.ClientTest.BasicCSharp.Point).staticString = "Initialized";
        },
        statitIntNotInitialized: 0,
        statitStringNotInitialized: null,
        staticInt: 0,
        staticString: null,
        CONST_CHAR: 87,
        test3: function () {
            return Bridge.get(Bridge.ClientTest.BasicCSharp.Point).statitIntNotInitialized + Bridge.get(Bridge.ClientTest.BasicCSharp.Point).staticInt;
        },
        getDefaultValue: function () { return new Bridge.ClientTest.BasicCSharp.Point(); }
    },
    x: 0,
    y: 0,
    constructor: function () {
    },
    test1: function () {
        return Bridge.get(Bridge.ClientTest.BasicCSharp.Point).staticInt + this.x;
    },
    test2: function (p) {
        return Bridge.merge(new Bridge.ClientTest.BasicCSharp.Point(), {
            x: this.x + p.x,
            y: this.y + p.y
        } );
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.x == null ? 0 : Bridge.getHashCode(this.x));
        hash = hash * 23 + (this.y == null ? 0 : Bridge.getHashCode(this.y));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BasicCSharp.Point)) {
            return false;
        }
        return Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BasicCSharp.Point();
        s.x = this.x;
        s.y = this.y;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.Rectangle', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BasicCSharp.Rectangle(); }
    },
    config: {
        init: function () {
            this.l = new Bridge.ClientTest.BasicCSharp.Point();
            this.t = new Bridge.ClientTest.BasicCSharp.Point();
        }
    },
    constructor$1: function (x, y) {
        // [#69]
        (new Bridge.ClientTest.BasicCSharp.Rectangle("constructor")).$clone(this);

        this.l.x = x;
        this.l.y = y;
    },
    constructor$2: function (x1, y1, x2, y2) {
        this.l.x = x1;
        this.l.y = y1;
        this.t.x = x2;
        this.t.y = y2;
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.l == null ? 0 : Bridge.getHashCode(this.l));
        hash = hash * 23 + (this.t == null ? 0 : Bridge.getHashCode(this.t));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BasicCSharp.Rectangle)) {
            return false;
        }
        return Bridge.equals(this.l, o.l) && Bridge.equals(this.t, o.t);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BasicCSharp.Rectangle();
        s.l = this.l;
        s.t = this.t;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestAbstractClass.A', {
    config: {
        properties: {
            Data: 0
        }
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestAbstractClass.B', {
    inherits: [Bridge.ClientTest.BasicCSharp.TestAbstractClass.A],
    getString: function () {
        this.setData(this.getData()+1);
        return "B";
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestAbstractClass.C', {
    inherits: [Bridge.ClientTest.BasicCSharp.TestAbstractClass.B],
    getString: function () {
        this.setData(this.getData()-1);
        return "C";
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestEnum.Digits', {
    statics: {
        zero: 0,
        one: 1,
        two: 2
    },
    $enum: true
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestEnum.Pets', {
    statics: {
        none: 0,
        dog: 1,
        cat: 2,
        bird: 4,
        rabbit: 8,
        other: 16
    },
    $enum: true,
    $flags: true
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestEnum.Abc', {
    statics: {
        a: -1,
        b: 0,
        c: 1
    },
    $enum: true
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestEnum.Pets1', {
    statics: {
        none: 0,
        dog: 1,
        cat: 2,
        bird: 4,
        rabbit: 8,
        other: 16
    },
    $enum: true
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestInheritance.A', {
    config: {
        properties: {
            X: 0
        }
    },
    constructor: function (x) {
        this.setX(x);
    },
    handleNumber: function (i) {
        return i;
    },
    handleString: function (s) {
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestInheritance.B', {
    inherits: [Bridge.ClientTest.BasicCSharp.TestInheritance.A],
    config: {
        properties: {
            Y: 0
        }
    },
    constructor: function (x, y) {
        Bridge.ClientTest.BasicCSharp.TestInheritance.A.prototype.$constructor.call(this, x);

        this.setY(y);
    },
    handleNumber$1: function (i) {
        return i * 100;
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestInterfaces.ISimple');

Bridge.define('Bridge.ClientTest.BasicCSharp.TestInterfaces.B', {
    inherits: [Bridge.ClientTest.BasicCSharp.TestInterfaces.ISimple],
    data: 0,
    constructor: function () {
        this.data = 2;
    },
    getData: function () {
        return this.data;
    },
    setData: function (value) {
        this.data = value;
    },
    getString: function () {
        return "explicit B.ISimple";
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestInterfaces.A', {
    inherits: [Bridge.ClientTest.BasicCSharp.TestInterfaces.ISimple],
    config: {
        properties: {
            Data: 0
        }
    },
    constructor: function () {
        this.setData(1);
    },
    getString: function () {
        return "A.ISimple";
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestInterfaces.ISimpleAsWell');

Bridge.define('Bridge.ClientTest.BasicCSharp.TestInterfaces.C', {
    inherits: [Bridge.ClientTest.BasicCSharp.TestInterfaces.ISimple,Bridge.ClientTest.BasicCSharp.TestInterfaces.ISimpleAsWell],
    data: 0,
    dataAsWell: 0,
    constructor: function () {
        this.data = 3;
        this.dataAsWell = 4;
    },
    getData: function () {
        return this.data;
    },
    setData: function (value) {
        this.data = value;
    },
    getDataAsWell: function () {
        return this.dataAsWell;
    },
    setDataAsWell: function (value) {
        this.dataAsWell = value;
    },
    getString: function () {
        return "C.ISimple";
    },
    getStringAsWell: function () {
        return "C.ISimpleAsWell";
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestOverloadInstanceMethods.Instance', {
    foo$2: function (x) {
        return "Foo(int x)";
    },
    foo$5: function (s) {
        return "Foo(string s)";
    },
    foo: function (d) {
        return "Foo(double d)";
    },
    foo$4: function (x, y) {
        return "Foo(int x, int y)";
    },
    foo$3: function (x, y) {
        return "Foo(int x, double y)";
    },
    foo$1: function (x, y) {
        return "Foo(double x, int y)";
    },
    fooReturnType: function (x) {
        return 67;
    },
    fooReturnType$1: function (d) {
        return "string FooReturnType(double d)";
    },
    fooOptionalParameters$1: function (x, y) {
        if (y === void 0) { y = 5; }
        return "FooOptionalParameters(int x, int y = 5)";
    },
    fooOptionalParameters: function (x) {
        return "FooOptionalParameters(int x)";
    },
    fooMultipleOptionalParameters$1: function (x, y, z) {
        if (y === void 0) { y = 5; }
        if (z === void 0) { z = 10; }
        return "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)";
    },
    fooMultipleOptionalParameters: function (x, y) {
        if (y === void 0) { y = 5; }
        return "FooMultipleOptionalParameters(int x, int y = 5)";
    },
    fooNamedArgument$1: function (x) {
        return "FooNamedArgument(int x)";
    },
    fooNamedArgument: function (d) {
        return "FooNamedArgument(double d)";
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static', {
    statics: {
        foo$2: function (x) {
            return "Foo(int x)";
        },
        foo$5: function (s) {
            return "Foo(string s)";
        },
        foo: function (d) {
            return "Foo(double d)";
        },
        foo$4: function (x, y) {
            return "Foo(int x, int y)";
        },
        foo$3: function (x, y) {
            return "Foo(int x, double y)";
        },
        foo$1: function (x, y) {
            return "Foo(double x, int y)";
        },
        fooReturnType: function (x) {
            return 67;
        },
        fooReturnType$1: function (d) {
            return "string FooReturnType(double d)";
        },
        fooOptionalParameters$1: function (x, y) {
            if (y === void 0) { y = 5; }
            return "FooOptionalParameters(int x, int y = 5)";
        },
        fooOptionalParameters: function (x) {
            return "FooOptionalParameters(int x)";
        },
        fooMultipleOptionalParameters$1: function (x, y, z) {
            if (y === void 0) { y = 5; }
            if (z === void 0) { z = 10; }
            return "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)";
        },
        fooMultipleOptionalParameters: function (x, y) {
            if (y === void 0) { y = 5; }
            return "FooMultipleOptionalParameters(int x, int y = 5)";
        },
        fooNamedArgument$1: function (x) {
            return "FooNamedArgument(int x)";
        },
        fooNamedArgument: function (d) {
            return "FooNamedArgument(double d)";
        }
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestVirtualMethods.A', {
    test: function () {
        return "A";
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestVirtualMethods.B', {
    inherits: [Bridge.ClientTest.BasicCSharp.TestVirtualMethods.A],
    testA: function () {
        return Bridge.ClientTest.BasicCSharp.TestVirtualMethods.A.prototype.test.call(this);
    },
    test: function () {
        return "B";
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge169', {
    statics: {
        number: 0,
        m1: function () {
            (function () {
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge169).number = 1;
            })();
        },
        m2: function () {
            (function () {
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge169).number = 2;
            })();
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge240A', {
    config: {
        properties: {
            Data: 0
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge240B', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge240A],
    getString: function () {
        this.setData(this.getData()+1);
        return "B";
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge266B', {
    statics: {
        test: function (arg1, arg2) {
            return arg2;
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge272.MyEnum', {
    statics: {
        abc: 1,
        def: 2,
        ghi: 3
    },
    $enum: true
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge277', {
    statics: {
        $int: 0
    },
    $enum: true
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge294', {
    name: null,
    constructor: function (name) {
        this.name = name;
    },
    getName: function () {
        return this.name;
    },
    getNameThroughGeneric: function (T) {
        return Bridge.fn.bind(this, function () {
            return this.name;
        });
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge305', {
    inherits: [Bridge.IEnumerable$1(String)],
    config: {
        properties: {
            Items: null
        }
    },
    constructor: function (items) {
        this.setItems(new Bridge.List$1(String)(items));
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return this.getItems().getEnumerator();
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge306A.Props', {
    name: null,
    toString: function () {
        return this.name;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge306Component$1', function (TProps) { return {
    statics: {
        $new: function (TComponent) {
            return Bridge.fn.bind(this, function (props) {
                return Bridge.getTypeName(props) + ":" + props;
            });
        }
    }
}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge306A', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge306Component$1(Bridge.ClientTest.BridgeIssues.Bridge306A.Props)],
    statics: {
        $new: function (props) {
            return Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge306Component$1(Bridge.ClientTest.BridgeIssues.Bridge306A.Props)).$new(Bridge.ClientTest.BridgeIssues.Bridge306A)(props);
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge306B.Props', {
    name: null,
    toString: function () {
        return this.name;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge306B', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge306Component$1(Bridge.ClientTest.BridgeIssues.Bridge306B.Props)],
    statics: {
        $new: function (props) {
            return Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge306Component$1(Bridge.ClientTest.BridgeIssues.Bridge306B.Props)).$new(Bridge.ClientTest.BridgeIssues.Bridge306B)(props);
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge341A', {
    config: {
        properties: {
            Str: null
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge341B', {
    inherits: function () { return [Bridge.IEquatable$1(Bridge.ClientTest.BridgeIssues.Bridge341B)]; },
    config: {
        properties: {
            Str: null
        }
    },
    equalsT: function (other) {
        if (!Bridge.hasValue(other)) {
            return false;
        }
        return this.getStr() === other.getStr();
    },
    getHashCode: function () {
        return Bridge.getHashCode(this.getStr());
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge342', {
    inherits: [Bridge.IDictionary$2(Bridge.Int,String)],
    _backingDictionary: null,
    constructor: function () {
        Bridge.ClientTest.BridgeIssues.Bridge342.prototype.constructor$1.call(this, new Bridge.Dictionary$2(Bridge.Int,String)());

    },
    constructor$1: function (initialValues) {
        this._backingDictionary = initialValues;
    },
    getItem: function (key) {
        return this._backingDictionary.get(key);
    },
    setItem: function (key, value) {
        this._backingDictionary.set(key, value);
    },
    getKeys: function () {
        return this._backingDictionary.getKeys();
    },
    getValues: function () {
        return this._backingDictionary.getValues();
    },
    getCount: function () {
        return this._backingDictionary.getCount();
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return this._backingDictionary.getEnumerator();
    },
    add: function (key, value) {
        this._backingDictionary.add(key, value);
    },
    remove: function (key) {
        return this._backingDictionary.remove(key);
    },
    containsKey: function (key) {
        return this._backingDictionary.containsKey(key);
    },
    tryGetValue: function (key, value) {
        return this._backingDictionary.tryGetValue(key, value);
    },
    clear: function () {
        this._backingDictionary.clear();
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge381.Animal', {
    kind: null,
    order: null,
    constructor: function (kind, order) {
        this.kind = kind;
        this.order = order;
    },
    toString: function () {
        return this.kind;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Person383', {
    config: {
        properties: {
            Name: null
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge395', {
    config: {
        properties: {
            Id: null,
            data: 0
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge407', {
    statics: {
        op_Addition: function (x, y) {
            return Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge407(), {
                setA: x.getA() + y.getA()
            } );
        },
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge407(); }
    },
    config: {
        properties: {
            A: 0
        }
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.A == null ? 0 : Bridge.getHashCode(this.A));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Bridge407)) {
            return false;
        }
        return Bridge.equals(this.A, o.A);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge407();
        s.A = this.A;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge418', {
    config: {
        properties: {
            Delegate: null
        }
    },
    callDelegate: function (data) {
        return this.getDelegate()(data);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge422', {
    statics: {
        first: 0,
        next: 100,
        afterNext: 101
    },
    $enum: true
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge436First', {
    toObject: function () {
        return "1";
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge436Second', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge436First],
    toObject: function () {
        return Bridge.ClientTest.BridgeIssues.Bridge436First.prototype.toObject.call(this) + "2";
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge436Third', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge436Second],
    toObject: function () {
        return Bridge.ClientTest.BridgeIssues.Bridge436Second.prototype.toObject.call(this) + "3";
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge439', {
    config: {
        events: {
            _dispatcher: null
        }
    },
    register: function (callback) {
        this.add_dispatcher(callback);
    },
    callDispatcher: function (s) {
        this._dispatcher(s);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge467', {
    config: {
        properties: {
            MyProperty: 0
        }
    },
    equals: function (obj) {
        var other = Bridge.as(obj, Bridge.ClientTest.BridgeIssues.Bridge467);
        if (!Bridge.hasValue(other)) {
            return false;
        }

        if (this.getMyProperty() < 0 || other.getMyProperty() < 0) {
            return this === other;
        }

        return this.getMyProperty() === other.getMyProperty();
    },
    getHashCode: function () {
        return this.getMyProperty() < 0 ? Bridge.getHashCode(this) : Bridge.getHashCode(this.getMyProperty());
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge470', {
    inherits: function () { return [Bridge.IEqualityComparer$1(Bridge.ClientTest.BridgeIssues.Bridge470)]; },
    statics: {
        isOdd: function (value) {
            return value % 2 !== 0;
        }
    },
    config: {
        properties: {
            Data: 0
        }
    },
    equals: function (x, y) {
        return x.getData() === y.getData();
    },
    getHashCode: function (obj) {
        return Bridge.getHashCode(obj.getData());
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge501B', {
    inherits: [Bridge.List$1(Bridge.Int)]
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge501A', {
    inherits: [Bridge.List$1(Bridge.Int)],
    items$1: "12"
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge520.Source', {
    config: {
        events: {
            Fired: null
        },
        properties: {
            Counter: 0
        }
    },
    fire: function () {
        var getEvt = function (s) {
            return s.Fired;
        };
        var evt = getEvt(this);

        evt = Bridge.fn.combine(evt, Bridge.fn.bind(this, function (sender, args) {
            this.setCounter(this.getCounter()+1);
        }));

        evt(this, new Object());
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge522.BaseClass', {
    config: {
        init: function () {
            this.values = new Bridge.List$1(Bridge.Int)();
        }
    },
    addValue: function (a) {
        this.values.add(a);
    },
    getValues: function () {
        return this.values;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge522.DerivedClass2', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge522.BaseClass],
    config: {
        properties: {
            B: 0
        }
    },
    constructor: function () {
        Bridge.ClientTest.BridgeIssues.Bridge522.BaseClass.prototype.$constructor.call(this);


    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge522.DerivedClass1', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge522.BaseClass],
    constructor: function () {
        Bridge.ClientTest.BridgeIssues.Bridge522.BaseClass.prototype.$constructor.call(this);


    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge537A', {
    id: 0
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge537B', {
    inherits: [Bridge.IEnumerable$1(Bridge.ClientTest.BridgeIssues.Bridge537A)],
    statics: {
        getCount: function (l) {
            return l.list.getCount();
        },
        testB1: function () {
            var l = new Bridge.ClientTest.BridgeIssues.Bridge537B();

            l.add(Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge537A(), {
                id: 101
            } ));
            l.add(Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge537A(), {
                id: 102
            } ));

            return l.getCount();
        },
        testB2: function () {
            var l = new Bridge.ClientTest.BridgeIssues.Bridge537B();

            l.add(Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge537A(), {
                id: 103
            } ));

            return Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge537B).getCount(l);
        }
    },
    list: null,
    constructor: function () {
        this.list = new Bridge.List$1(Bridge.ClientTest.BridgeIssues.Bridge537A)();
    },
    add: function (value) {
        this.list.add(value);
    },
    getEnumerator$1: function () {
        return this.list.getEnumerator();
    },
    getEnumerator: function () {
        return this.list.getEnumerator();
    },
    getCount: function () {
        return this.list.getCount();
    }
});

Bridge.define('Bridge.ClientTest.Utilities.DecimalHelper', {
    statics: {
        assertIsDecimalAndEqualTo$1: function (v, d, message) {
            if (message === void 0) { message = null; }
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.is(v, Bridge.Decimal), true, message);
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(v.toString(), Bridge.Int.format(d, 'G'), message);
        },
        assertIsDecimalAndEqualTo: function (v, d, message) {
            if (message === void 0) { message = null; }
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.is(v, Bridge.Decimal), true, message);
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(v.toString(), Bridge.Int.format(d, 'G'), message);
        }
    }
});

Bridge.define('Bridge.ClientTest.Utilities.BrowserHelper', {
    statics: {
        isPhantomJs: function () {
            return Bridge.String.contains(navigator.userAgent,"PhantomJS");
        },
        isFirefox: function () {
            return Bridge.String.contains(navigator.userAgent,"Firefox");
        },
        isChrome: function () {
            return Bridge.String.contains(navigator.userAgent,"Chrome");
        },
        getBrowserInfo: function () {
            var userAgent = navigator.userAgent;
            var appVersion = navigator.appVersion;
            var product = navigator.product;
            var appName = navigator.appName;
            var appCodeName = navigator.appCodeName;

            return Bridge.String.format("userAgent:{0} appVersion:{1} product:{2} appName:{3} appCodeName:{4}", userAgent, appVersion, product, appName, appCodeName);
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge558A', {
    zz: function (a) {
        return 1;
    },
    zz$1: function (a) {
        return 2;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge558B', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge558A],
    zz: function (a) {
        return Bridge.ClientTest.BridgeIssues.Bridge558A.prototype.zz.call(this, a);
    },
    zz$1: function (a) {
        return Bridge.ClientTest.BridgeIssues.Bridge558A.prototype.zz$1.call(this, a);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge559A3', {
    config: {
        properties: {
            Data: null
        }
    },
    constructor$1: function (value) {
        this.setData(value);
    },
    constructor: function (value) {
        Bridge.ClientTest.BridgeIssues.Bridge559A3.prototype.constructor$1.call(this, value.toString());

    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge559A1', {
    result: "",
    constructor: function () {
        this.result += " -> Bridge559A1";
    },
    constructor$1: function (a) {
        Bridge.ClientTest.BridgeIssues.Bridge559A1.prototype.$constructor.call(this);

        this.result += " -> Bridge559A1$1";
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge559B1', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge559A1],
    constructor: function () {
        Bridge.ClientTest.BridgeIssues.Bridge559A1.prototype.$constructor.call(this);

        this.result += " -> Bridge559B1 -- unexpected!";
    },
    constructor$1: function (a) {
        Bridge.ClientTest.BridgeIssues.Bridge559A1.prototype.constructor$1.call(this, a);

        this.result += " -> Bridge559B1$1";
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge559A2', {
    result: "",
    constructor: function () {
        this.result += " ClassA";
    },
    constructor$1: function (a) {
        Bridge.ClientTest.BridgeIssues.Bridge559A2.prototype.$constructor.call(this);

        this.result += " ClassA$1";
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge559B2', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge559A2],
    constructor: function () {
        Bridge.ClientTest.BridgeIssues.Bridge559A2.prototype.$constructor.call(this);

        this.result += " ClassB -- unexpected!";
    },
    constructor$1: function (a) {
        Bridge.ClientTest.BridgeIssues.Bridge559A2.prototype.constructor$1.call(this, a);

        this.result += " ClassB$1";
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge566A', {
    config: {
        properties: {
            Data: null
        }
    },
    constructor: function () {
        this.setData(this.getName());
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge566B', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge566A],
    getName: function () {
        return "Ted";
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge577.Bridge577UnitA', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge577.Bridge577UnitA(); }
    },
    $clone: function (to) { return this; }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge577.Bridge577UnitB', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge577.Bridge577UnitB(); }
    },
    config: {
        properties: {
            Number: 0
        }
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.Number == null ? 0 : Bridge.getHashCode(this.Number));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Bridge577.Bridge577UnitB)) {
            return false;
        }
        return Bridge.equals(this.Number, o.Number);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge577.Bridge577UnitB();
        s.Number = this.Number;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge586A', {
    statics: {

    },

});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge588C.C2', {
    statics: {
        config: {
            init: function () {
                this._default = new Bridge.ClientTest.BridgeIssues.Bridge588C.C2("default");
            }
        },
        getDefault: function () {
            return Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588C.C2)._default;
        }
    },
    config: {
        properties: {
            Name: null
        }
    },
    constructor: function (name) {
        this.setName(name);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge588B', {
    statics: {
        Valeur1: 1,
        Valeur2: 2
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge595A', {
    buffer: null,
    constructor: function (buffer) {
        this.buffer = buffer;
    },
    render: function () {
        this.buffer.append("Render0");
        this.render$1(new Date());
    },
    render$1: function (when) {
        this.buffer.append("Render1");
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge595B', {
    statics: {
        render: function (buffer) {
            buffer.append("Render1");
        }
    },
    buffer: null,
    constructor: function (buffer) {
        this.buffer = buffer;
    },
    render: function () {
        this.buffer.append("Render0");
        Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge595B).render(this.buffer);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge597A', {
    _something: "HI!",
    get: function () {
        var items = ["a"];
        var mappedItemsWithoutInstanceMemberAccess = Bridge.Linq.Enumerable.from(items).select(function (value, index) {
            return index + ":" + value;
        }).toArray();
        return mappedItemsWithoutInstanceMemberAccess[0];
    },
    getWithMember: function () {
        var items = ["a"];
        var mappedItemsWithInstanceMemberAccess = Bridge.Linq.Enumerable.from(items).select(Bridge.fn.bind(this, function (value, index) {
            return this._something + ":" + index + ":" + value;
        })).toArray();
        return mappedItemsWithInstanceMemberAccess[0];
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge603A', {
    statics: {
        op_Implicit: function (value) {
            var $t;
            value = ($t = value, Bridge.hasValue($t) ? $t : "[Null]");
            return new Bridge.ClientTest.BridgeIssues.Bridge603A("constructor$1", value);
        },
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge603A(); }
    },
    value: null,
    constructor$1: function (value) {
        this.value = value;
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.value == null ? 0 : Bridge.getHashCode(this.value));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Bridge603A)) {
            return false;
        }
        return Bridge.equals(this.value, o.value);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge603A();
        s.value = this.value;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge603Class', {
    config: {
        properties: {
            Data: null
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge606C', {
    config: {
        properties: {
            X: null,
            Y: null
        }
    },
    example1: function (x, y) {
        this.setX(x);
        this.setY(y);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge606B', {
    config: {
        properties: {
            X: null,
            Y: null
        }
    },
    constructor: function (x, y) {
        this.setX(x);
        this.setY(y);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge606A', {
    statics: {
        example2: function (source, x, y) {
            return source + " - " + x + " - " + y;
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge607A$1', function (T) { return {
    inherits: function () { return [Bridge.IEquatable$1(Bridge.ClientTest.BridgeIssues.Bridge607A$1(T))]; },
    equalsT: function (obj) {
        return this === obj;
    }
}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge607B', {
    inherits: function () { return [Bridge.IEquatable$1(Bridge.ClientTest.BridgeIssues.Bridge607B)]; },
    equalsT: function (other) {
        return this === other;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge607C', {
    inherits: function () { return [Bridge.IEquatable$1(Bridge.ClientTest.BridgeIssues.Bridge607C)]; },
    equalsT: function (other) {
        return Bridge.equals(this, other);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge608A', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge608A(); }
    },
    field: null,
    constructor$1: function (field) {
        this.field = field;
    },
    constructor: function () {
    },
    equals: function (obj) {
        return this.equals$1(obj.toString());
    },
    equals$1: function (other) {
        return other === this.field;
    },
    getHashCode: function () {
        return Bridge.getHashCode(this.field);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge608A();
        s.field = this.field;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge615A', {
    statics: {
        method1$1: function (o) {
            return "object";
        },
        method1: function (i) {
            return "int";
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge623A', {
    foo: 0,
    func: null,
    constructor: function (foo, func) {
        this.foo = foo;
        this.func = func;
    },
    call: function () {
        return this.func();
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge623B1', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge623A],
    constructor: function (foo, func) {
        Bridge.ClientTest.BridgeIssues.Bridge623A.prototype.$constructor.call(this, foo, func);

    },
    getFoo: function () {
        return 2 * this.foo;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge623B2', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge623B1],
    constructor: function (foo, func) {
        Bridge.ClientTest.BridgeIssues.Bridge623B1.prototype.$constructor.call(this, foo, func);

    },
    getFoo: function () {
        return 3 * this.foo;
    },
    call: function () {
        return this.func() + 1000;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge625A', {
    inherits: [Bridge.IEqualityComparer$1(Bridge.Int)],
    equals: function (x, y) {
        return x === y;
    },
    getHashCode: function (obj) {
        return Bridge.getHashCode(obj);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634A$1', function (T) { return {

}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested', function (T) { return {

}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested.SubNested', function (T) { return {

}; });

Bridge.define('ClientTestLibraryCustom.Bridge634B$1', function (T) { return {

}; });

Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested', function (T) { return {

}; });

Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested', function (T) { return {

}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634C');

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634C.Nested');

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634C.Nested.SubNested');

Bridge.define('Bridge634D');

Bridge.define('Bridge634D.Nested');

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested.SubNested$1', function (T, T1) { return {

}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested$1', function (T, T1) { return {

}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested$1.SubNested', function (T, T1) { return {

}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested$1.SubNested$1', function (T, T1, T2) { return {

}; });

Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested$1', function (T, T1) { return {

}; });

Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested$1', function (T, T1) { return {

}; });

Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested', function (T, T1) { return {

}; });

Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested$1', function (T, T1, T2) { return {

}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634C.Nested.SubNested$1', function (T1) { return {

}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634C.Nested$1', function (T1) { return {

}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634C.Nested$1.SubNested', function (T1) { return {

}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634C.Nested$1.SubNested$1', function (T1, T2) { return {

}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge635A', {
    internalFunc1: function () {
        return "A.Test1";
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge635B', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge635A],
    internalFunc1: function () {
        return "B.Test1";
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge648A', {
    statics: {
        op_Implicit: function (value) {
            return value.getValue();
        }
    },
    config: {
        properties: {
            Value: null
        }
    },
    constructor: function (value) {
        this.setValue(value);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge652.Bridge652B1', {
    constructor: function () {
        Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge652).log = "Bridge652B1";
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge652.Bridge652B2', {
    inherits: [Bridge.IComparable],
    constructor: function () {
        Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge652).log = "Bridge652B2";
    },
    compareTo: function (obj) {
        return 0;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge652.Bridge652C$1', function (T) { return {
    bar: null,
    constructor: function () {
        this.bar = new T();
    }
}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge652.Bridge652A1', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge652.Bridge652C$1(Bridge.ClientTest.BridgeIssues.Bridge652.Bridge652B1)]
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge652.Bridge652D$1', function (T) { return {
    bar: null,
    constructor: function () {
        this.bar = new T();
    }
}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge652.Bridge652A2', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge652.Bridge652D$1(Bridge.ClientTest.BridgeIssues.Bridge652.Bridge652B2)]
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge655A', {
    statics: {
        isNullOrUndefined: function (subject) {
            return subject === undefined || !Bridge.hasValue(subject);
        },
        isNullOrUndefined$1: function (subject, i) {
            return subject === undefined || !Bridge.hasValue(subject) || i === 0;
        },
        isNullOrUndefined$2: function (subject, s) {
            if (subject === undefined || !Bridge.hasValue(subject) || Bridge.String.isNullOrEmpty(s)) {
                return "true";
            }

            return "false";
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge660TextInputState', {
    config: {
        properties: {
            Text: null
        }
    },
    constructor: function (text) {
        Bridge.ClientTest.BridgeIssues.Bridge660TextInputState.prototype.constructor$1.call(this, text, Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge660Optional$1(String)).getMissing());

    },
    constructor$1: function (text, validationError) {
        this.setText(text);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge660MessageEditState', {
    config: {
        properties: {
            Content: null
        }
    },
    constructor: function (content) {
        this.setContent(content);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge660Optional$1', function (T) { return {
    statics: {
        config: {
            init: function () {
                this._missing = new Bridge.ClientTest.BridgeIssues.Bridge660Optional$1(T)("constructor$2", Bridge.getDefaultValue(T), false);
            }
        },
        getMissing: function () {
            return Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge660Optional$1(T))._missing.$clone();
        },
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge660Optional$1(T)(); }
    },
    value: null,
    isDefined: false,
    constructor$1: function (value) {
        Bridge.ClientTest.BridgeIssues.Bridge660Optional$1(T).prototype.constructor$2.call(this, value, Bridge.hasValue(value));

    },
    constructor$2: function (value, isDefined) {
        this.isDefined = (Bridge.hasValue(value));
        this.value = value;
    },
    constructor: function () {
    },
    getIsDefined: function () {
        return this.isDefined;
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.value == null ? 0 : Bridge.getHashCode(this.value));
        hash = hash * 23 + (this.isDefined == null ? 0 : Bridge.getHashCode(this.isDefined));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Bridge660Optional$1(T))) {
            return false;
        }
        return Bridge.equals(this.value, o.value) && Bridge.equals(this.isDefined, o.isDefined);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge660Optional$1(T)();
        s.value = this.value;
        s.isDefined = this.isDefined;
        return s;
    }
}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge671A', {
    func: null,
    constructor: function (func) {
        this.func = func;
    },
    invoke: function () {
        return this.func();
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge687A', {
    statics: {
        op_Implicit: function (value) {
            return value.getValue();
        }
    },
    config: {
        properties: {
            Value: null
        }
    },
    constructor: function (value) {
        this.setValue(value);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge690A', {
    i3: 3,
    asyncSum: function (i1, i2) {
        var $step = 0,
            $task1, 
            $jumpFromFinally, 
            $returnTask = new Bridge.Task(), 
            $returnValue, 
            $asyncBody = Bridge.fn.bind(this, function () {
                try {
                    for (;;) {
                        switch ($step) {
                            case 0: {
                                $task1 = Bridge.Task.delay(100);
                                $step = 1;
                                $task1.continueWith($asyncBody);
                                return;
                            }
                            case 1: {
                                $task1.getResult();
                                $returnTask.setResult(i1 + i2 + this.i3);
                                return;
                            }
                            default: {
                                $returnTask.setResult(null);
                                return;
                            }
                        }
                    }
                } catch($e1) {
                    $e1 = Bridge.Exception.create($e1);
                    $returnTask.setError($e1);
                }
            }, arguments);

        $asyncBody();
        return $returnTask;
    },
    start: function () {
        var $step = 0,
            $task1, 
            $taskResult1, 
            $jumpFromFinally, 
            $returnTask = new Bridge.Task(), 
            $returnValue, 
            $asyncBody = Bridge.fn.bind(this, function () {
                try {
                    for (;;) {
                        switch ($step) {
                            case 0: {
                                $task1 = this.asyncSum(2, 3);
                                $step = 1;
                                $task1.continueWith($asyncBody);
                                return;
                            }
                            case 1: {
                                $taskResult1 = $task1.getResult();
                                $returnTask.setResult($taskResult1);
                                return;
                            }
                            default: {
                                $returnTask.setResult(null);
                                return;
                            }
                        }
                    }
                } catch($e1) {
                    $e1 = Bridge.Exception.create($e1);
                    $returnTask.setError($e1);
                }
            }, arguments);

        $asyncBody();
        return $returnTask;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge690B', {
    statics: {
        i3: 17,
        asyncSum: function (i1, i2) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $returnTask = new Bridge.Task(), 
                $returnValue, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $task1 = Bridge.Task.delay(100);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getResult();
                                    $returnTask.setResult(i1 + i2 + Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge690B).i3);
                                    return;
                                }
                                default: {
                                    $returnTask.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($e1) {
                        $e1 = Bridge.Exception.create($e1);
                        $returnTask.setError($e1);
                    }
                }, arguments);

            $asyncBody();
            return $returnTask;
        },
        start: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $returnTask = new Bridge.Task(), 
                $returnValue, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $task1 = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge690B).asyncSum(19, 23);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getResult();
                                    $returnTask.setResult($taskResult1);
                                    return;
                                }
                                default: {
                                    $returnTask.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($e1) {
                        $e1 = Bridge.Exception.create($e1);
                        $returnTask.setError($e1);
                    }
                }, arguments);

            $asyncBody();
            return $returnTask;
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge692.A', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge692.A(); }
    },
    $clone: function (to) { return this; }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge692.B1', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge692.B1(); }
    },
    field1: 0,
    constructor$1: function (f) {
        this.field1 = f;
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.field1 == null ? 0 : Bridge.getHashCode(this.field1));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Bridge692.B1)) {
            return false;
        }
        return Bridge.equals(this.field1, o.field1);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge692.B1();
        s.field1 = this.field1;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge692.B3', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge692.B3(); }
    },
    constructor: function () {
    },
    getProp1: function () {
        return 0;
    },
    $clone: function (to) { return this; }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge692.C1', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge692.C1(); }
    },
    field1: 0,
    constructor$1: function (i) {
        this.field1 = i;
    },
    constructor: function () {
    },
    getProp1: function () {
        return this.field1;
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.field1 == null ? 0 : Bridge.getHashCode(this.field1));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Bridge692.C1)) {
            return false;
        }
        return Bridge.equals(this.field1, o.field1);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge692.C1();
        s.field1 = this.field1;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge692.C2', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge692.C2(); }
    },
    field1: 0,
    constructor$1: function (i) {
        this.field1 = i;
    },
    constructor: function () {
    },
    getProp1: function () {
        return this.field1;
    },
    setProp1: function (value) {

    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.field1 == null ? 0 : Bridge.getHashCode(this.field1));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Bridge692.C2)) {
            return false;
        }
        return Bridge.equals(this.field1, o.field1);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge692.C2();
        s.field1 = this.field1;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge692.C3', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge692.C3(); }
    },
    config: {
        properties: {
            Prop1: 0
        }
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.Prop1 == null ? 0 : Bridge.getHashCode(this.Prop1));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Bridge692.C3)) {
            return false;
        }
        return Bridge.equals(this.Prop1, o.Prop1);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge692.C3();
        s.Prop1 = this.Prop1;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge692.B2', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge692.B2(); }
    },
    field1: 0,
    constructor$1: function (f) {
        this.field1 = f;
    },
    constructor: function () {
    },
    getProp1: function () {
        return this.field1;
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.field1 == null ? 0 : Bridge.getHashCode(this.field1));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Bridge692.B2)) {
            return false;
        }
        return Bridge.equals(this.field1, o.field1);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge692.B2();
        s.field1 = this.field1;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge693A$1', function (T) { return {
    constructor: function (props) {
    }
}; });

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge762A', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge762A(); }
    },
    $clone: function (to) { return this; }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge762B', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge762B(); }
    },
    config: {
        properties: {
            Data: 0
        }
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.Data == null ? 0 : Bridge.getHashCode(this.Data));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Bridge762B)) {
            return false;
        }
        return Bridge.equals(this.Data, o.Data);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge762B();
        s.Data = this.Data;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge785.DataClass', {
    config: {
        properties: {
            Value: 0
        }
    },
    getSomething: function (i) {
        return Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge785.DataClass(), {
            setValue: i
        } );
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge785.DataStruct', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge785.DataStruct(); }
    },
    config: {
        properties: {
            Value: 0
        }
    },
    constructor: function () {
    },
    getSomething: function (i) {
        return Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge785.DataStruct(), {
            setValue: i
        } );
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.Value == null ? 0 : Bridge.getHashCode(this.Value));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Bridge785.DataStruct)) {
            return false;
        }
        return Bridge.equals(this.Value, o.Value);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge785.DataStruct();
        s.Value = this.Value;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge789A', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge789A(); }
    },
    field1: 0,
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.field1 == null ? 0 : Bridge.getHashCode(this.field1));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Bridge789A)) {
            return false;
        }
        return Bridge.equals(this.field1, o.field1);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge789A();
        s.field1 = this.field1;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge795A', {
    statics: {
        op_Equality: function (x, y) {
            return x.equals(y.$clone());
        },
        op_Inequality: function (x, y) {
            return !(Bridge.ClientTest.BridgeIssues.Bridge795A.op_Equality(x, y));
        },
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge795A(); }
    },
    config: {
        properties: {
            Value: 0
        }
    },
    constructor$1: function (value) {
        Bridge.ClientTest.BridgeIssues.Bridge795A.prototype.$constructor.call(this);

        this.setValue(value);
    },
    constructor: function () {
    },
    equals: function (o) {
        if (!(Bridge.is(o, Bridge.ClientTest.BridgeIssues.Bridge795A))) {
            return false;
        }
        return (Bridge.cast(o, Bridge.ClientTest.BridgeIssues.Bridge795A)).getValue() === this.getValue();
    },
    getHashCode: function () {
        return this.getValue();
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge795A();
        s.Value = this.Value;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge795B', {
    statics: {
        op_Equality: function (x, y) {
            return x.getValue() === y.getValue();
        },
        op_Inequality: function (x, y) {
            return !(Bridge.ClientTest.BridgeIssues.Bridge795B.op_Equality(x, y));
        },
        op_GreaterThanOrEqual: function (x, y) {
            return x.getValue() >= y.getValue();
        },
        op_GreaterThan: function (x, y) {
            return x.getValue() > y.getValue();
        },
        op_LessThanOrEqual: function (x, y) {
            return x.getValue() <= y.getValue();
        },
        op_LessThan: function (x, y) {
            return x.getValue() < y.getValue();
        },
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge795B(); }
    },
    config: {
        properties: {
            Value: 0
        }
    },
    constructor$1: function (value) {
        Bridge.ClientTest.BridgeIssues.Bridge795B.prototype.$constructor.call(this);

        this.setValue(value);
    },
    constructor: function () {
    },
    equals: function (o) {
        if (!(Bridge.is(o, Bridge.ClientTest.BridgeIssues.Bridge795B))) {
            return false;
        }

        return (Bridge.cast(o, Bridge.ClientTest.BridgeIssues.Bridge795B)).getValue() === this.getValue();
    },
    getHashCode: function () {
        return this.getValue();
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge795B();
        s.Value = this.Value;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge815.A', {
    config: {
        properties: {
            Property: null
        }
    },
    method: function (param) {
        if (param === void 0) { param = null; }
        this.setProperty(Bridge.Nullable.lift1("$clone", param));
    },
    method2: function (param) {
        if (param === void 0) { param = new Bridge.ClientTest.BridgeIssues.Bridge815.B(); }
        this.setProperty(param.$clone());
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge815.B', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge815.B(); }
    },
    field: 0,
    constructor$1: function (i) {
        this.field = i;
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.field == null ? 0 : Bridge.getHashCode(this.field));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Bridge815.B)) {
            return false;
        }
        return Bridge.equals(this.field, o.field);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge815.B();
        s.field = this.field;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge826A', {
    statics: {
        op_Implicit: function (val) {
            return new Bridge.ClientTest.BridgeIssues.Bridge826A(val);
        },
        op_Implicit$1: function (val) {
            return Bridge.hasValue(val) ? val._val : Bridge.Decimal(0);
        }
    },
    _val: Bridge.Decimal(0.0),
    constructor: function (val) {
        this._val  = val;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge826B', {
    statics: {
        op_Implicit: function (val) {
            return new Bridge.ClientTest.BridgeIssues.Bridge826B(val);
        },
        op_Implicit$1: function (val) {
            return Bridge.hasValue(val) ? val._val : 0;
        }
    },
    _val: 0,
    constructor: function (val) {
        this._val = val;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge835.Dot', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge835.Dot(); }
    },
    $clone: function (to) { return this; }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge849A', {
    statics: {
        setToBlah: function (value, blah) {
            if (blah === void 0) { blah = true; }
            return blah;
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge861A', {
    config: {
        properties: {
            MyId: 0,
            Delegates: null
        }
    },
    invokeDelegates: function () {
        if (Bridge.hasValue(this.getDelegates())) {
            this.getDelegates()(this);
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.CI1');

Bridge.define('Bridge.ClientTest.BridgeIssues.CI2');

Bridge.define('Bridge.ClientTest.BridgeIssues.Class391', {
    statics: {
        main: function () {
            var $t, $t1, $t2, $t3;
            var TestArray1 = ["TestA", "TestB", "TestC"];
            var TestArray2 = ["TestA", "TestB", "TestC"];

            var doSomething = false;
            $t = Bridge.getEnumerator(TestArray1);
            while ($t.moveNext()) {
                var x = $t.getCurrent();
                $t1 = Bridge.getEnumerator(TestArray2);
                while ($t1.moveNext()) {
                    var y = $t1.getCurrent();
                    doSomething = Bridge.String.equals(x, y);
                }
            }

            $t2 = Bridge.getEnumerator(TestArray1);
            while ($t2.moveNext()) {
                var x1 = $t2.getCurrent();
                $t3 = Bridge.getEnumerator(TestArray2);
                while ($t3.moveNext()) {
                    var y1 = $t3.getCurrent();
                    doSomething = Bridge.String.equals(x1, y1);
                }
            }
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Class59', {
    statics: {
        method1: function () {
        }
    },
    method1: function (d) {
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Class59.Aux1');

Bridge.define('Bridge.ClientTest.BridgeIssues.Class64', {
    constructor: function () {
    },
    constructor$1: function (related) {
    },
    test: function () {
        var aux = new Bridge.ClientTest.BridgeIssues.Class64.Aux1();
        new Bridge.ClientTest.BridgeIssues.Class64("constructor$1", aux);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Class64.Aux1');

Bridge.define('Bridge.ClientTest.BridgeIssues.Class65_1');

Bridge.define('Bridge.ClientTest.BridgeIssues.Class65_1.Nested');

Bridge.define('Bridge.ClientTest.BridgeIssues.Class65_2', {
    inherits: [Bridge.ClientTest.BridgeIssues.Class65_1.Nested]
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Class84', {
    test1: function () {
        try {
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.IBridge304');

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge304', {
    inherits: [Bridge.ClientTest.BridgeIssues.IBridge304],
    config: {
        properties: {
            X: null
        }
    },
    f: function (x) {
        this.setX(x);
    },
    f$1: function () {
        this.setX("void F()");
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.IBridge693D');

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge693B.Bridge693C', {
    inherits: [Bridge.ClientTest.BridgeIssues.IBridge693D]
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge693B', {
    inherits: [Bridge.ClientTest.BridgeIssues.Bridge693A$1(Bridge.ClientTest.BridgeIssues.Bridge693B.Bridge693C)],
    constructor: function () {
        Bridge.ClientTest.BridgeIssues.Bridge693A$1(Bridge.ClientTest.BridgeIssues.Bridge693B.Bridge693C).prototype.$constructor.call(this, new Bridge.ClientTest.BridgeIssues.Bridge693B.Bridge693C());

    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Point69', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Point69(); }
    },
    x: 0,
    y: 0,
    constructor$1: function (y1) {
        (new Bridge.ClientTest.BridgeIssues.Point69("constructor")).$clone(this);
        this.y = y1;
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.x == null ? 0 : Bridge.getHashCode(this.x));
        hash = hash * 23 + (this.y == null ? 0 : Bridge.getHashCode(this.y));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Point69)) {
            return false;
        }
        return Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Point69();
        s.x = this.x;
        s.y = this.y;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Rectangle66', {
    statics: {
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Rectangle66(); }
    },
    constructor$1: function (x1) {
        (new Bridge.ClientTest.BridgeIssues.Rectangle66("constructor")).$clone(this);
    },
    constructor$2: function (x1, x2) {
    },
    constructor: function () {
    },
    $clone: function (to) { return this; }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ComparerTests.C', {
    inherits: function () { return [Bridge.IComparable$1(Bridge.ClientTest.Collections.Generic.ComparerTests.C)]; },
    value: 0,
    constructor: function (value) {
        this.value = value;
    },
    compareTo: function (other) {
        return Bridge.compare(this.value, other.value);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.EqualityComparerTests.MyClass', {
    hashCode: 0,
    other: null,
    shouldEqual: false,
    getHashCode: function () {
        return this.hashCode;
    },
    equals: function (o) {
        this.other = o;
        return this.shouldEqual;
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.GenericDictionaryTests.TestEqualityComparer', {
    inherits: [Bridge.EqualityComparer$1(String)],
    equals: function (x, y) {
        return x.charCodeAt(0) === y.charCodeAt(0);
    },
    getHashCode: function (obj) {
        return obj.charCodeAt(0);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ICollectionTests.C', {
    _i: 0,
    constructor: function (i) {
        this._i = i;
    },
    equals: function (o) {
        return Bridge.is(o, Bridge.ClientTest.Collections.Generic.ICollectionTests.C) && this._i === (Bridge.cast(o, Bridge.ClientTest.Collections.Generic.ICollectionTests.C))._i;
    },
    getHashCode: function () {
        return this._i;
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection', {
    inherits: [Bridge.ICollection$1(String)],
    config: {
        properties: {
            Items: null
        }
    },
    constructor: function (items) {
        this.setItems(new Bridge.List$1(String)(items));
    },
    getCount: function () {
        return this.getItems().getCount();
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return this.getItems().getEnumerator();
    },
    add: function (item) {
        this.getItems().add(item);
    },
    clear: function () {
        this.getItems().clear();
    },
    contains: function (item) {
        return this.getItems().contains(item);
    },
    remove: function (item) {
        return this.getItems().remove(item);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary', {
    inherits: [Bridge.IDictionary$2(Bridge.Int,String)],
    _backingDictionary: null,
    constructor: function () {
        Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary.prototype.constructor$1.call(this, new Bridge.Dictionary$2(Bridge.Int,String)());

    },
    constructor$1: function (initialValues) {
        this._backingDictionary = initialValues;
    },
    getItem: function (key) {
        return this._backingDictionary.get(key);
    },
    setItem: function (key, value) {
        this._backingDictionary.set(key, value);
    },
    getKeys: function () {
        return this._backingDictionary.getKeys();
    },
    getValues: function () {
        return this._backingDictionary.getValues();
    },
    getCount: function () {
        return this._backingDictionary.getCount();
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return this._backingDictionary.getEnumerator();
    },
    add: function (key, value) {
        this._backingDictionary.add(key, value);
    },
    remove: function (key) {
        return this._backingDictionary.remove(key);
    },
    containsKey: function (key) {
        return this._backingDictionary.containsKey(key);
    },
    tryGetValue: function (key, value) {
        return this._backingDictionary.tryGetValue(key, value);
    },
    clear: function () {
        this._backingDictionary.clear();
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IEnumerableTests.MyEnumerable', {
    inherits: [Bridge.IEnumerable$1(String)],
    getEnumerator$1: function () {
        var $yield = [];
        $yield.push("x");
        $yield.push("y");
        $yield.push("z");
        return Bridge.Array.toEnumerator($yield);
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IListTests.C', {
    _i: 0,
    constructor: function (i) {
        this._i = i;
    },
    equals: function (o) {
        return Bridge.is(o, Bridge.ClientTest.Collections.Generic.IListTests.C) && this._i === (Bridge.cast(o, Bridge.ClientTest.Collections.Generic.IListTests.C))._i;
    },
    getHashCode: function () {
        return this._i;
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IListTests.MyList', {
    inherits: [Bridge.IList$1(String)],
    config: {
        properties: {
            Items: null
        }
    },
    constructor: function (items) {
        this.setItems(new Bridge.List$1(String)(items));
    },
    getCount: function () {
        return this.getItems().getCount();
    },
    getItem: function (index) {
        return this.getItems().getItem(index);
    },
    setItem: function (index, value) {
        this.getItems().setItem(index, value);
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return this.getItems().getEnumerator();
    },
    add: function (item) {
        this.getItems().add(item);
    },
    clear: function () {
        this.getItems().clear();
    },
    contains: function (item) {
        return this.getItems().contains(item);
    },
    remove: function (item) {
        return this.getItems().remove(item);
    },
    indexOf: function (item) {
        return this.getItems().indexOf(item);
    },
    insert: function (index, item) {
        this.getItems().insert(index, item);
    },
    removeAt: function (index) {
        this.getItems().removeAt(index);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C', {
    _sb: null,
    constructor: function (sb) {
        this._sb = sb;
    },
    getEnumerator: function (n) {
        var $yield = [];
        try {
            for (var i = 0; i < n; i++) {
                this._sb.appendLine("yielding " + i);
                $yield.push(i);
            }
            this._sb.appendLine("yielding -1");
            $yield.push(-1);
        }
        finally {
            this._sb.appendLine("in finally");
        }
        return Bridge.Array.toEnumerator($yield);
    },
    getEnumeratorThrows: function () {
        var $yield = [];
        try {
            this._sb.appendLine("yielding 1");
            $yield.push(1);
            this._sb.appendLine("yielding 2");
            $yield.push(2);
            this._sb.appendLine("throwing");
            throw new Bridge.Exception("test");
            this._sb.appendLine("yielding 3");
            $yield.push(3);
        }
        finally {
            this._sb.appendLine("in finally");
        }
        return Bridge.Array.toEnumerator($yield);
    },
    getEnumerable: function (n) {
        var $yield = [];
        try {
            for (var i = 0; i < n; i++) {
                this._sb.appendLine("yielding " + i);
                $yield.push(i);
            }
            this._sb.appendLine("yielding -1");
            $yield.push(-1);
        }
        finally {
            this._sb.appendLine("in finally");
        }
        n = 0; // Just to verify that the value of 'n' is not reused in the next call
        return Bridge.Array.toEnumerable($yield);
    },
    getEnumerableThrows: function (n) {
        var $yield = [];
        try {
            this._sb.appendLine("yielding 1");
            $yield.push(1);
            this._sb.appendLine("yielding 2");
            $yield.push(2);
            this._sb.appendLine("throwing");
            throw new Bridge.Exception("test");
            this._sb.appendLine("yielding 3");
            $yield.push(3);
        }
        finally {
            this._sb.appendLine("in finally");
        }
        return Bridge.Array.toEnumerable($yield);
    },
    getEnumerableMutateParameter: function (n) {
        var $yield = [];
        for (; n > 0; n--) {
            $yield.push(n);
        }
        return Bridge.Array.toEnumerable($yield);
    },
    getEnumerableSimple: function (n) {
        var $yield = [];
        for (var i = 0; i < n; i++) {
            $yield.push(i);
        }
        $yield.push(-1);
        return Bridge.Array.toEnumerable($yield);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ListTests.C', {
    i: 0,
    constructor: function (i) {
        this.i = i;
    },
    equals: function (o) {
        return Bridge.is(o, Bridge.ClientTest.Collections.Generic.ListTests.C) && this.i === (Bridge.cast(o, Bridge.ClientTest.Collections.Generic.ListTests.C)).i;
    },
    getHashCode: function () {
        return this.i;
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ListTests.TestReverseComparer', {
    inherits: [Bridge.IComparer$1(Bridge.Int)],
    compare: function (x, y) {
        return x === y ? 0 : (x > y ? -1 : 1);
    }
});

Bridge.define('Bridge.ClientTest.DecimalMathTests.Logger', {
    statics: {
        convertParameters: function (parameters) {
            var result = Bridge.Array.init(parameters.length + 1, null);

            for (var i = 0; i < parameters.length; i++) {
                if (i === 0) {
                    var d = Bridge.cast(parameters[0], Bridge.Decimal, true);
                    result[0] = Bridge.Nullable.hasValue(d) ? "HasDotNetDiff" : "NoDotNetDiff";
                    result[1] = Bridge.Nullable.hasValue(d) ? Bridge.Int.format(d, 'G') + "m" : "null";

                    continue;
                }

                var o = parameters[i];
                var j = i + 1;
                if (Bridge.is(o, Bridge.Decimal)) {
                    var d1 = Bridge.cast(o, Bridge.Decimal);
                    if (d1.equalsT(Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue)) {
                        result[j] = "DecimalMathTests.MaxValue";
                    }
                    else  {
                        if (d1.equalsT(Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue)) {
                            result[j] = "DecimalMathTests.MinValue";
                        }
                        else  {
                            if (d1.equalsT(Bridge.Decimal.MinusOne)) {
                                result[j] = "decimal.MinusOne";
                            }
                            else  {
                                if (d1.equalsT(Bridge.Decimal.One)) {
                                    result[j] = "decimal.One";
                                }
                                else  {
                                    result[j] = Bridge.Int.format(d1, 'G') + "m";
                                }
                            }
                        }
                    }
                }
                else  {
                    result[j] = o;
                }
            }

            return result;
        }
    },
    config: {
        properties: {
            Text: null
        }
    },
    constructor: function () {
        if (Bridge.get(Bridge.ClientTest.DecimalMathTests).useLogging) {
            this.setText(new Bridge.Text.StringBuilder());
        }
    },
    onLogBegin: function (name) {
        if (!Bridge.get(Bridge.ClientTest.DecimalMathTests).useLogging) {
            return;
        }

        this.getText().appendLine("//------------------------------" + name + "------------------------------");
        this.getText().appendLine("object[,] input = new object[,]");
        this.getText().append("{");
    },
    onLog: function (parameters) {
        if (!Bridge.get(Bridge.ClientTest.DecimalMathTests).useLogging) {
            return;
        }

        var sb = new Bridge.Text.StringBuilder("{{");
        for (var i = 0; i < parameters.length + 1; i++) {
            sb.append(" {");
            sb.append(i);
            sb.append("},");
        }
        sb.remove(sb.getLength() - 1, 1);
        sb.append(" }},");

        var format = sb.toString();

        this.getText().appendLine();
        //Fix
        //this.Text.AppendFormat(format, ConvertParameters(parameters));
        var convertedParams = Bridge.get(Bridge.ClientTest.DecimalMathTests.Logger).convertParameters(parameters);
        if (convertedParams.length === 4) {
            this.getText().appendFormat(format, convertedParams[0], convertedParams[1], convertedParams[2], convertedParams[3]);
        }
        if (convertedParams.length === 5) {
            this.getText().appendFormat(format, convertedParams[0], convertedParams[1], convertedParams[2], convertedParams[3], convertedParams[4]);
        }
    },
    onLogEnd: function () {
        if (!Bridge.get(Bridge.ClientTest.DecimalMathTests).useLogging) {
            return;
        }

        var sb = this.getText();

        sb.remove(sb.getLength() - 1, 1);
        sb.appendLine();
        sb.append("};");

        console.log(sb.toString());
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ExceptionTests.MyException', {
    inherits: [Bridge.Exception],
    _message: null,
    _innerException: null,
    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this);

        this._message = message;
        this._innerException = innerException;
    },
    getMessage: function () {
        return this._message;
    },
    getInnerException: function () {
        return this._innerException;
    }
});

Bridge.define('Bridge.ClientTest.ExceptionTests.E1', {
    inherits: [Bridge.Exception],
    constructor: function (message) {
        Bridge.Exception.prototype.$constructor.call(this, message);

    }
});

Bridge.define('Bridge.ClientTest.ExceptionTests.E2', {
    inherits: [Bridge.ClientTest.ExceptionTests.E1],
    constructor: function (message) {
        Bridge.ClientTest.ExceptionTests.E1.prototype.$constructor.call(this, message);

    }
});

Bridge.define('Bridge.ClientTest.Globals', {
    statics: {
        setTimeout: function (action, milliseconds) {
            return 0;
        }
    }
});

Bridge.define('Bridge.ClientTest.IComparableTests.MyComparable', {
    inherits: function () { return [Bridge.IComparable$1(Bridge.ClientTest.IComparableTests.MyComparable)]; },
    result: 0,
    other: null,
    compareTo: function (other) {
        this.other = other;
        return this.result;
    }
});

Bridge.define('Bridge.ClientTest.IEquatableTests.MyEquatable', {
    inherits: function () { return [Bridge.IEquatable$1(Bridge.ClientTest.IEquatableTests.MyEquatable)]; },
    result: false,
    other: null,
    equalsT: function (other) {
        this.other = other;
        return this.result;
    }
});

Bridge.define('Bridge.ClientTest.Linq.AnagramEqualityComparer', {
    inherits: [Bridge.EqualityComparer$1(String)],
    equals: function (x, y) {
        return this.getCanonicalString(x) === this.getCanonicalString(y);
    },
    getHashCode: function (obj) {
        return Bridge.getHashCode(this.getCanonicalString(obj));
    },
    getCanonicalString: function (word) {
        if (!Bridge.hasValue(word)) {
            return null;
        }

        var wordChars = Bridge.String.toCharArray(word, 0, word.length);
        wordChars.sort();

        return String.fromCharCode.apply(null, wordChars);
    }
});

Bridge.define('Bridge.ClientTest.Utilities.Group', {
    statics: {
        getGroups: function () {
            var groups = new Bridge.List$1(Bridge.ClientTest.Utilities.Group)();
            groups.add(Bridge.merge(new Bridge.ClientTest.Utilities.Group(), {
                setName: "A",
                setLimit: 1000
            } ));
            groups.add(Bridge.merge(new Bridge.ClientTest.Utilities.Group(), {
                setName: "B",
                setLimit: 400
            } ));
            groups.add(Bridge.merge(new Bridge.ClientTest.Utilities.Group(), {
                setName: "C",
                setLimit: 800
            } ));
            groups.add(Bridge.merge(new Bridge.ClientTest.Utilities.Group(), {
                setName: "D",
                setLimit: 200
            } ));

            return groups;
        }
    },
    config: {
        properties: {
            Name: null,
            Limit: 0
        }
    }
});

Bridge.define('Bridge.ClientTest.Utilities.Person', {
    statics: {
        getPersons: function () {
            var persons = new Bridge.List$1(Bridge.ClientTest.Utilities.Person)();

            persons.add(Bridge.merge(new Bridge.ClientTest.Utilities.Person(), {
                setID: 1,
                setName: "Frank",
                setCity: "Edmonton",
                setCount: 300,
                setGroup: "A"
            } ));
            persons.add(Bridge.merge(new Bridge.ClientTest.Utilities.Person(), {
                setID: 2,
                setName: "Zeppa",
                setCity: "Tokyo",
                setCount: 100,
                setGroup: "C"
            } ));
            persons.add(Bridge.merge(new Bridge.ClientTest.Utilities.Person(), {
                setID: 3,
                setName: "John",
                setCity: "Lisbon",
                setCount: 700,
                setGroup: "B"
            } ));
            persons.add(Bridge.merge(new Bridge.ClientTest.Utilities.Person(), {
                setID: 4,
                setName: "Billy",
                setCity: "Paris",
                setCount: 500,
                setGroup: "C"
            } ));
            persons.add(Bridge.merge(new Bridge.ClientTest.Utilities.Person(), {
                setID: 5,
                setName: "Dora",
                setCity: "Budapest",
                setCount: 50,
                setGroup: "B"
            } ));
            persons.add(Bridge.merge(new Bridge.ClientTest.Utilities.Person(), {
                setID: 6,
                setName: "Ian",
                setCity: "Rome",
                setCount: 550,
                setGroup: "B"
            } ));
            persons.add(Bridge.merge(new Bridge.ClientTest.Utilities.Person(), {
                setID: 7,
                setName: "Mary",
                setCity: "Dortmund",
                setCount: 700,
                setGroup: "B"
            } ));
            persons.add(Bridge.merge(new Bridge.ClientTest.Utilities.Person(), {
                setID: 8,
                setName: "Nemo",
                setCity: "Ocean",
                setCount: 3000,
                setGroup: null
            } ));

            return persons;
        }
    },
    config: {
        properties: {
            ID: 0,
            Name: null,
            City: null,
            Count: 0,
            Group: null
        }
    }
});

Bridge.define('Bridge.ClientTest.Utilities.TypeHelper', {
    statics: {
        getTypeName: function (o) {
            return Bridge.getTypeName(o);
            // return Script.Get<string>("o.__proto__.$$name");
        }
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqConversionOperatorsIEqualityComparer', {
    inherits: [Bridge.EqualityComparer$1(String)],
    equals: function (x, y) {
        return Bridge.String.equals(x, y);
    },
    getHashCode: function (obj) {
        if (!Bridge.hasValue(obj)) {
            return 0;
        }

        return Bridge.getHashCode(obj);
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.B3', {
    f1: 0,
    f2: 0,
    f3: 0,
    getP1: function () {
        return this.f1;
    },
    setP1: function (value) {
        this.f1 = value;
    },
    getP2: function () {
        return this.f2;
    },
    setP3: function (value) {
        this.f3 = value;
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.D3', {
    inherits: [Bridge.ClientTest.PropertyAccessorTests.B3],
    getP1: function () {
        return Bridge.ClientTest.PropertyAccessorTests.B3.prototype.getP1.call(this) + 1;
    },
    setP1: function (value) {
        Bridge.ClientTest.PropertyAccessorTests.B3.prototype.setP1.call(this, value - 1);
    },
    getP2: function () {
        return Bridge.ClientTest.PropertyAccessorTests.B3.prototype.getP2.call(this) + 1;
    },
    setP3: function (value) {
        Bridge.ClientTest.PropertyAccessorTests.B3.prototype.setP3.call(this, value - 1);
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.B4$1', function (T) { return {
    f1: null,
    f2: null,
    f3: null,
    getP1: function () {
        return this.f1;
    },
    setP1: function (value) {
        this.f1 = value;
    },
    getP2: function () {
        return this.f2;
    },
    setP3: function (value) {
        this.f3 = value;
    }
}; });

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.D4$1', function (T) { return {
    inherits: [Bridge.ClientTest.PropertyAccessorTests.B4$1(T)],
    getP1: function () {
        return Bridge.ClientTest.PropertyAccessorTests.B4$1(T).prototype.getP1.call(this) + 1;
    },
    setP1: function (value) {
        Bridge.ClientTest.PropertyAccessorTests.B4$1(T).prototype.setP1.call(this, value - 1);
    },
    getP2: function () {
        return Bridge.ClientTest.PropertyAccessorTests.B4$1(T).prototype.getP2.call(this) + 1;
    },
    setP3: function (value) {
        Bridge.ClientTest.PropertyAccessorTests.B4$1(T).prototype.setP3.call(this, value - 1);
    }
}; });

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.C1', {
    statics: {
        fS1: 0,
        fS2: 0,
        fS3: 0,
        getPS1: function () {
            return Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C1).fS1 + 1;
        },
        setPS1: function (value) {
            Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C1).fS1 = value - 1;
        },
        getPS2: function () {
            return Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C1).fS2 + 1;
        },
        setPS3: function (value) {
            Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C1).fS3 = value - 1;
        }
    },
    f1: 0,
    f2: 0,
    f3: 0,
    getP1: function () {
        return this.f1 + 1;
    },
    setP1: function (value) {
        this.f1 = value - 1;
    },
    getP2: function () {
        return this.f2 + 1;
    },
    setP3: function (value) {
        this.f3 = value - 1;
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.C2$1', function (T) { return {
    statics: {
        fS1: null,
        fS2: null,
        fS3: null,
        getPS1: function () {
            return Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C2$1(T)).fS1 + 1;
        },
        setPS1: function (value) {
            Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C2$1(T)).fS1 = value - 1;
        },
        getPS2: function () {
            return Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C2$1(T)).fS2 + 1;
        },
        setPS3: function (value) {
            Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C2$1(T)).fS3 = value - 1;
        }
    },
    f1: null,
    f2: null,
    f3: null,
    getP1: function () {
        return this.f1 + 1;
    },
    setP1: function (value) {
        this.f1 = value - 1;
    },
    getP2: function () {
        return this.f2 + 1;
    },
    setP3: function (value) {
        this.f3 = value - 1;
    }
}; });

Bridge.define('Bridge.ClientTest.SimpleTypes.EnumTests.FlagsEnum', {
    statics: {
        none: 0,
        firstValue: 1,
        secondValue: 2,
        thirdValue: 4
    },
    $enum: true,
    $flags: true
});

Bridge.define('Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum', {
    statics: {
        firstValue: 0,
        secondValue: 1,
        thirdValue: 2
    },
    $enum: true
});

Bridge.define('Bridge.ClientTest.SimpleTypes.ObjectTests.C1', {
    toString: function () {
        return "test";
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.ObjectTests.C2', {
    inherits: [Bridge.ClientTest.SimpleTypes.ObjectTests.C1]
});

Bridge.define('Bridge.ClientTest.SimpleTypes.StringTests.MyEnumerable$1', function (T) { return {
    inherits: [Bridge.IEnumerable$1(T)],
    _items: null,
    constructor: function (items) {
        this._items = items;
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return Bridge.cast(Bridge.getEnumerator(this._items), Bridge.IEnumerator$1(T));
    }
}; });

Bridge.define('Bridge.ClientTest.Text.StringBuilderTests.SomeClass', {
    toString: function () {
        return "some text";
    }
});

Bridge.define('Bridge.ClientTest.ArrayTests', {
    typePropertiesAreCorrect: function () {
        var arr = [1, 2, 3];
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Array), "is Array should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Array), "is int[] should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Bridge.ICollection), "is ICollection should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Bridge.IEnumerable), "is IEnumerable should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Bridge.ICloneable), "is ICloneable should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Bridge.ICollection$1(Bridge.Int)), "is ICollection<int> should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Bridge.IEnumerable$1(Bridge.Int)), "is IEnumerable<int> should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Bridge.IList$1(Bridge.Int)), "is IList<int> should be true");
    },
    lengthWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.init(0, 0).length, 0);
        Bridge.get(Bridge.Test.Assert).areEqual(["x"].length, 1);
        Bridge.get(Bridge.Test.Assert).areEqual(["x", "y"].length, 2);
    },
    rankIsOne: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getRank(Bridge.Array.init(0, 0)), 1);
    },
    getLengthWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getLength(Bridge.Array.init(0, 0), 0), 0);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getLength(["x"], 0), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getLength(["x", "y"], 0), 2);
    },
    getLowerBound: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getLower(Bridge.Array.init(0, 0), 0), 0);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getLower(["x"], 0), 0);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getLower(["x", "y"], 0), 0);
    },
    getUpperBoundWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual((Bridge.Array.getLength(Bridge.Array.init(0, 0), 0) - 1), -1);
        Bridge.get(Bridge.Test.Assert).areEqual((Bridge.Array.getLength(["x"], 0) - 1), 0);
        Bridge.get(Bridge.Test.Assert).areEqual((Bridge.Array.getLength(["x", "y"], 0) - 1), 1);
    },
    gettingValueByIndexWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(["x", "y"][0], "x");
        Bridge.get(Bridge.Test.Assert).areEqual(["x", "y"][1], "y");
    },
    getValueWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.get(["x", "y"], 0), "x");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.get(["x", "y"], 1), "y");
    },
    settingValueByIndexWorks: function () {
        var arr = Bridge.Array.init(2, null);
        arr[0] = "x";
        arr[1] = "y";
        Bridge.get(Bridge.Test.Assert).areEqual(arr[0], "x");
        Bridge.get(Bridge.Test.Assert).areEqual(arr[1], "y");
    },
    setValueWorks: function () {
        var arr = Bridge.Array.init(2, null);
        Bridge.Array.set(arr, "x", 0);
        Bridge.Array.set(arr, "y", 1);
        Bridge.get(Bridge.Test.Assert).areEqual(arr[0], "x");
        Bridge.get(Bridge.Test.Assert).areEqual(arr[1], "y");
    },
    foreachWorks: function () {
        var $t;
        var result = "";
        $t = Bridge.getEnumerator(["x", "y"]);
        while ($t.moveNext()) {
            var s = $t.getCurrent();
            result += s;
        }
        Bridge.get(Bridge.Test.Assert).areEqual(result, "xy");
    },
    cloneWorks: function () {
        var arr = ["x", "y"];
        var arr2 = (Bridge.Array.clone(arr));
        Bridge.get(Bridge.Test.Assert).$false(arr === arr2);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(arr, arr2);
    },
    concatWorks: function () {
        var arr = ["a", "b"];
        Bridge.get(Bridge.Test.Assert).areDeepEqual(arr.concat("c"), ["a", "b", "c"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(arr.concat("c", "d"), ["a", "b", "c", "d"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(arr, ["a", "b"]);
    },
    containsWorks: function () {
        var arr = ["x", "y"];
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Linq.Enumerable.from(arr).contains("x"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Linq.Enumerable.from(arr).contains("z"));
    },
    containsUsesEqualsMethod: function () {
        var arr = [new Bridge.ClientTest.ArrayTests.C(1), new Bridge.ClientTest.ArrayTests.C(2), new Bridge.ClientTest.ArrayTests.C(3)];
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Linq.Enumerable.from(arr).contains(new Bridge.ClientTest.ArrayTests.C(2)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Linq.Enumerable.from(arr).contains(new Bridge.ClientTest.ArrayTests.C(4)));
    },
    allWithArrayItemFilterCallbackWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Linq.Enumerable.from([1, 2, 3]).all(function (x) {
            return x > 0;
        }));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Linq.Enumerable.from([1, 2, 3]).all(function (x) {
            return x > 1;
        }));
    },
    sliceWithoutEndWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(["a", "b", "c", "d"].slice(2), ["c", "d"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(["a", "b", "c", "d"].slice(1, 3), ["b", "c"]);
    },
    foreachWithArrayItemCallbackWorks: function () {
        var result = "";
        Bridge.Linq.Enumerable.from(["a", "b", "c"]).forEach(function (s) {
            result += s;
        });
        Bridge.get(Bridge.Test.Assert).areEqual(result, "abc");
    },
    foreachWithArrayCallbackWorks: function () {
        var result = "";
        Bridge.Linq.Enumerable.from(["a", "b", "c"]).forEach(function (s, i) {
            result += s + i;
        });
        Bridge.get(Bridge.Test.Assert).areEqual(result, "a0b1c2");
    },
    indexOfWithoutStartIndexWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(["a", "b", "c", "b"].indexOf("b"), 1);
    },
    indexOfWithoutStartIndexUsesEqualsMethod: function () {
        var arr = [new Bridge.ClientTest.ArrayTests.C(1), new Bridge.ClientTest.ArrayTests.C(2), new Bridge.ClientTest.ArrayTests.C(3)];
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.ArrayTests.C(2)), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.ArrayTests.C(4)), -1);
    },
    indexOfWithStartIndexWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(["a", "b", "c", "b"].indexOf("b", 2), 3);
    },
    joinWithoutDelimiterWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(["a", "b", "c", "b"].join(","), "a,b,c,b");

        Bridge.get(Bridge.Test.Assert).areEqual(["a", "b", "c", "b"].join("|"), "a|b|c|b");
    },
    reverseWorks: function () {
        var arr = [1, 3, 4, 1, 3, 2];
        arr.reverse();
        Bridge.get(Bridge.Test.Assert).areDeepEqual(arr, [2, 3, 1, 4, 3, 1]);
    },
    anyWithArrayItemFilterCallbackWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Linq.Enumerable.from([1, 2, 3, 4]).any(function (i) {
            return i > 1;
        }));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Linq.Enumerable.from([1, 2, 3, 4]).any(function (i) {
            return i > 5;
        }));
    },
    binarySearch1Works: function () {
        var arr = [1, 2, 3, 3, 4, 5];

        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.binarySearch(arr, 0, arr.length, 3), 2);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.binarySearch(arr, 0, arr.length, 6) < 0);
    },
    binarySearch2Works: function () {
        var arr = [1, 2, 3, 3, 4, 5];

        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.binarySearch(arr, 3, 2, 3), 3);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.binarySearch(arr, 2, 2, 4) < 0);
    },
    binarySearch3Works: function () {
        var arr = [1, 2, 3, 3, 4, 5];

        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.binarySearch(arr, 0, arr.length, 3, new Bridge.ClientTest.ArrayTests.TestReverseComparer()), 2);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.binarySearch(arr, 0, arr.length, 6, new Bridge.ClientTest.ArrayTests.TestReverseComparer()), -1);
    },
    binarySearch4Works: function () {
        var arr = [1, 2, 3, 3, 4, 5];

        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.binarySearch(arr, 3, 2, 3, new Bridge.ClientTest.ArrayTests.TestReverseComparer()), 3);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.binarySearch(arr, 3, 2, 4, new Bridge.ClientTest.ArrayTests.TestReverseComparer()) < 0);
    },
    binarySearchExceptionsWorks: function () {
        var arr1 = null;
        var arr2 = [1, 2, 3, 3, 4, 5];

        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Array.binarySearch(arr1, 0, arr1.length, 1);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Array.binarySearch(arr2, -1, 1, 1);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Array.binarySearch(arr2, 1, 6, 1);
        });
    },
    sortWithDefaultCompareWorks: function () {
        var arr = [1, 6, 6, 4, 2];
        arr.sort();
        Bridge.get(Bridge.Test.Assert).areDeepEqual(arr, [1, 2, 4, 6, 6]);
    },
    sort1Works: function () {
        var arr = [1, 6, 6, 4, 2];
        Bridge.Array.sort(arr);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(arr, [1, 2, 4, 6, 6]);
    },
    sort2Works: function () {
        var arr = [1, 6, 6, 4, 2];
        Bridge.Array.sort(arr, 2, 3);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(arr, [1, 6, 2, 4, 6]);
    },
    sort3Works: function () {
        var arr = [1, 2, 6, 3, 6, 7];
        Bridge.Array.sort(arr, 2, 3, new Bridge.ClientTest.ArrayTests.TestReverseComparer());
        Bridge.get(Bridge.Test.Assert).areDeepEqual(arr, [1, 2, 6, 6, 3, 7]);
    },
    sort4Works: function () {
        var arr = [1, 6, 6, 4, 2];
        Bridge.Array.sort(arr, new Bridge.ClientTest.ArrayTests.TestReverseComparer());
        Bridge.get(Bridge.Test.Assert).areDeepEqual(arr, [6, 6, 4, 2, 1]);
    },
    sortExceptionsWorks: function () {
        var arr1 = null;

        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Array.sort(arr1);
        });
    },
    foreachWhenCastToIListWorks: function () {
        var $t;
        var list = ["x", "y"];
        var result = "";
        $t = Bridge.getEnumerator(list);
        while ($t.moveNext()) {
            var s = $t.getCurrent();
            result += s;
        }
        Bridge.get(Bridge.Test.Assert).areEqual(result, "xy");
    },
    iCollectionCountWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getCount(l), 3);
    },
    iCollectionAddWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Array.add(l, "a");
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l, ["x", "y", "z", "a"]);
    },
    iCollectionClearWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Array.clear(l);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l, Bridge.Array.init(0, null));
    },
    iCollectionContainsWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.contains(l, "y"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Array.contains(l, "a"));
    },
    iCollectionContainsUsesEqualsMethod: function () {
        var l = [new Bridge.ClientTest.ArrayTests.C(1), new Bridge.ClientTest.ArrayTests.C(2), new Bridge.ClientTest.ArrayTests.C(3)];
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.contains(l, new Bridge.ClientTest.ArrayTests.C(2)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Array.contains(l, new Bridge.ClientTest.ArrayTests.C(4)));
    },
    iCollectionRemoveWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.remove(l, "y"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Array.remove(l, "a"));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l, ["x", "z"]);
    },
    iListIndexingWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getItem(l, 1), "y");
        Bridge.Array.setItem(l, 1, "a");
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l, ["x", "a", "z"]);
    },
    iListIndexOfWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.indexOf(l, "y"), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.indexOf(l, "a"), -1);
    },
    iListIndexOfUsesEqualsMethod: function () {
        var arr = [new Bridge.ClientTest.ArrayTests.C(1), new Bridge.ClientTest.ArrayTests.C(2), new Bridge.ClientTest.ArrayTests.C(3)];
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.ArrayTests.C(2)), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.ArrayTests.C(4)), -1);
    },
    iListInsertWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Array.insert(l, 1, "a");
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l, ["x", "a", "y", "z"]);
    },
    iListRemoveAtWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Array.removeAt(l, 1);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l, ["x", "z"]);
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestAbstractClass', {
    statics: {
        testB: function () {
            var b = new Bridge.ClientTest.BasicCSharp.TestAbstractClass.B();

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(b), "Instance of B created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getString(), "B", "b.GetString() = 'B'");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getData(), 1, "b.Data = 1");
        },
        testC: function () {
            var c = new Bridge.ClientTest.BasicCSharp.TestAbstractClass.C();

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(c), "Instance of C created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getString(), "C", "c.GetString() = 'C'");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getData(), -1, "c.Data = -1");
        },
        testBC: function () {
            var b = new Bridge.ClientTest.BasicCSharp.TestAbstractClass.B();

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(b), "Instance of B created as instance of A");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getString(), "B", "b.GetString() = 'B'");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getData(), 1, "b.Data = 1");

            var c = new Bridge.ClientTest.BasicCSharp.TestAbstractClass.C();
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(c), "Instance of C created as instance of A");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getString(), "C", "c.GetString() = 'C'");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getData(), -1, "c.Data = -1");
        }
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestEnum', {
    statics: {
        testParse: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.parse(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, "Zero"), Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).zero, "Parse Digits.Zero");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.parse(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, "One"), Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).one, "Parse Digits.One");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.parse(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, "Two"), Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).two, "Parse Digits.Two");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.parse(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, "Dog, Cat"), 3, "Parse Dog, Cat");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.parse(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, "Bird, Cat, Rabbit"), 14, "Parse Bird, Cat, Rabbit");

            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                var d = Bridge.Enum.parse(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, "ONE");
            }, "Parse ONE");
        },
        testParseIgnoreCase: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.parse(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, "zero", true), Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).zero, "Parse Digits.Zero");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.parse(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, "oNe", true), Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).one, "Parse Digits.One");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.parse(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, "TWO", true), Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).two, "Parse Digits.Two");

            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                var d = Bridge.Enum.parse(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, "ONN", true);
            }, "Parse ONN");
        },
        testToString: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.toString(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).zero), "Zero", "ToString Digits.Zero");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.toString(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).one), "One", "ToString Digits.One");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.toString(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).two), "Two", "ToString Digits.Two");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.toString(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, 150), "150", "ToString (Digits)150");
        },
        testGetValues: function () {
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(Bridge.Enum.getValues(Bridge.ClientTest.BasicCSharp.TestEnum.Abc), [Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Abc).a, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Abc).b, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Abc).c], "Abc values");

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(Bridge.Enum.getValues(Bridge.ClientTest.BasicCSharp.TestEnum.Digits), [Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).zero, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).one, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).two], "Digits values");
        },
        testCompareTo: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.compare(Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).two, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).two), 0, "CompareTo Digits.Two with Digits.Two");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.compare(Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).one, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).two), -1, "CompareTo Digits.One with Digits.Two");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.compare(Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).two, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).zero), 1, "CompareTo Digits.Two with Digits.Zero");
        },
        testFormat: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).two, "G"), "Two", "Format Digits.Two G");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).two, "g"), "Two", "Format Digits.Two g");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, 150, "G"), "150", "Format (Digits)150 G");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, 150, "g"), "150", "Format (Digits)150 g");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, 3, "G"), "Dog, Cat", "Format Pets.Dog | Pets.Cat G");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, 28, "g"), "Bird, Rabbit, Other", "Format Pets.Bird | Pets.Rabbit | Pets.Other g");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Pets1, 3, "G"), "3", "Format Pets1.Cat | Pets1.Dog G");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Pets1, 3, "g"), "3", "Format Pets1.Cat | Pets1.Dog g");

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).two, "X"), "2", "Format Digits.Two X");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).one, "x"), "1", "Format Digits.One x");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, 255, "X"), "ff", "Format (Digits)255 X");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, 255, "x"), "ff", "Format (Digits)255 x");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, 24, "X"), "18", "Format Pets.Rabbit | Pets.Other X");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Pets).other, "x"), "10", "Format Pets.Other x");

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).two, "D"), "2", "Format Digits.Two D");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).one, "d"), "1", "Format Digits.One d");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, 255, "D"), "255", "Format (Digits)255 D");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, 255, "d"), "255", "Format (Digits)255 d");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, 24, "D"), "24", "Format Pets.Rabbit | Pets.Other D");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Pets).other, "d"), "16", "Format Pets.Other d");


            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Pets1, 3, "F"), "Dog, Cat", "Format Pets1.Cat | Pets1.Dog F");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.format(Bridge.ClientTest.BasicCSharp.TestEnum.Pets1, 3, "f"), "Dog, Cat", "Format Pets1.Cat | Pets1.Dog f");
        },
        testGetName: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.getName(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, 2), "Two", "GetName 2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.getName(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, 1), "One", "GetName 1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.getName(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, 100), null, "GetName 100");
        },
        testGetNames: function () {
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(Bridge.Enum.getNames(Bridge.ClientTest.BasicCSharp.TestEnum.Abc), ["A", "B", "C"], "Abc names");

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(Bridge.Enum.getNames(Bridge.ClientTest.BasicCSharp.TestEnum.Digits), ["Zero", "One", "Two"], "Digits names");
        },
        testHasFlag: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.hasFlag(((3)), Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Pets).cat), true, "(Pets.Dog | Pets.Cat).HasFlag(Pets.Cat)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.hasFlag(((3)), Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Pets).dog), true, "(Pets.Dog | Pets.Cat).HasFlag(Pets.Dog)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.hasFlag(((3)), Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Pets).bird), false, "(Pets.Dog | Pets.Cat).HasFlag(Pets.Bird)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.hasFlag(Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Pets).dog, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Pets).dog), true, "Pets.Dog.HasFlag(Pets.Dog)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.hasFlag(Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Pets).dog, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Pets).cat), false, "Pets.Dog.HasFlag(Pets.Cat)");
        },
        testIsDefined: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.isDefined(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, 1), true, "Enum.IsDefined(typeof(Pets), 1)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.isDefined(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, 17), false, "Enum.IsDefined(typeof(Pets), 17)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.isDefined(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, "Rabbit"), true, "Enum.IsDefined(typeof(Pets), \"Rabbit\")");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.isDefined(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, "Parrot"), false, "Enum.IsDefined(typeof(Pets), \"Parrot\")");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.isDefined(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, "RABBIT"), false, "Enum.IsDefined(typeof(Pets), \"RABBIT\")");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.isDefined(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, 3), false, "Enum.IsDefined(typeof(Pets), Pets.Dog | Pets.Cat)");
        },
        testTryParse: function () {
            var outVar = { v : new Bridge.ClientTest.BasicCSharp.TestEnum.Digits() };
            var outPets = { v : new Bridge.ClientTest.BasicCSharp.TestEnum.Pets() };
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.tryParse(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, "Zero", outVar), true, "TryParse Digits.Zero");
            Bridge.get(Bridge.Test.Assert).areEqual(outVar.v, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).zero);
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.tryParse(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, "One", outVar), true, "TryParse Digits.One");
            Bridge.get(Bridge.Test.Assert).areEqual(outVar.v, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).one);
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.tryParse(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, "Two", outVar), true, "TryParse Digits.Two");
            Bridge.get(Bridge.Test.Assert).areEqual(outVar.v, Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum.Digits).two);
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.tryParse(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, "Dog, Cat", outPets), true, "TryParse Dog, Cat");
            Bridge.get(Bridge.Test.Assert).areEqual(outPets.v, 3);
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.tryParse(Bridge.ClientTest.BasicCSharp.TestEnum.Pets, "Bird, Cat, Rabbit", outPets), true, "TryParse Bird, Cat, Rabbit");
            Bridge.get(Bridge.Test.Assert).areEqual(outPets.v, 14);
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Enum.tryParse(Bridge.ClientTest.BasicCSharp.TestEnum.Digits, "ONE", outVar), false, "TryParse ONE");
        }
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestInheritance', {
    statics: {
        testA: function () {
            var a = new Bridge.ClientTest.BasicCSharp.TestInheritance.A(10);

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(a), "Instance of A created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getX(), 10, "a.X = 10");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.handleNumber(100), 100, "a.HandleNumber(100) = 100");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.handleString("Hundred"), "Hundred", "a.HandleString('Hundred') = 'Hundred'");
        },
        testB: function () {
            var b = new Bridge.ClientTest.BasicCSharp.TestInheritance.B(10, 20);

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(b), "Instance of B created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getX(), 10, "b.X = 10");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getY(), 20, "b.Y = 20");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.handleNumber$1(1), 100, "b.HandleNumber(1) = 100");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.handleString("Hundred"), "Hundred", "b.HandleString('Hundred') = 'Hundred'");
        },
        testAB: function () {
            var b = new Bridge.ClientTest.BasicCSharp.TestInheritance.B(10, 20);

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(b), "Instance of B created as A type");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getX(), 10, "b.X = 10");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.handleNumber(10), 10, "b.HandleNumber(10) = 10");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.handleString("Hundred"), "Hundred", "b.HandleString('Hundred') = 'Hundred'");
        }
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestInterfaces', {
    statics: {
        testInterfaceMethodAndProperty: function () {
            var a = new Bridge.ClientTest.BasicCSharp.TestInterfaces.A();

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(a), "Instance of A created through ISimple interface");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getString(), "A.ISimple", "a.GetString() = A.ISimple  through interface");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getData(), 1, "a.Data = 1  through interface");

            var b = Bridge.as(a, Bridge.ClientTest.BasicCSharp.TestInterfaces.A);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(b), "Instance of ISimple as A");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getString(), "A.ISimple", "a.GetString() = A.ISimple through instance");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getData(), 1, "a.Data = 1 through instance");
        },
        testExplicitInterfaceMethodAndProperty: function () {
            var b = new Bridge.ClientTest.BasicCSharp.TestInterfaces.B();
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(b), "Instance of B created through ISimple interface explicitly");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getString(), "explicit B.ISimple", "b.GetString() = explicit B.ISimple");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getData(), 2, "a.Data = 2");
        },
        testTwoInterfaces: function () {
            var c = new Bridge.ClientTest.BasicCSharp.TestInterfaces.C();

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(c), "Instance of C created through ISimpleAsWell interface");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getStringAsWell(), "C.ISimpleAsWell", "a.GetStringAsWell() = A.ISimple through instance");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getDataAsWell(), 4, "c.DataAsWell = 4  through instance");

            var a = Bridge.as(c, Bridge.ClientTest.BasicCSharp.TestInterfaces.ISimple);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(a), "Instance of ISimple as C");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getString(), "C.ISimple", "a.GetString() = C.ISimple  through interface");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getData(), 3, "a.Data = 3 through interface");

            var b = Bridge.as(c, Bridge.ClientTest.BasicCSharp.TestInterfaces.ISimpleAsWell);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(b), "Instance of ISimpleAsWell as C");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getStringAsWell(), "C.ISimpleAsWell", "b.GetStringAsWell() = C.ISimpleAsWell  through interface");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getDataAsWell(), 4, "b.DataAsWell = 4 through interface");
        }
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestMethodParametersClass', {
    statics: {
        methodDefault: function (i) {
            if (i === void 0) { i = 5; }
            return i;
        },
        methodParams: function (n) {
            var sum = 0;
            for (var i = 0; i < n.length; i++) {
                sum += n[i];
            }

            return sum;
        },
        test: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestMethodParametersClass).methodDefault(), 5, "Default parameter - 5");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestMethodParametersClass).methodDefault(10), 10, "Default parameter - 10");

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestMethodParametersClass).methodParams([1, 2, 3]), 6, "params int[]");
        }
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestOverloadInstanceMethods', {
    statics: {
        testInstance: function () {
            var i = new Bridge.ClientTest.BasicCSharp.TestOverloadInstanceMethods.Instance();

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(i), "i created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i.foo$2(1), "Foo(int x)", "Instance Foo(int x)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i.foo$5("string"), "Foo(string s)", "Instance Foo(string s)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i.foo(1.1), "Foo(double d)", "Instance Foo(double d)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i.foo$4(1, 2), "Foo(int x, int y)", "Instance Foo(int x, int y)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i.foo$3(1, 1.1), "Foo(int x, double y)", "Instance Foo(int x, double y)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i.foo$1(1.1, 1), "Foo(double x, int y)", "Instance Foo(double x, int y)");

            Bridge.get(Bridge.Test.Assert).areEqual$1(i.fooReturnType(1), 67, "Instance char FooReturnType(int y)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i.fooReturnType$1(1.1), "string FooReturnType(double d)", "Instance string FooReturnType(double d)");

            Bridge.get(Bridge.Test.Assert).areEqual$1(i.fooOptionalParameters(1), "FooOptionalParameters(int x)", "Instance FooOptionalParameters(int x)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i.fooOptionalParameters$1(1, 2), "FooOptionalParameters(int x, int y = 5)", "Instance FooOptionalParameters(int x, int y = 5)");

            Bridge.get(Bridge.Test.Assert).areEqual$1(i.fooMultipleOptionalParameters(1, 2), "FooMultipleOptionalParameters(int x, int y = 5)", "Instance FooMultipleOptionalParameters(int x, int y = 5)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i.fooMultipleOptionalParameters$1(1, 5, 2), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i.fooMultipleOptionalParameters$1(1, 2, 3), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i.fooMultipleOptionalParameters$1(1, 3, 2), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");

            Bridge.get(Bridge.Test.Assert).areEqual$1(i.fooNamedArgument$1(1), "FooNamedArgument(int x)", "Static FooNamedArgument(int x)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i.fooNamedArgument(1), "FooNamedArgument(double d)", "Static FooNamedArgument(double d)");
        }
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods', {
    statics: {
        testStatic: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).foo$2(1), "Foo(int x)", "Static Foo(int x)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).foo$5("string"), "Foo(string s)", "Static Foo(string s)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).foo(1.1), "Foo(double d)", "Static Foo(double d)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).foo$4(1, 2), "Foo(int x, int y)", "Static Foo(int x, int y)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).foo$3(1, 1.1), "Foo(int x, double y)", "Static Foo(int x, double y)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).foo$1(1.1, 1), "Foo(double x, int y)", "Static Foo(double x, int y)");

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).fooReturnType(1), 67, "Static char FooReturnType(int y)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).fooReturnType$1(1.1), "string FooReturnType(double d)", "Static string FooReturnType(double d)");

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).fooOptionalParameters(1), "FooOptionalParameters(int x)", "Static FooOptionalParameters(int x)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).fooOptionalParameters$1(1, 2), "FooOptionalParameters(int x, int y = 5)", "Static FooOptionalParameters(int x, int y = 5)");

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).fooMultipleOptionalParameters(1, 2), "FooMultipleOptionalParameters(int x, int y = 5)", "Static FooMultipleOptionalParameters(int x, int y = 5)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).fooMultipleOptionalParameters$1(1, 5, 2), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Static FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).fooMultipleOptionalParameters$1(1, 2, 3), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Static FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).fooMultipleOptionalParameters$1(1, 3, 2), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Static FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).fooNamedArgument$1(1), "FooNamedArgument(int x)", "Static FooNamedArgument(int x)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.Static).fooNamedArgument(1), "FooNamedArgument(double d)", "Static FooNamedArgument(double d)");
        }
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestSet1FailureHelper', {
    statics: {
        testConstructor1Failure: function () {
            new Bridge.ClientTest.BasicCSharp.ClassA("constructor$1", Bridge.cast(null, Bridge.ClientTest.BasicCSharp.ClassA.Aux1));
        },
        testConstructor2Failure: function () {
            var t = new Bridge.ClientTest.BasicCSharp.ClassA("constructor$2", [Bridge.Array.init(2, null)]);
        },
        staticMethod2Failure: function () {
            Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).staticMethod2(["1", "some string", "345.345435"]);
        }
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks', {
    statics: {
        config: {
            properties: {
                IsATry: false,
                IsACatch: false,
                IsBTry: false,
                IsBCatch: false,
                IsCTry: false,
                IsCCatch: false,
                IsDTry: false,
                IsDCatch: false
            }
        },
        simpleTryCatch: function () {
            var result = Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).tryCatch("Good");

            Bridge.get(Bridge.Test.Assert).areEqual$1(result, "Good", "TryCatch() executes");
        },
        caughtExceptions: function () {
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).tryCatchWithCaughtException();
            Bridge.get(Bridge.Test.Assert).true$1(true, "Exception catch");

            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).tryCatchWithCaughtTypedException();
            Bridge.get(Bridge.Test.Assert).true$1(true, "Typed exception catch");

            var exceptionMessage = Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).tryCatchWithCaughtArgumentException();
            Bridge.get(Bridge.Test.Assert).areEqual$1(exceptionMessage, "catch me", "Typed exception catch with exception message");
        },
        thrownExceptions: function () {
            // #230
            Bridge.get(Bridge.Test.Assert).throws$4(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).tryCatchWithNotCaughtTypedException, "catch me", "A.Typed exception is not Caught");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).getIsATry(), "A. exception not caught - try section called");
            Bridge.get(Bridge.Test.Assert).true$1(!Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).getIsACatch(), "A. exception not caught - catch section not called");

            // #229
            Bridge.get(Bridge.Test.Assert).throws$4(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).tryCatchWithNotCaughtTypedExceptionAndArgument, "catch me", "[#229] B. Typed exception is not Caught; and argument");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).getIsBTry(), "[#229] B. exception not caught - try section called");
            Bridge.get(Bridge.Test.Assert).true$1(!Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).getIsBCatch(), "B. exception not caught - catch section not called");

            // #231
            Bridge.get(Bridge.Test.Assert).throws$4(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).tryCatchWithRethrow, "catch me", "[#231] C. Rethrow");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).getIsCTry(), "C. exception caught and re-thrown - try section called");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).getIsCCatch(), "C. exception caught and re-thrown - catch section called");

            Bridge.get(Bridge.Test.Assert).throws$2(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).tryCatchWithRethrowEx, function (error) {
                return error.toString() === "catch me";
            }, "D. Rethrow with parameter");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).getIsDTry(), "D. exception caught and re-thrown  - try section called");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).getIsDCatch(), "D. exception caught and re-thrown  - catch section called");
        },
        bridge320: function () {
            var exceptionMessage = "";

            try {
                "someString".SomeNotExistingMethod();
            }
            catch (ex) {
                ex = Bridge.Exception.create(ex);
                exceptionMessage = ex.getMessage();
            }

            // var expectedMessage = Utilities.BrowserHelper.IsPhantomJs()
            //    ? "undefined is not a constructor (evaluating '\"someString\".SomeNotExistingMethod()')"
            //    : "\"someString\".SomeNotExistingMethod is not a function";

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.String.contains(exceptionMessage,"SomeNotExistingMethod"), "ex.Message works on built-in JavaScript type");
        },
        bridge343: function () {
            var exceptionMessage = "";

            var i = 0;

            try {
                var r = Bridge.Int.div(10, i);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.ArgumentException)) {
                }
                else {
                    ex = $e;
                    exceptionMessage = ex.getMessage();
                }
            }

            Bridge.get(Bridge.Test.Assert).true$1(!Bridge.String.isNullOrEmpty(exceptionMessage), "Double catch block with general Exception works");
        },
        tryCatch: function (s) {
            try {
                return s;
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                return "";
            }
        },
        tryCatchWithCaughtException: function () {
            try {
                throw new Bridge.Exception();
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
            }
        },
        tryCatchWithCaughtTypedException: function () {
            try {
                throw new Bridge.Exception();
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
            }
        },
        tryCatchWithCaughtArgumentException: function () {
            try {
                throw new Bridge.ArgumentException("catch me");
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.ArgumentException)) {
                    ex = $e;
                    return ex.getMessage();
                }
                else {
                    throw $e;
                }
            }
        },
        tryCatchWithNotCaughtTypedException: function () {
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsATry(false);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsACatch(false);

            try {
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsATry(true);
                throw new Bridge.Exception("catch me");
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                if (Bridge.is($e, Bridge.ArgumentException)) {
                    Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsATry(true);
                }
                else {
                    throw $e;
                }
            }

            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsATry(false);
        },
        tryCatchWithNotCaughtTypedExceptionAndArgument: function () {
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsBTry(false);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsBCatch(false);

            try {
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsBTry(true);
                throw new Bridge.Exception("catch me");
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsBTry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.InvalidCastException)) {
                    ex = $e;
                    Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsBCatch(true);
                    var s = ex.getMessage();
                }
                else {
                    throw $e;
                }
            }

            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsBTry(false);
        },
        tryCatchWithRethrow: function () {
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsCTry(false);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsCCatch(false);

            try {
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsCTry(true);
                throw new Bridge.InvalidOperationException("catch me");
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsCTry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsCCatch(true);
                throw $e;
            }

            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsCTry(false);
        },
        tryCatchWithRethrowEx: function () {
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsDTry(false);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsDCatch(false);

            try {
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsDTry(true);
                throw new Bridge.ArgumentException("catch me");
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsDTry(false);
            }
            catch (ex) {
                ex = Bridge.Exception.create(ex);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsDCatch(true);
                throw ex;
            }

            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).setIsDTry(false);
        }
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks', {
    statics: {
        config: {
            properties: {
                IsATry: false,
                IsACatch: false,
                IsAFinally: false,
                IsBTry: false,
                IsBCatch: false,
                IsBFinally: false,
                IsCTry: false,
                IsCCatch: false,
                IsCFinally: false,
                IsDTry: false,
                IsDCatch: false,
                IsDFinally: false
            }
        },
        simpleTryCatchFinally: function () {
            var data = new Bridge.ClientTest.BasicCSharp.Data();
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).tryCatchFinally(data);

            Bridge.get(Bridge.Test.Assert).areEqual$1(data.getCount(), 2, "TryCatchFinally() executes");
        },
        caughtExceptions: function () {
            var data = new Bridge.ClientTest.BasicCSharp.Data();
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).tryCatchFinallyWithCaughtException(data);

            Bridge.get(Bridge.Test.Assert).areEqual$1(data.getCount(), 7, "Exception catch, Finally works");

            data = new Bridge.ClientTest.BasicCSharp.Data();
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).tryCatchFinallyWithCaughtTypedException(data);

            Bridge.get(Bridge.Test.Assert).areEqual$1(data.getCount(), 7, "Typed exception catch, Finally works");

            data = new Bridge.ClientTest.BasicCSharp.Data();
            var exceptionMessage = Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).tryCatchFinallyWithCaughtArgumentException(data);

            Bridge.get(Bridge.Test.Assert).areEqual$1(exceptionMessage, "catch me", "Typed exception catch with exception message");
            Bridge.get(Bridge.Test.Assert).areEqual$1(data.getCount(), 7, "Typed exception catch with exception message, Finally works");
        },
        thrownExceptions: function () {
            //#230
            Bridge.get(Bridge.Test.Assert).throws$4(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).tryCatchFinallyWithNotCaughtTypedException, "catch me", "A. Typed exception is not caught");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).getIsATry(), "A. exception not caught - try section called");
            Bridge.get(Bridge.Test.Assert).true$1(!Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).getIsACatch(), "A. exception not caught - catch section not called");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).getIsAFinally(), "A. exception not caught - finally section called");

            //#229
            Bridge.get(Bridge.Test.Assert).throws$4(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).tryCatchWithNotCaughtTypedExceptionAndArgument, "catch me", "[#229] B. Typed exception is not caught; and argument");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).getIsBTry(), "B. exception not caught - try section called");
            Bridge.get(Bridge.Test.Assert).true$1(!Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).getIsBCatch(), "B. exception not caught - catch section not called");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).getIsBFinally(), "B. exception not caught - finally section called");

            //#231
            Bridge.get(Bridge.Test.Assert).throws$4(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).tryCatchWithRethrow, "catch me", "[#231] C. Rethrow");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).getIsCTry(), "C. exception caught and re-thrown  - try section called");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).getIsCCatch(), "C. exception caught and re-thrown  - catch section called");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).getIsCFinally(), "C. exception caught and re-thrown  - finally section called");

            Bridge.get(Bridge.Test.Assert).throws$2(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).tryCatchWithRethrowEx, function (error) {
                return error.toString() === "catch me";
            }, "D. Rethrow with parameter");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).getIsDTry(), "D. exception caught and re-thrown  - try section called");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).getIsDCatch(), "D. exception caught and re-thrown  - catch section called");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).getIsDFinally(), "D. exception caught and re-thrown  - finally section called");
        },
        tryCatchFinally: function (data) {
            try {
                data.setCount(data.getCount()+1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
            }
            finally {
                data.setCount(data.getCount()+1);
            }
        },
        tryCatchFinallyWithCaughtException: function (data) {
            try {
                data.setCount(data.getCount() + 1);
                throw new Bridge.Exception();
                data.setCount(data.getCount() - 1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                data.setCount(data.getCount() + 2);
            }
            finally {
                data.setCount(data.getCount() + 4);
            }
        },
        tryCatchFinallyWithCaughtTypedException: function (data) {
            try {
                data.setCount(data.getCount() + 1);
                throw new Bridge.Exception("catch me");
                data.setCount(data.getCount() - 1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                data.setCount(data.getCount() + 2);
            }
            finally {
                data.setCount(data.getCount() + 4);
            }
        },
        tryCatchFinallyWithCaughtArgumentException: function (data) {
            try {
                data.setCount(data.getCount() + 1);
                throw new Bridge.ArgumentException("catch me");
                data.setCount(data.getCount() - 1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.ArgumentException)) {
                    ex = $e;
                    data.setCount(data.getCount() + 2);

                    return ex.getMessage();
                }
                else {
                    throw $e;
                }
            }
            finally {
                data.setCount(data.getCount() + 4);
            }
        },
        tryCatchFinallyWithNotCaughtTypedException: function () {
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsATry(false);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsACatch(false);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsAFinally(false);

            try {
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsATry(true);
                throw new Bridge.Exception("catch me");
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsATry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                if (Bridge.is($e, Bridge.ArgumentException)) {
                    Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsACatch(true);
                }
                else {
                    throw $e;
                }
            }
            finally {
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsAFinally(true);
            }
        },
        tryCatchWithNotCaughtTypedExceptionAndArgument: function () {
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsBTry(false);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsBCatch(false);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsBFinally(false);

            try {
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsBTry(true);
                throw new Bridge.Exception("catch me");
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsBTry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.InvalidCastException)) {
                    ex = $e;
                    var s = ex.getMessage();
                    Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsBCatch(true);
                }
                else {
                    throw $e;
                }
            }
            finally {
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsBFinally(true);
            }
        },
        tryCatchWithRethrow: function () {
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsCTry(false);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsCCatch(false);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsCFinally(false);

            try {
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsCTry(true);
                throw new Bridge.InvalidOperationException("catch me");
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsCTry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsCCatch(true);
                throw $e;
            }
            finally {
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsCFinally(true);
            }
        },
        tryCatchWithRethrowEx: function () {
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsDTry(false);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsDCatch(false);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsDFinally(false);

            try {
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsDTry(true);
                throw new Bridge.ArgumentException("catch me");
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsDTry(false);
            }
            catch (ex) {
                ex = Bridge.Exception.create(ex);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsDCatch(true);
                throw ex;
            }
            finally {
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).setIsDFinally(true);
            }
        }
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestValueTypes', {
    statics: {
        testInstanceConstructorsAndMethods: function () {
            // Check parameterless constructor
            var a = new Bridge.ClientTest.BasicCSharp.Point();

            Bridge.get(Bridge.Test.Assert).areEqual$1(a.x, 0, "x 0");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.y, 0, "y 0");

            var r = new Bridge.ClientTest.BasicCSharp.Rectangle("constructor");

            Bridge.get(Bridge.Test.Assert).areEqual$1(r.l.x, 0, "r.l.x 0");
            Bridge.get(Bridge.Test.Assert).areEqual$1(r.l.y, 0, "r.l.y 0");
            Bridge.get(Bridge.Test.Assert).areEqual$1(r.t.x, 0, "r.t.x 0");
            Bridge.get(Bridge.Test.Assert).areEqual$1(r.t.y, 0, "r.t.y 0");

            r = new Bridge.ClientTest.BasicCSharp.Rectangle("constructor$1", 10, 20);

            Bridge.get(Bridge.Test.Assert).areEqual$1(r.l.x, 10, "r.l.x 10");
            Bridge.get(Bridge.Test.Assert).areEqual$1(r.l.y, 20, "r.l.y 20");
            Bridge.get(Bridge.Test.Assert).areEqual$1(r.t.x, 0, "r.t.x 0");
            Bridge.get(Bridge.Test.Assert).areEqual$1(r.t.y, 0, "r.t.y 0");

            r = new Bridge.ClientTest.BasicCSharp.Rectangle("constructor$2", 30, 40, 50, 60);

            Bridge.get(Bridge.Test.Assert).areEqual$1(r.l.x, 30, "r.l.x 30");
            Bridge.get(Bridge.Test.Assert).areEqual$1(r.l.y, 40, "r.l.y 40");
            Bridge.get(Bridge.Test.Assert).areEqual$1(r.t.x, 50, "r.t.x 50");
            Bridge.get(Bridge.Test.Assert).areEqual$1(r.t.y, 60, "r.t.y 60");

            var i = a.test1();

            Bridge.get(Bridge.Test.Assert).areEqual$1(i, 500, "i 500");
            a.x = 300;
            i = a.test1();
            Bridge.get(Bridge.Test.Assert).areEqual$1(i, 800, "i 800");

            a.y = 400;

            var b = Bridge.merge(new Bridge.ClientTest.BasicCSharp.Point(), {
                x: 5,
                y: 7
            } );
            var c = b.test2(a.$clone());

            Bridge.get(Bridge.Test.Assert).areEqual$1(c.x, 305, "c.x 305");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.y, 407, "c.y 407");
        },
        testStaticConstructorsAndMethods: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.Point).staticInt, 500, "Point.StaticInt 500");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.Point).staticString, "Initialized", "Point.StaticString Initialized");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.Point).statitIntNotInitialized, 0, "Point.StatitIntNotInitialized 0");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.Point).statitStringNotInitialized, null, "Point.StatitStringNotInitialized null");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.Point).CONST_CHAR, Bridge.cast(87, Bridge.Int), "Point.CONST_CHAR W");

            Bridge.get(Bridge.ClientTest.BasicCSharp.Point).statitIntNotInitialized = -1;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.Point).statitIntNotInitialized, -1, "Point.StatitIntNotInitialized -1");

            var i = Bridge.get(Bridge.ClientTest.BasicCSharp.Point).test3();
            Bridge.get(Bridge.Test.Assert).areEqual$1(i, 499, "i 499");
        }
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestVirtualMethods', {
    statics: {
        testB: function () {
            var a = new Bridge.ClientTest.BasicCSharp.TestVirtualMethods.A();

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(a), "Instance of A created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.test(), "A", "a.Test() = 'A'");

            var b = new Bridge.ClientTest.BasicCSharp.TestVirtualMethods.B();

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(b), "Instance of B created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.test(), "B", "b.Test() = 'B'");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.testA(), "A", "b.TestA() = 'A'");

            var c = new Bridge.ClientTest.BasicCSharp.TestVirtualMethods.B();

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(c), "Instance of C created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.test(), "B", "c.Test() = 'B'");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge266A', {
    statics: {
        test: function () {
            // Nothing gets written for Class1 in the output JavaScript due to the "new object()" argument.
            // If null is used instead (as commented-out) then it works as expected.
            // No compile error.
            return Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge266B).test("test", { });
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge272', {
    statics: {
        test: function (i) {
            return i;
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge381', {
    statics: {
        testUseCase: function () {
            var s1 = ["a", "b"].join(",");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s1, "a,b", "Join1");

            var animals = new Bridge.List$1(Bridge.ClientTest.BridgeIssues.Bridge381.Animal)();
            animals.add(new Bridge.ClientTest.BridgeIssues.Bridge381.Animal("Squirrel", "Rodent"));
            animals.add(new Bridge.ClientTest.BridgeIssues.Bridge381.Animal("Gray Wolf", "Carnivora"));
            animals.add(new Bridge.ClientTest.BridgeIssues.Bridge381.Animal("Capybara", "Rodent"));

            var s2 = Bridge.toArray(animals).join(" ");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s2, "Squirrel Gray Wolf Capybara", "Join2");

            var values = [null, "Cobb", 4189, 11434, 0.366];
            var s31 = values.join("|");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s31, "|Cobb|4189|11434|0.366", "Join31");

            values[0] = "";
            var s32 = values.join("|");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s32, "|Cobb|4189|11434|0.366", "Join32");


            var sArr = Bridge.Array.init(10, null);
            for (var i = 0; i < 10; i++) {
                sArr[i] = Bridge.String.format("{0,-3}", i * 5);
            }

            var s4 = sArr.join(":");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s4, "0  :5  :10 :15 :20 :25 :30 :35 :40 :45 ", "Join4");

            var val = ["apple", "orange", "grape", "pear"];
            var s5 = val.slice(1, 1 + 2).join(", ");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s5, "orange, grape", "Join5");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge383', {
    statics: {
        doSomething: function (person) {
            return person.getName();
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge472', {
    statics: {
        test: function () {
            var magic1 = new Bridge.List$1(String)();
            magic1.insert(magic1.getCount(), "first");
            magic1.insert(magic1.getCount(), "second");

            Bridge.get(Bridge.Test.Assert).areEqual$1(magic1.getItem(0), "first", "magic1[0]");
            Bridge.get(Bridge.Test.Assert).areEqual$1(magic1.getItem(1), "second", "magic1[1]");

            var magic2 = new Bridge.List$1(String)();
            magic2.insertRange(magic2.getCount(), ["first", "second"]);
            magic2.insertRange(magic2.getCount(), ["third", "fourth"]);

            Bridge.get(Bridge.Test.Assert).areEqual$1(magic2.getItem(0), "first", "magic1[0]");
            Bridge.get(Bridge.Test.Assert).areEqual$1(magic2.getItem(1), "second", "magic1[1]");
            Bridge.get(Bridge.Test.Assert).areEqual$1(magic2.getItem(2), "third", "magic1[2]");
            Bridge.get(Bridge.Test.Assert).areEqual$1(magic2.getItem(3), "fourth", "magic1[3]");

            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                var magic = new Bridge.List$1(String)();
                magic.insert(1, "first");
            }, "Insert at length + 1");

            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                var magic = new Bridge.List$1(String)();
                magic.insert(-1, "first");
            }, "Insert at -1");

            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                var magic = new Bridge.List$1(String)();
                magic.insertRange(1, ["first", "second"]);
            }, "InsertRange at length + 1");

            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                var magic = new Bridge.List$1(String)();
                magic.insertRange(-1, ["first", "second"]);
            }, "InsertRange at -1");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge479', {
    statics: {
        testUseCase: function () {
            var pair = new Bridge.KeyValuePair$2(Bridge.Int,String)(1, "value");
            Bridge.get(Bridge.Test.Assert).areEqual$1(pair.key, 1, "Bridge479 Key");
            Bridge.get(Bridge.Test.Assert).areEqual$1(pair.value, "value", "Bridge479 Value");
            Bridge.get(Bridge.Test.Assert).areEqual$1(pair.toString(), "[1, value]", "Bridge479 ToString");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge485', {
    statics: {
        testUseCase: function () {
            var list = Bridge.Linq.Enumerable.from([{ lastName: "", firstName: "" }]).skip(1).toList(Object);
            list.add({ lastName: "Ruth", firstName: "Babe" });
            list.add({ lastName: "Johnson", firstName: "Walter" });
            list.add({ lastName: "Cobb", firstName: "Ty" });
            list.add({ lastName: "Schmidt", firstName: "Mike" });

            var query = Bridge.Linq.Enumerable.from(list).where(function (p) {
                return p.lastName.length === 4;
            }).select(function (p) {
                return { lastName: p.lastName, firstName: p.firstName };
            });

            var s = JSON.stringify(query.toList(Object));

            Bridge.get(Bridge.Test.Assert).areEqual$1(s, "{\"items\":[{\"lastName\":\"Ruth\",\"firstName\":\"Babe\"},{\"lastName\":\"Cobb\",\"firstName\":\"Ty\"}]}", "#485");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge495', {
    statics: {
        testUseCase: function () {
            var root = document.getElementById("qunit-fixture");

            var button1 = document.createElement('button');
            button1.innerHTML = "Button 1";
            button1.id = "button1";
            button1.style.color = "green";

            root.appendChild(button1);

            var b1 = document.getElementById("button1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b1.style.color, "green", "b1.Style.Color green");

            var button2 = document.createElement('button');
            button2.innerHTML = "Button 2";
            button2.id = "button2";
            button2.style.backgroundColor = "yellow";

            root.appendChild(button2);

            var b2 = document.getElementById("button2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b2.style.backgroundColor, "yellow", "b2.Style.BackgroundColor HTMLColor.Yellow");

            var hexColor = "#FFEEAA";
            var divElement1 = document.createElement('div');
            divElement1.innerHTML = "Div 1";
            divElement1.id = "div1";
            divElement1.style.color = hexColor;

            root.appendChild(divElement1);

            var div1 = document.getElementById("div1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(div1.style.color, "rgb(255, 238, 170)", "div1.Style.Color " + hexColor);

        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge501', {
    statics: {
        testUseCase: function () {
            var list = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [7]
            ] );
            var z = JSON.stringify(list); // this is ok
            Bridge.get(Bridge.Test.Assert).areEqual$1(z, "{\"items\":[7]}", "List<int>");

            var b = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge501B(), [
                [1],
                [2]
            ] );
            var y = JSON.stringify(b); // wrong, missing items
            Bridge.get(Bridge.Test.Assert).areEqual$1(y, "{\"items\":[1,2]}", "Bridge501B");

            var a = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge501A(), [
                [7]
            ] ); // sine items is defined as member, push fails
            var x = JSON.stringify(a);
            Bridge.get(Bridge.Test.Assert).areEqual$1(x, "{\"items\":[7]}", "Bridge501A");

            var c = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge501A(), JSON.parse(x));
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.items$1, "12", "Bridge501A Parse c.Items");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getItem(0), 7, "Bridge501A Parse c[0]");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge502', {
    statics: {
        testUseCase: function () {
            var $t, $t1, $t2, $t3;
            var numbers = [1, 2, 3];

            var sum = 0;

            $t = Bridge.getEnumerator(numbers);
            while ($t.moveNext()) {
                var a = $t.getCurrent();
                sum = sum + a;
            }

            $t1 = Bridge.getEnumerator(numbers);
            while ($t1.moveNext()) {
                var a1 = $t1.getCurrent();
                sum = sum + a1;
            }

            $t2 = Bridge.getEnumerator(numbers);
            while ($t2.moveNext()) {
                var a2 = $t2.getCurrent();
                sum = sum + a2;
            }

            $t3 = Bridge.getEnumerator(numbers);
            while ($t3.moveNext()) {
                var a3 = $t3.getCurrent();
                sum = sum + a3;
            }

            Bridge.get(Bridge.Test.Assert).areEqual$1(sum, 24, "Bridge502 sum");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge503', {
    statics: {
        testUseCase: function () {
            var a = ["a", "b", "c"];
            var list = new Bridge.List$1(String)(a);

            list.addRange(a);

            Bridge.get(Bridge.Test.Assert).areEqual$1(a.length, 3, "Bridge503: array.Length is correct");
            Bridge.get(Bridge.Test.Assert).areEqual$1(list.getCount(), 6, "Bridge503: list.Count is correct");

            list.clear();

            Bridge.get(Bridge.Test.Assert).areEqual$1(a.length, 3, "Bridge503: array.Length is correct");
            Bridge.get(Bridge.Test.Assert).areEqual$1(list.getCount(), 0, "Bridge503: list.Count is correct");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge508', {
    statics: {
        count: 0,
        config: {
            properties: {
                QUnitAsyncDone: null
            }
        },
        testUseCase: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                result, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    for (;;) {
                        switch ($step) {
                            case 0: {
                                //TODO Async Bridge508.QUnitAsyncDone = assert.Async();
                                
                                $task1 = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).method1();
                                $step = 1;
                                $task1.continueWith($asyncBody, true);
                                return;
                            }
                            case 1: {
                                $taskResult1 = $task1.getResult();
                                result = $taskResult1;
                                
                                Bridge.get(Bridge.Test.Assert).areEqual$1(result, "A(0)A(1)B(0)B(1)B(2)", "#508 Method1");
                                
                                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).getQUnitAsyncDone()();
                                return;
                            }
                            default: {
                                return;
                            }
                        }
                    }
                }, arguments);

            $asyncBody();
        },
        method1: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $task2, 
                $taskResult2, 
                $task3, 
                $taskResult3, 
                $jumpFromFinally, 
                $returnTask = new Bridge.Task(), 
                $returnValue, 
                result, 
                i, 
                np, 
                np1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    result = "";
                                    
                                    i = 0;
                                    $task3 = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).initPage();
                                    $step = 1;
                                    $task3.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult3 = $task3.getResult();
                                    np = $taskResult3;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( Bridge.hasValue(np) ) {
                                        $step = 3;
                                        continue;
                                    }
                                    $step = 6;
                                    continue;
                                }
                                case 3: {
                                    result += Bridge.String.format("A({0})", i++);
                                }
                                case 4: {
                                    $task2 = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).nextPage();
                                    $step = 5;
                                    $task2.continueWith($asyncBody);
                                    return;
                                }
                                case 5: {
                                    $taskResult2 = $task2.getResult();
                                    np = $taskResult2;
                                    $step = 2;
                                    continue;
                                }
                                case 6: {
                                    
                                    Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).count = 0;
                                    i = 0;
                                    $task1 = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).initPage();
                                    $step = 7;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 7: {
                                    $taskResult1 = $task1.getResult();
                                    np1 = $taskResult1;
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    if ( Bridge.hasValue(np1) ) {
                                        $step = 9;
                                        continue;
                                    }
                                    $step = 11;
                                    continue;
                                }
                                case 9: {
                                    result += Bridge.String.format("B({0})", i++);
                                }
                                case 10: {
                                    np1 = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).nextPage1();
                                    $step = 8;
                                    continue;
                                }
                                case 11: {
                                    
                                    $returnTask.setResult(result);
                                    return;
                                }
                                default: {
                                    $returnTask.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($e1) {
                        $e1 = Bridge.Exception.create($e1);
                        $returnTask.setError($e1);
                    }
                }, arguments);

            $asyncBody();
            return $returnTask;
        },
        initPage: function () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $returnTask = new Bridge.Task(), 
                $returnValue, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $task1 = Bridge.Task.delay(0);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getResult();
                                    Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).count++;
                                    $returnTask.setResult(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).count < 2 ? { } : null);
                                    return;
                                }
                                default: {
                                    $returnTask.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($e1) {
                        $e1 = Bridge.Exception.create($e1);
                        $returnTask.setError($e1);
                    }
                }, arguments);

            $asyncBody();
            return $returnTask;
        },
        nextPage: function () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $returnTask = new Bridge.Task(), 
                $returnValue, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $task1 = Bridge.Task.delay(0);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getResult();
                                    Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).count++;
                                    $returnTask.setResult(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).count < 3 ? { } : null);
                                    return;
                                }
                                default: {
                                    $returnTask.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($e1) {
                        $e1 = Bridge.Exception.create($e1);
                        $returnTask.setError($e1);
                    }
                }, arguments);

            $asyncBody();
            return $returnTask;
        },
        nextPage1: function () {
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).count++;
            return Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).count < 4 ? { } : null;
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge514', {
    statics: {
        testUseCase: function () {
            var d1 = 5.43;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Int.sign(d1), 1, "Bridge514 Sign(double 5.43)");

            var d2 = -7.1;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Int.sign(d2), -1, "Bridge514 Sign(double -7.1)");
        },
        testRelated: function () {
            var d1 = Bridge.Decimal(5.43);
            Bridge.get(Bridge.Test.Assert).areEqual$1(d1.sign(), 1, "Bridge514 Sign(decimal 5.43)");

            var d2 = Bridge.Decimal(-7.1);
            Bridge.get(Bridge.Test.Assert).areEqual$1(d2.sign(), -1, "Bridge514 Sign(decimal -7.1)");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge520', {
    statics: {
        testUseCase: function () {
            var s = new Bridge.ClientTest.BridgeIssues.Bridge520.Source();
            s.fire();

            Bridge.get(Bridge.Test.Assert).areEqual$1(s.getCounter(), 1, "Bridge520 Counter");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge522', {
    statics: {
        testUseCase1: function () {
            var dc1 = new Bridge.ClientTest.BridgeIssues.Bridge522.DerivedClass1();
            dc1.addValue(5);

            Bridge.get(Bridge.Test.Assert).areEqual$1(dc1.getValues().getCount(), 1, "Bridge522 dc1.Count = 1");

            var dc2 = new Bridge.ClientTest.BridgeIssues.Bridge522.DerivedClass1();
            Bridge.get(Bridge.Test.Assert).areEqual$1(dc2.getValues().getCount(), 0, "Bridge522 dc2.Count = 0");
        },
        testUseCase2: function () {
            var dc1 = new Bridge.ClientTest.BridgeIssues.Bridge522.DerivedClass2();
            dc1.addValue(5);

            Bridge.get(Bridge.Test.Assert).areEqual$1(dc1.getValues().getCount(), 1, "Bridge522 dc1.Count = 1");

            var dc2 = new Bridge.ClientTest.BridgeIssues.Bridge522.DerivedClass2();
            Bridge.get(Bridge.Test.Assert).areEqual$1(dc2.getValues().getCount(), 0, "Bridge522 dc2.Count = 0");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge532', {
    statics: {
        testUseCase: function () {
            var list = new Bridge.List$1(Bridge.Int)([1, 2, 3, 4, 5, 6, 7, 8, 9]);

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(list.getRange(0, 2).toArray(), [1, 2], "Bridge532 (0, 2)");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(list.getRange(1, 2).toArray(), [2, 3], "Bridge532 (1, 2)");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(list.getRange(6, 3).toArray(), [7, 8, 9], "Bridge532 (6, 3)");

        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge538', {
    statics: {
        testUseCase: function () {
            var srcString = "123";
            var destString = "4";

            destString += String.fromCharCode(srcString.charCodeAt(2));

            Bridge.get(Bridge.Test.Assert).areEqual$1(destString, "43", "Bridge538 '43'");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge544', {
    statics: {
        testUseCase: function () {
            var o = Bridge.merge(new Boolean(), JSON.parse("true"));
            Bridge.get(Bridge.Test.Assert).areEqual$1(o, true, "Bridge544 bool");
        },
        testRelated: function () {
            var i = Bridge.merge(new Bridge.Int(), JSON.parse("25"));
            Bridge.get(Bridge.Test.Assert).areEqual$1(i, 25, "Bridge544 int");

            var dbl = Bridge.merge(new Number(), JSON.parse("26.1"));
            Bridge.get(Bridge.Test.Assert).areEqual$1(dbl, 26.1, "Bridge544 double");

            var d = Bridge.merge(new Bridge.Decimal(), JSON.parse("27.2"));
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(d, 27.2, "Bridge544 decimal");

            var s = Bridge.merge(new String(), JSON.parse("\"Some string\""));
            Bridge.get(Bridge.Test.Assert).areEqual$1(s, "Some string", "Bridge544 string");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge546', {
    statics: {
        testUseCase: function () {
            var date = new Date(2015, 1 - 1, 1, 0, 0, 0, 0);

            var i = 1;
            var d = new Date(date.valueOf() + Math.round((10 + 20 * i) * 6e4));

            Bridge.get(Bridge.Test.Assert).areEqual$1(d.getMinutes(), 30, "Bridge546 30 minutes");
        },
        testRelated: function () {
            var date = new Date(2015, 1 - 1, 1, 0, 0, 0, 0);
            var span1 = new Bridge.TimeSpan(0, 15, 0);
            var span2 = new Bridge.TimeSpan(0, 7, 0);
            var i = 1;

            var d1 = new Date(new Date(date - new Date((span1).ticks / 10000)) - new Date((span2).ticks / 10000));
            Bridge.get(Bridge.Test.Assert).areEqual$1(d1.getMinutes(), 38, "Bridge546 d1");

            var d2 = new Date(new Date(date.getTime() + ((span1).ticks / 10000)).getTime() + ((span2).ticks / 10000));
            Bridge.get(Bridge.Test.Assert).areEqual$1(d2.getMinutes(), 22, "Bridge546 d2");

            var d3 = new Date(date.valueOf() + Math.round((10 + 20 * i) * 864e5));
            Bridge.get(Bridge.Test.Assert).areEqual$1(d3.getDate(), 31, "Bridge546 d3");

            var d4 = new Date(date.valueOf() + Math.round((10 + 20 * i) * 36e5));
            Bridge.get(Bridge.Test.Assert).areEqual$1(d4.getHours(), 6, "Bridge546 d4");

            var d5 = new Date(date.valueOf() + Math.round((12 + 20 * i) * 1e3));
            Bridge.get(Bridge.Test.Assert).areEqual$1(d5.getSeconds(), 32, "Bridge546 d5");
        }
    }
});

/** @namespace Bridge.ClientTest.BridgeIssues */

/**
 * This test will check whether TypedArray types are emitted to JavaScript
 the right way. [#548]
 *
 * @public
 * @class Bridge.ClientTest.BridgeIssues.Bridge548
 */
Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge548', {
    statics: {
        testUseCase: function () {
            var isSpecialTypeName = Bridge.get(Bridge.ClientTest.Utilities.BrowserHelper).isPhantomJs();

            var v1 = new Float32Array(1);
            var thisType = "Float32Array";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v1), thisType + " created");
            var thisName = isSpecialTypeName ? "Object" : thisType;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(v1), thisName, thisType + " class name");

            var v2 = new Float64Array(1);
            thisType = "Float64Array";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v2), thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(v2), thisName, thisType + " class name");

            var v3 = new Int16Array(1);
            thisType = "Int16Array";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v3), thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(v3), thisName, thisType + " class name");

            var v4 = new Int32Array(1);
            thisType = "Int32Array";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v4), thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(v4), thisName, thisType + " class name");

            var v5 = new Int8Array(1);
            thisType = "Int8Array";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v5), thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(v5), thisName, thisType + " class name");

            var v6 = new Uint16Array(1);
            thisType = "Uint16Array";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v6), thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(v6), thisName, thisType + " class name");

            var v7 = new Uint32Array(1);
            thisType = "Uint32Array";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v7), thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(v7), thisName, thisType + " class name");

            var v8 = new Uint8Array(1);
            thisType = "Uint8Array";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v8), thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(v8), thisName, thisType + " class name");

            var v9 = new Uint8ClampedArray(1);
            thisType = "Uint8ClampedArray";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v9), thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(v9), thisName, thisType + " class name");
        }
    }
});

/**
 * This test will check whether TypedArray types correctly inherit from
 the prototype common methods and fields. [#549]
 *
 * @public
 * @class Bridge.ClientTest.BridgeIssues.Bridge549
 */
Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge549', {
    statics: {
        testUseCase: function () {
            var isToStringToTypeNameLogic = !Bridge.get(Bridge.ClientTest.Utilities.BrowserHelper).isChrome();

            var v1 = new Float32Array(10);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v1), "Float32Array created");

            v1[1] = 11;
            v1[5] = 5;
            v1[9] = 99;
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1[1], 11, "Float32Array indexier works 1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1[9], 99, "Float32Array indexier works 9");

            // Check just a select number of references inside the Prototype inheritance.
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v1.buffer), "Float32Array Buffer");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.byteLength, 40, "Float32Array ByteLength");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.byteOffset, 0, "Float32Array ByteOffset");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.length, 10, "Float32Array Length");

            /* 
             * Commented out. Reason: Only Firefox implements them.
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
            var mA = v1.Join();
            v1.Reverse();
            var mB = v1.Slice();
            var mC = v1.Sort();
             */

            var expectedToStringFloat32Array1 = isToStringToTypeNameLogic ? "[object Float32Array]" : "0,11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.toLocaleString(), expectedToStringFloat32Array1, "Float32Array ToLocaleString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.toString(), expectedToStringFloat32Array1, "Float32Array ToString");

            // Some browsers do not support SubArray() with no parameters.
            // At least 'begin' must be provided.
            var subArray11 = v1.subarray(1);
            var expectedToStringFloat32Array2 = isToStringToTypeNameLogic ? "[object Float32Array]" : "11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray11), "Float32Array SubArray1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray11.length, 9, "Float32Array SubArray1 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray11.toString(), expectedToStringFloat32Array2, "Float32Array SubArray1 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray11.byteOffset, 4, "Float32Array SubArray1 ByteOffset");

            var subArray12 = subArray11.subarray(2, 6);
            var expectedToStringFloat32Array3 = isToStringToTypeNameLogic ? "[object Float32Array]" : "0,0,5,0";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray12), "Float32Array SubArray2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray12.length, 4, "Float32Array SubArray2 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray12.toString(), expectedToStringFloat32Array3, "Float32Array SubArray2 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray12.byteOffset, 12, "Float32Array SubArray2 ByteOffset");

            var v2 = new Float64Array(10);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v2), "Float64Array created");

            v2[1] = 11;
            v2[5] = 5;
            v2[9] = 99;
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2[1], 11, "Float64Array indexier works 1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2[9], 99, "Float64Array indexier works 9");

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v2.buffer), "Float64Array Buffer");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.byteLength, 80, "Float64Array ByteLength");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.byteOffset, 0, "Float64Array ByteOffset");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.length, 10, "Float64Array Length");

            var expectedToStringFloat64Array1 = isToStringToTypeNameLogic ? "[object Float64Array]" : "0,11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.toLocaleString(), expectedToStringFloat64Array1, "Float64Array ToLocaleString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.toString(), expectedToStringFloat64Array1, "Float64Array ToString");

            var subArray21 = v2.subarray(1);
            var expectedToStringFloat64Array2 = isToStringToTypeNameLogic ? "[object Float64Array]" : "11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray21), "Float64Array SubArray1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray21.length, 9, "Float64Array SubArray1 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray21.toString(), expectedToStringFloat64Array2, "Float64Array SubArray1 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray21.byteOffset, 8, "Float64Array SubArray1 ByteOffset");

            var subArray22 = subArray21.subarray(2, 6);
            var expectedToStringFloat64Array3 = isToStringToTypeNameLogic ? "[object Float64Array]" : "0,0,5,0";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray22), "Float64Array SubArray2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray22.length, 4, "Float64Array SubArray2 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray22.toString(), expectedToStringFloat64Array3, "Float64Array SubArray2 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray22.byteOffset, 24, "Float64Array SubArray2 ByteOffset");

            var v3 = new Int16Array(10);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v3), "Int16Array created");

            v3[1] = 11;
            v3[5] = 5;
            v3[9] = 99;
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3[1], 11, "Int16Array indexier works 1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3[9], 99, "Int16Array indexier works 9");

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v3.buffer), "Int16Array Buffer");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3.byteLength, 20, "Int16Array ByteLength");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3.byteOffset, 0, "Int16Array ByteOffset");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3.length, 10, "Int16Array Length");

            var expectedToStringInt16Array1 = isToStringToTypeNameLogic ? "[object Int16Array]" : "0,11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3.toLocaleString(), expectedToStringInt16Array1, "Int16Array ToLocaleString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3.toString(), expectedToStringInt16Array1, "Int16Array ToString");

            var subArray31 = v3.subarray(1);
            var expectedToStringInt16Array2 = isToStringToTypeNameLogic ? "[object Int16Array]" : "11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray31), "Int16Array SubArray1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray31.length, 9, "Int16Array SubArray1 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray31.toString(), expectedToStringInt16Array2, "Int16Array SubArray1 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray31.byteOffset, 2, "Int16Array SubArray1 ByteOffset");

            var subArray32 = subArray31.subarray(2, 6);
            var expectedToStringInt16Array3 = isToStringToTypeNameLogic ? "[object Int16Array]" : "0,0,5,0";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray32), "Int16Array SubArray2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray32.length, 4, "Int16Array SubArray2 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray32.toString(), expectedToStringInt16Array3, "Int16Array SubArray2 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray32.byteOffset, 6, "Int16Array SubArray2 ByteOffset");

            var v4 = new Int32Array(10);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v4), "Int32Array created");

            v4[1] = 11;
            v4[5] = 5;
            v4[9] = 99;
            Bridge.get(Bridge.Test.Assert).areEqual$1(v4[1], 11, "Int32Array indexier works 1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v4[9], 99, "Int32Array indexier works 9");

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v4.buffer), "Int32Array Buffer");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v4.byteLength, 40, "Int32Array ByteLength");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v4.byteOffset, 0, "Int32Array ByteOffset");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v4.length, 10, "Int32Array Length");

            var expectedToStringInt32Array1 = isToStringToTypeNameLogic ? "[object Int32Array]" : "0,11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).areEqual$1(v4.toLocaleString(), expectedToStringInt32Array1, "Int32Array ToLocaleString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v4.toString(), expectedToStringInt32Array1, "Int32Array ToString");

            var subArray41 = v4.subarray(1);
            var expectedToStringInt32Array2 = isToStringToTypeNameLogic ? "[object Int32Array]" : "11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray41), "Int32Array SubArray1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray41.length, 9, "Int32Array SubArray1 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray41.toString(), expectedToStringInt32Array2, "Int32Array SubArray1 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray41.byteOffset, 4, "Int32Array SubArray1 ByteOffset");

            var subArray42 = subArray41.subarray(2, 6);
            var expectedToStringInt32Array3 = isToStringToTypeNameLogic ? "[object Int32Array]" : "0,0,5,0";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray42), "Int32Array SubArray2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray42.length, 4, "Int32Array SubArray2 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray42.toString(), expectedToStringInt32Array3, "Int32Array SubArray2 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray42.byteOffset, 12, "Int32Array SubArray2 ByteOffset");

            var v5 = new Int8Array(10);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v5), "Int8Array created");

            v5[1] = 11;
            v5[5] = 5;
            v5[9] = 99;
            Bridge.get(Bridge.Test.Assert).areEqual$1(v5[1], 11, "Int8Array indexier works 1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v5[9], 99, "Int8Array indexier works 9");

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v5.buffer), "Int8Array Buffer");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v5.byteLength, 10, "Int8Array ByteLength");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v5.byteOffset, 0, "Int8Array ByteOffset");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v5.length, 10, "Int8Array Length");

            var expectedToStringInt8Array1 = isToStringToTypeNameLogic ? "[object Int8Array]" : "0,11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).areEqual$1(v5.toLocaleString(), expectedToStringInt8Array1, "Int8Array ToLocaleString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v5.toString(), expectedToStringInt8Array1, "Int8Array ToString");

            var subArray51 = v5.subarray(1);
            var expectedToStringInt8Array2 = isToStringToTypeNameLogic ? "[object Int8Array]" : "11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray51), "Int8Array SubArray1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray51.length, 9, "Int8Array SubArray1 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray51.toString(), expectedToStringInt8Array2, "Int8Array SubArray1 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray51.byteOffset, 1, "Int8Array SubArray1 ByteOffset");

            var subArray52 = subArray51.subarray(2, 6);
            var expectedToStringInt8Array3 = isToStringToTypeNameLogic ? "[object Int8Array]" : "0,0,5,0";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray52), "Int8Array SubArray2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray52.length, 4, "Int8Array SubArray2 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray52.toString(), expectedToStringInt8Array3, "Int8Array SubArray2 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray52.byteOffset, 3, "Int8Array SubArray2 ByteOffset");

            var v6 = new Uint16Array(10);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v6), "Uint16Array created");

            v6[1] = 11;
            v6[5] = 5;
            v6[9] = 99;
            Bridge.get(Bridge.Test.Assert).areEqual$1(v6[1], 11, "Uint16Array indexier works 1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v6[9], 99, "Uint16Array indexier works 9");

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v6.buffer), "Uint16Array Buffer");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v6.byteLength, 20, "Uint16Array ByteLength");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v6.byteOffset, 0, "Uint16Array ByteOffset");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v6.length, 10, "Uint16Array Length");

            var expectedToStringUint16Array1 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "0,11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).areEqual$1(v6.toLocaleString(), expectedToStringUint16Array1, "Uint16Array ToLocaleString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v6.toString(), expectedToStringUint16Array1, "Uint16Array ToString");

            var subArray61 = v6.subarray(1);
            var expectedToStringUint16Array2 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray61), "Uint16Array SubArray1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray61.length, 9, "Uint16Array SubArray1 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray61.toString(), expectedToStringUint16Array2, "Uint16Array SubArray1 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray61.byteOffset, 2, "Uint16Array SubArray1 ByteOffset");

            var subArray62 = subArray61.subarray(2, 6);
            var expectedToStringUint16Array3 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "0,0,5,0";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray62), "Uint16Array SubArray2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray62.length, 4, "Uint16Array SubArray2 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray62.toString(), expectedToStringUint16Array3, "Uint16Array SubArray2 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray62.byteOffset, 6, "Uint16Array SubArray2 ByteOffset");

            var v7 = new Uint32Array(10);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v7), "Uint32Array created");

            v7[1] = 11;
            v7[5] = 5;
            v7[9] = 99;
            Bridge.get(Bridge.Test.Assert).areEqual$1(v7[1], 11, "Uint32Array indexier works 1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v7[9], 99, "Uint32Array indexier works 9");

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v7.buffer), "Uint32Array Buffer");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v7.byteLength, 40, "Uint32Array ByteLength");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v7.byteOffset, 0, "Uint32Array ByteOffset");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v7.length, 10, "Uint32Array Length");

            var expectedToStringUint32Array1 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "0,11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).areEqual$1(v7.toLocaleString(), expectedToStringUint32Array1, "Uint32Array ToLocaleString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v7.toString(), expectedToStringUint32Array1, "Uint32Array ToString");

            var subArray71 = v7.subarray(1);
            var expectedToStringUint32Array2 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray71), "Uint32Array SubArray1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray71.length, 9, "Uint32Array SubArray1 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray71.toString(), expectedToStringUint32Array2, "Uint32Array SubArray1 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray71.byteOffset, 4, "Uint32Array SubArray1 ByteOffset");

            var subArray72 = subArray71.subarray(2, 6);
            var expectedToStringUint32Array3 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "0,0,5,0";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray72), "Uint32Array SubArray2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray72.length, 4, "Uint32Array SubArray2 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray72.toString(), expectedToStringUint32Array3, "Uint32Array SubArray2 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray72.byteOffset, 12, "Uint32Array SubArray2 ByteOffset");

            var v8 = new Uint8Array(10);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v8), "Uint8Array created");

            v8[1] = 11;
            v8[5] = 5;
            v8[9] = 99;
            Bridge.get(Bridge.Test.Assert).areEqual$1(v8[1], 11, "Uint8Array indexier works 1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v8[9], 99, "Uint8Array indexier works 9");

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v8.buffer), "Uint8Array Buffer");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v8.byteLength, 10, "Uint8Array ByteLength");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v8.byteOffset, 0, "Uint8Array ByteOffset");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v8.length, 10, "Uint8Array Length");

            var expectedToStringUint8Array1 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "0,11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).areEqual$1(v8.toLocaleString(), expectedToStringUint8Array1, "Uint8Array ToLocaleString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v8.toString(), expectedToStringUint8Array1, "Uint8Array ToString");

            var subArray81 = v8.subarray(1);
            var expectedToStringUint8Array2 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray81), "Uint8Array SubArray1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray81.length, 9, "Uint8Array SubArray1 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray81.toString(), expectedToStringUint8Array2, "Uint8Array SubArray1 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray81.byteOffset, 1, "Uint8Array SubArray1 ByteOffset");

            var subArray82 = subArray81.subarray(2, 6);
            var expectedToStringUint8Array3 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "0,0,5,0";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray82), "Uint8Array SubArray2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray82.length, 4, "Uint8Array SubArray2 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray82.toString(), expectedToStringUint8Array3, "Uint8Array SubArray2 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray82.byteOffset, 3, "Uint8Array SubArray2 ByteOffset");

            var v9 = new Uint8ClampedArray(10);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v9), "Uint8ClampedArray created");

            v9[1] = 11;
            v9[5] = 5;
            v9[9] = 99;
            Bridge.get(Bridge.Test.Assert).areEqual$1(v9[1], 11, "Uint8ClampedArray indexier works 1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v9[9], 99, "Uint8ClampedArray indexier works 9");

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v9.buffer), "Uint8ClampedArray Buffer");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v9.byteLength, 10, "Uint8ClampedArray ByteLength");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v9.byteOffset, 0, "Uint8ClampedArray ByteOffset");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v9.length, 10, "Uint8ClampedArray Length");

            var expectedToStringUint8ClampedArray1 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "0,11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).areEqual$1(v9.toLocaleString(), expectedToStringUint8ClampedArray1, "Uint8ClampedArray ToLocaleString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v9.toString(), expectedToStringUint8ClampedArray1, "Uint8ClampedArray ToString");

            var subArray91 = v9.subarray(1);
            var expectedToStringUint8ClampedArray2 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "11,0,0,0,5,0,0,0,99";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray91), "Uint8ClampedArray SubArray1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray91.length, 9, "Uint8ClampedArray SubArray1 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray91.toString(), expectedToStringUint8ClampedArray2, "Uint8ClampedArray SubArray1 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray91.byteOffset, 1, "Uint8ClampedArray SubArray1 ByteOffset");

            var subArray92 = subArray91.subarray(2, 6);
            var expectedToStringUint8ClampedArray3 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "0,0,5,0";
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(subArray92), "Uint8ClampedArray SubArray2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray92.length, 4, "Uint8ClampedArray SubArray2 Length");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray92.toString(), expectedToStringUint8ClampedArray3, "Uint8ClampedArray SubArray2 ToString");
            Bridge.get(Bridge.Test.Assert).areEqual$1(subArray92.byteOffset, 3, "Uint8ClampedArray SubArray2 ByteOffset");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge550', {
    statics: {
        testMethod: function (array, name) {
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(array), Bridge.String.format("ArrayBufferView is an alias of {0}", name));
        },
        testUseCase: function () {
            var array1 = new Int8Array(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge550).testMethod(array1, "Int8Array");

            var array2 = new Uint8Array(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge550).testMethod(array2, "Uint8Array");

            var array3 = new Uint8ClampedArray(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge550).testMethod(array3, "Uint8ClampedArray");

            var array4 = new Int16Array(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge550).testMethod(array4, "Int16Array");

            var array5 = new Uint16Array(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge550).testMethod(array5, "Uint16Array");

            var array6 = new Int32Array(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge550).testMethod(array6, "Int32Array");

            var array7 = new Uint32Array(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge550).testMethod(array7, "Uint32Array");

            var array8 = new Float32Array(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge550).testMethod(array8, "Float32Array");

            var array9 = new Float64Array(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge550).testMethod(array9, "Float64Array");

            var array10 = new DataView(array9.buffer);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge550).testMethod(array10, "DataView");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge554', {
    statics: {
        testUseCase: function () {
            var s = "0123456789";

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.remove(s, 5), "01234", "Remove(5)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.remove(s, 10), "0123456789", "Remove(10)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.remove(s, 1, 2), "03456789", "Remove(1, 2)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.remove(s, 1, 10), "0", "Remove(1, 10)");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge555', {
    statics: {
        testUseCase: function () {
            var s = "0123456789";

            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substring(-1), "0123456789", "JsSubstring(-1)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substring(5), "56789", "JsSubstring(5)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substring(10), "", "JsSubstring(10)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substring(1, 2), "1", "JsSubstring(1, 2)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substring(1, 10), "123456789", "JsSubstring(1, 10)");

            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substr(-1), "9", "Substring(-1)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substr(5), "56789", "Substring(5)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substr(10), "", "Substring(10)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substr(1, 2), "12", "Substring(1, 2)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substr(1, 10), "123456789", "Substring(1, 10)");

            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substr(-1), "9", "Substr(-1)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substr(5), "56789", "Substr(5)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substr(10), "", "Substr(10)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substr(1, 2), "12", "Substr(1, 2)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s.substr(1, 10), "123456789", "Substr(1, 10)");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge558', {
    statics: {
        testUseCase: function () {
            var a = new Bridge.ClientTest.BridgeIssues.Bridge558A();
            var b = new Bridge.ClientTest.BridgeIssues.Bridge558B();

            Bridge.get(Bridge.Test.Assert).areEqual$1(a.zz(1), 1, "Bridge558 a.zz int");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.zz$1(""), 2, "Bridge558 a.zz string");

            Bridge.get(Bridge.Test.Assert).areEqual$1(b.zz(1), 1, "Bridge558 b.zz int");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.zz$1(""), 2, "Bridge558 b.zz string");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge559', {
    statics: {
        testUseCase1: function () {
            var b = new Bridge.ClientTest.BridgeIssues.Bridge559B1("constructor$1", 1);

            Bridge.get(Bridge.Test.Assert).areEqual$1(b.result, " -> Bridge559A1 -> Bridge559A1$1 -> Bridge559B1$1", "Bridge559 TestUseCase1");
        },
        testUseCase2: function () {
            var b = new Bridge.ClientTest.BridgeIssues.Bridge559B2("constructor$1", 1);

            Bridge.get(Bridge.Test.Assert).areEqual$1(b.result, " ClassA ClassA$1 ClassB$1", "Bridge559 TestUseCase2");
        },
        testUseCase3: function () {
            var a = new Bridge.ClientTest.BridgeIssues.Bridge559A3("constructor", 1);
            var b = new Bridge.ClientTest.BridgeIssues.Bridge559A3("constructor", 2);

            var r = a.getData() + "|" + b.getData();
            Bridge.get(Bridge.Test.Assert).areEqual$1(r, "1|2", "Bridge559 TestUseCase3");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge563', {
    statics: {
        tesForeach: function () {
            var $t, $t1, $t2, $t3;
            var keys = ["1", "2", "3"];
            var handlers = Bridge.Array.init(3, null);
            var i = 0;
            var result = "";

            $t = Bridge.getEnumerator(keys);
            while ($t.moveNext()) {
                (function () {
                    var itm = $t.getCurrent();
                    handlers[i++] = function () {
                        result += itm;
                    };
                }).call(this);
            }

            $t1 = Bridge.getEnumerator(handlers);
            while ($t1.moveNext()) {
                var handler = $t1.getCurrent();
                handler();
            }

            Bridge.get(Bridge.Test.Assert).areEqual$1(result, "123", "Bridge563 No block foreach loop");

            i = 0;
            result = "";

            $t2 = Bridge.getEnumerator(keys);
            while ($t2.moveNext()) {
                (function () {
                    var itm1 = $t2.getCurrent();
                    handlers[i++] = function () {
                        result += itm1;
                    };
                }).call(this);
            }

            $t3 = Bridge.getEnumerator(handlers);
            while ($t3.moveNext()) {
                var handler1 = $t3.getCurrent();
                handler1();
            }

            Bridge.get(Bridge.Test.Assert).areEqual$1(result, "123", "Bridge563 block foreach loop");
        },
        tesFor: function () {
            var $t;
            var keys = ["1", "2", "3"];
            var handlers = Bridge.Array.init(3, null);
            var i = 0;
            var result = "";

            for (var j = 0; j < keys.length; j++) {
                (function () {
                    var itm = keys[j];
                    handlers[i++] = function () {
                        result += itm;
                    };
                }).call(this);
            }

            $t = Bridge.getEnumerator(handlers);
            while ($t.moveNext()) {
                var handler = $t.getCurrent();
                handler();
            }

            Bridge.get(Bridge.Test.Assert).areEqual$1(result, "123", "Bridge563 For loop");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge565', {
    statics: {
        testUseCase: function () {
            var t1 = new Function();
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(t1), "#565 t1");

            var t2 = new Object();
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(t2), "#565 t2");

            var t3 = new Object();
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.getType(t3) === Object, "#565 t3");

            var t4 = new Object();
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.getType(t4) === Object, "#565 t4");

            var t5 = new Object();
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(t5), "#565 t5");

            var t6 = new Object();
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.getType(t6) === Object, "#565 t6");

            var t7 = new Object();
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.getType(t7) === Object, "#565 t7");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge566', {
    statics: {
        testUseCase: function () {
            var ted = new Bridge.ClientTest.BridgeIssues.Bridge566B();
            Bridge.get(Bridge.Test.Assert).areEqual$1(ted.getData(), "Ted", "#566 Ted");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge572', {
    statics: {
        testUseCase: function () {
            var d1 = new Bridge.Dictionary$2(Bridge.Int,String)();

            var d = Bridge.as(d1, Bridge.IDictionary$2(Bridge.Int,String));

            d.add(1, "One");
            d.add(2, "Two");

            Bridge.get(Bridge.Test.Assert).areEqual$1(d.getItem(1), "One", "#572 getItem One");
            Bridge.get(Bridge.Test.Assert).areEqual$1(d.getItem(2), "Two", "#572 getItem Two");

            d.setItem(1, "New one");
            d.setItem(2, "New two");

            Bridge.get(Bridge.Test.Assert).areEqual$1(d.getItem(1), "New one", "#572 setItem New one");
            Bridge.get(Bridge.Test.Assert).areEqual$1(d.getItem(2), "New two", "#572 setItem New two");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge577', {
    statics: {
        someMethodA: function (j) {
            return new Bridge.ClientTest.BridgeIssues.Bridge577.Bridge577UnitA();
        },
        someMethodB: function (j) {
            var v = new Bridge.ClientTest.BridgeIssues.Bridge577.Bridge577UnitB();
            v.setNumber(j);

            return v.$clone();
        },
        testUseCase: function () {
            var a = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge577).someMethodA(1);
            Bridge.get(Bridge.Test.Assert).notNull$1(a, "#577 Bridge577UnitA created");

            var b = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge577).someMethodB(7);
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getNumber(), 7, "#577 Bridge577UnitB created");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge578', {
    statics: {
        testUseCase: function () {
            var s = "ab|abc&ab&abc|de&ef&";

            var r = Bridge.String.split(s, [124, 38].map(function(i) {{ return String.fromCharCode(i); }}));
            var expected = ["ab", "abc", "ab", "abc", "de", "ef", ""];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(r, expected, "#578 Split(params char[] separator)");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge580', {
    statics: {
        testUseCase: function () {
            var arrs = ["s1", "s2"];

            var intIndex;

            var dst = Bridge.Array.init(2, null);
            intIndex = 0;
            Bridge.Array.copy(arrs, intIndex, dst, 0, arrs.length - intIndex);

            Bridge.get(Bridge.Test.Assert).areEqual$1(dst.length, 2, "Bridge580 Length Int");
            Bridge.get(Bridge.Test.Assert).areEqual$1(dst[0], arrs[0], "Bridge580 0 Int");
            Bridge.get(Bridge.Test.Assert).areEqual$1(dst[1], arrs[1], "Bridge580 1 Int");

            dst = Bridge.Array.init(1, null);
            intIndex = 1;
            Bridge.Array.copy(arrs, intIndex, dst, 0, arrs.length - intIndex);

            Bridge.get(Bridge.Test.Assert).areEqual$1(dst.length, 1, "Bridge580 Length 1 Int");
            Bridge.get(Bridge.Test.Assert).areEqual$1(dst[0], arrs[1], "Bridge580 1_1 Int");

            var longIndex;

            dst = Bridge.Array.init(2, null);
            longIndex = 0;
            Bridge.Array.copy(arrs, longIndex, dst, 0, arrs.length - longIndex);

            Bridge.get(Bridge.Test.Assert).areEqual$1(dst.length, 2, "Bridge580 Length Long");
            Bridge.get(Bridge.Test.Assert).areEqual$1(dst[0], arrs[0], "Bridge580 0 Long");
            Bridge.get(Bridge.Test.Assert).areEqual$1(dst[1], arrs[1], "Bridge580 1 Long");

            dst = Bridge.Array.init(1, null);
            longIndex = 1;
            Bridge.Array.copy(arrs, longIndex, dst, 0, arrs.length - longIndex);

            Bridge.get(Bridge.Test.Assert).areEqual$1(dst.length, 1, "Bridge580 Length 1 Long");
            Bridge.get(Bridge.Test.Assert).areEqual$1(dst[0], arrs[1], "Bridge580 1_1 Long");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge582', {
    statics: {
        testAddTimeSpan: function () {
            var today = new Date(2006, 1 - 1, 1);
            var duration = new Bridge.TimeSpan(36, 0, 0, 0);
            var answer = new Date((today).getTime() + ((duration).ticks / 10000));

            Bridge.get(Bridge.Test.Assert).areEqual$1(answer.getFullYear(), 2006, "Bridge582 TestAddTimeSpan Year");
            Bridge.get(Bridge.Test.Assert).areEqual$1((answer.getMonth() + 1), 2, "Bridge582 TestAddTimeSpan Month");
            Bridge.get(Bridge.Test.Assert).areEqual$1(answer.getDate(), 6, "Bridge582 TestAddTimeSpan Day");
            Bridge.get(Bridge.Test.Assert).areEqual$1(answer.getHours(), 0, "Bridge582 TestAddTimeSpan Hours");
            Bridge.get(Bridge.Test.Assert).areEqual$1(answer.getMinutes(), 0, "Bridge582 TestAddTimeSpan Minutes");
            Bridge.get(Bridge.Test.Assert).areEqual$1(answer.getSeconds(), 0, "Bridge582 TestAddTimeSpan Seconds");
        },
        testAddTicks: function () {
            var dt = new Date(2001, 1 - 1, 1);
            dt = new Date((dt).getTime() + ((20000000) / 10000));

            Bridge.get(Bridge.Test.Assert).areEqual$1(dt.getFullYear(), 2001, "Bridge582 TestAddTicks Year");
            Bridge.get(Bridge.Test.Assert).areEqual$1((dt.getMonth() + 1), 1, "Bridge582 TestAddTicks Month");
            Bridge.get(Bridge.Test.Assert).areEqual$1(dt.getDate(), 1, "Bridge582 TestAddTicks Day");
            Bridge.get(Bridge.Test.Assert).areEqual$1(dt.getHours(), 0, "Bridge582 TestAddTicks Hour");
            Bridge.get(Bridge.Test.Assert).areEqual$1(dt.getMinutes(), 0, "Bridge582 TestAddTicks Minute");
            Bridge.get(Bridge.Test.Assert).areEqual$1(dt.getSeconds(), 2, "Bridge582 TestAddTicks Second");
        },
        testTicks: function () {
            var centuryBegin = new Date(2001, 1 - 1, 1);
            var currentDate = new Date(2007, 12 - 1, 14, 15, 23);
            var elapsedTicks = (currentDate.getTime() * 10000) - (centuryBegin.getTime() * 10000);
            var elapsedSpan = new Bridge.TimeSpan(elapsedTicks);

            Bridge.get(Bridge.Test.Assert).areEqual$1(elapsedTicks, 2193385800000000, "Bridge582 TestTicks ticks");
            Bridge.get(Bridge.Test.Assert).areEqual$1(elapsedSpan.getTotalSeconds(), 219338580, "Bridge582 TestTicks seconds");
            Bridge.get(Bridge.Test.Assert).areEqual$1(elapsedSpan.getTotalMinutes(), 3655643, "Bridge582 TestTicks minutes");
            Bridge.get(Bridge.Test.Assert).areEqual$1(elapsedSpan.getDays(), 2538, "Bridge582 TestTicks days");
            Bridge.get(Bridge.Test.Assert).areEqual$1(elapsedSpan.getHours(), 15, "Bridge582 TestTicks hours");
            Bridge.get(Bridge.Test.Assert).areEqual$1(elapsedSpan.getMinutes(), 23, "Bridge582 TestTicks minutes");
            Bridge.get(Bridge.Test.Assert).areEqual$1(elapsedSpan.getSeconds(), 0, "Bridge582 TestTicks minutes");
        },
        testSubtractTimeSpan: function () {
            var date1 = new Date(Date.UTC(1996, 6 - 1, 3, 22, 15, 0));
            var date2 = new Date(Date.UTC(1996, 12 - 1, 6, 13, 2, 0));
            var date3 = new Date(Date.UTC(1996, 10 - 1, 12, 8, 42, 0));

            var diff1 = new Bridge.TimeSpan((date2 - date1) * 10000);
            Bridge.get(Bridge.Test.Assert).true$1(diff1.equalsT(new Bridge.TimeSpan(185, 14, 47, 0)), "Bridge582 TestSubtractTimeSpan diff1");

            var date4 = new Date(date3 - new Date((diff1).ticks / 10000));
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.equalsT(date4, new Date(Date.UTC(1996, 4 - 1, 9, 17, 55, 0))), "Bridge582 TestSubtractTimeSpan date4");

            var diff2 = new Bridge.TimeSpan((date2 - date3) * 10000);
            Bridge.get(Bridge.Test.Assert).true$1(diff2.equalsT(new Bridge.TimeSpan(55, 4, 20, 0)), "Bridge582 TestSubtractTimeSpan diff2");

            var date5 = new Date(date1 - new Date((diff2).ticks / 10000));
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.equalsT(date5, new Date(Date.UTC(1996, 4 - 1, 9, 17, 55, 0))), "Bridge582 TestSubtractTimeSpan date5");
        },
        testTimeOfDay: function () {
            var date = new Date(2013, 9 - 1, 14, 9, 28, 0);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.equalsT(new Date(date.getFullYear(), date.getMonth(), date.getDate()), new Date(2013, 9 - 1, 14)), "Bridge582 TestTimeOfDay Date 2013, 9, 14, 9, 28, 0");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Date.timeOfDay(date).equalsT(new Bridge.TimeSpan(9, 28, 0)), "Bridge582 TestTimeOfDay TimeOfDay 2013, 9, 14, 9, 28, 0");

            date = new Date(2011, 5 - 1, 28, 10, 35, 0);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.equalsT(new Date(date.getFullYear(), date.getMonth(), date.getDate()), new Date(2011, 5 - 1, 28)), "Bridge582 TestTimeOfDay Date 2011, 5, 28, 10, 35, 0");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Date.timeOfDay(date).equalsT(new Bridge.TimeSpan(10, 35, 0)), "Bridge582 TestTimeOfDay TimeOfDay 2011, 5, 28, 10, 35, 0");

            date = new Date(1979, 12 - 1, 25, 14, 30, 0);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.equalsT(new Date(date.getFullYear(), date.getMonth(), date.getDate()), new Date(1979, 12 - 1, 25)), "Bridge582 TestTimeOfDay Date 1979, 12, 25, 14, 30, 0");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Date.timeOfDay(date).equalsT(new Bridge.TimeSpan(14, 30, 0)), "Bridge582 TestTimeOfDay TimeOfDay 1979, 12, 25, 14, 30, 0");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge583', {
    statics: {
        testUseCase: function () {
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 6), Bridge.Decimal(1.4), "Bridge583 1");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 6), Bridge.Decimal(1.6), "Bridge583 2");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 6), Bridge.Decimal(123.4568), "Bridge583 3");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 6), Bridge.Decimal(123.456789), "Bridge583 4");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 6), Bridge.Decimal(123.456789), "Bridge583 5");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 6), Bridge.Decimal(-123.0), "Bridge583 6");

            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 0), 1.5, "Bridge583 Up 1");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 0), 1.6, "Bridge583 Up 2");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 0), 123.4568, "Bridge583 Up 3");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 0), 123.456789, "Bridge583 Up 4");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 0), 123.456789, "Bridge583 Up 5");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 0), -124.0, "Bridge583 Up 6");

            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 4), 1.5, "Bridge583 AwayFromZero 1");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 4), 1.6, "Bridge583 AwayFromZero 2");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 4), 123.4568, "Bridge583 AwayFromZero 3");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 4), 123.456789, "Bridge583 AwayFromZero 4");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 4), 123.456789, "Bridge583 AwayFromZero 5");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 4), -123.0, "Bridge583 AwayFromZero 6");

            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 1), 1.4, "Bridge583 Down 1");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 1), 1.5, "Bridge583 Down 2");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 1), 123.4567, "Bridge583 Down 3");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 1), 123.456789, "Bridge583 Down 4");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 1), 123.456789, "Bridge583 Down 5");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 1), -123.0, "Bridge583 Down 6");

            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 2), 1.5, "Bridge583 InfinityPos 1");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 2), 1.6, "Bridge583 InfinityPos 2");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 2), 123.4568, "Bridge583 InfinityPos 3");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 2), 123.456789, "Bridge583 InfinityPos 4");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 2), 123.456789, "Bridge583 InfinityPos 5");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 2), -123.0, "Bridge583 InfinityPos 6");

            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 3), 1.4, "Bridge583 InfinityNeg 1");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 3), 1.5, "Bridge583 InfinityNeg 2");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 3), 123.4567, "Bridge583 InfinityNeg 3");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 3), 123.456789, "Bridge583 InfinityNeg 4");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 3), 123.456789, "Bridge583 InfinityNeg 5");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 3), -124.0, "Bridge583 InfinityNeg 6");

            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 5), 1.4, "Bridge583 TowardsZero 1");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 5), 1.5, "Bridge583 TowardsZero 2");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 5), 123.4568, "Bridge583 TowardsZero 3");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 5), 123.456789, "Bridge583 TowardsZero 4");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 5), 123.456789, "Bridge583 TowardsZero 5");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 5), -123.0, "Bridge583 TowardsZero 6");

            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 6), 1.4, "Bridge583 ToEven 1");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 6), 1.6, "Bridge583 ToEven 2");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 6), 123.4568, "Bridge583 ToEven 3");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 6), 123.456789, "Bridge583 ToEven 4");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 6), 123.456789, "Bridge583 ToEven 5");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 6), -123.0, "Bridge583 ToEven 6");

            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 7), 1.5, "Bridge583 Ceil 1");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 7), 1.6, "Bridge583 Ceil 2");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 7), 123.4568, "Bridge583 Ceil 3");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 7), 123.456789, "Bridge583 Ceil 4");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 7), 123.456789, "Bridge583 Ceil 5");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 7), -123.0, "Bridge583 Ceil 6");

            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 8), 1.4, "Bridge583 Floor 1");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 8), 1.5, "Bridge583 Floor 2");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 8), 123.4568, "Bridge583 Floor 3");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 8), 123.456789, "Bridge583 Floor 4");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 8), 123.456789, "Bridge583 Floor 5");
            Bridge.get(Bridge.ClientTest.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 8), -123.0, "Bridge583 Floor 6");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge586', {
    statics: {
        testUseCase: function () {
            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge586A).setSomeDataStatic(Bridge.Decimal(4));
            }, "a.SomeDataStatic is external");
            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge586A).doSomethingStatic();
            }, "a.DoSomethingStatic() is external");

            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                Bridge.ClientTest.BridgeIssues.Bridge586B.setSomeDataStatic(Bridge.Decimal(4));
            }, "b.SomeDataStatic is external");
            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                Bridge.ClientTest.BridgeIssues.Bridge586B.doSomethingStatic();
            }, "b.DoSomethingStatic() is external");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge588A', {
    statics: {
        config: {
            init: function () {
                this.valeur3 = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588A).add(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588B).Valeur2, 1);
            }
        },
        add: function (a, b) {
            return a + b;
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge588C.C1', {
    statics: {
        config: {
            init: function () {
                this._default = new Bridge.ClientTest.BridgeIssues.Bridge588C.C1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588C.C2).getDefault());
            }
        },
        getDefault: function () {
            return Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588C.C1)._default;
        }
    },
    config: {
        properties: {
            Value: null
        }
    },
    constructor: function (value) {
        this.setValue(value);
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge592', {
    statics: {
        testUseCase: function () {
            var i8_1 = -2;
            var i8_2 = Bridge.cast((i8_1 >> 4), Bridge.Int);
            var u8_1 = 254;
            var u8_2 = Bridge.cast((u8_1 >> 4), Bridge.Int);

            var i16_1 = -2;
            var i16_2 = Bridge.cast((i16_1 >> 8), Bridge.Int);
            var u16_1 = 65534;
            var u16_2 = Bridge.cast((u16_1 >> 8), Bridge.Int);

            var i32_1 = -2;
            var i32_2 = i32_1 >> 16;
            var u32_1 = 4294967294;
            var u32_2 = u32_1 >>> 16;

            Bridge.get(Bridge.Test.Assert).areEqual$1(i8_2, -1, "Bridge592 i8_2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(u8_2, 15, "Bridge592 u8_2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i16_2, -1, "Bridge592 i16_2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(u16_2, 255, "Bridge592 u16_2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i32_2, -1, "Bridge592 i32_2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(u32_2, 65535, "Bridge592 u32_2");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge595', {
    statics: {
        testUseCase: function () {
            var buffer = new Bridge.Text.StringBuilder();
            var a = new Bridge.ClientTest.BridgeIssues.Bridge595A(buffer);
            a.render();
            Bridge.get(Bridge.Test.Assert).areEqual$1(buffer.toString(), "Render0Render1", "Bridge595 A");

            buffer.clear();
            var b = new Bridge.ClientTest.BridgeIssues.Bridge595B(buffer);
            b.render();
            Bridge.get(Bridge.Test.Assert).areEqual$1(buffer.toString(), "Render0Render1", "Bridge595 B");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge597', {
    statics: {
        testUseCase: function () {
            var inst = new Bridge.ClientTest.BridgeIssues.Bridge597A();
            Bridge.get(Bridge.Test.Assert).areEqual$1(inst.get(), "0:a", "Bridge597 Without instance member access");
            Bridge.get(Bridge.Test.Assert).areEqual$1(inst.getWithMember(), "HI!:0:a", "Bridge597 With instance member access");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge603B', {
    statics: {
        op_Implicit$2: function (value) {
            var $t;
            value = ($t = value, Bridge.hasValue($t) ? $t : "[Null]");
            return new Bridge.ClientTest.BridgeIssues.Bridge603B("constructor$3", value);
        },
        op_Implicit$1: function (value) {
            return new Bridge.ClientTest.BridgeIssues.Bridge603B("constructor$2", value);
        },
        op_Implicit: function (value) {
            var $t;
            value = ($t = value, Bridge.hasValue($t) ? $t : Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge603Class(), {
                setData: "[Null]"
            } ));
            return new Bridge.ClientTest.BridgeIssues.Bridge603B("constructor$1", value);
        },
        getDefaultValue: function () { return new Bridge.ClientTest.BridgeIssues.Bridge603B(); }
    },
    value: null,
    intValue: 0,
    constructor$3: function (value) {
        this.value = value;
        this.intValue = 0;
    },
    constructor$2: function (value) {
        this.value = null;
        this.intValue = value;
    },
    constructor$1: function (value) {
        this.value = value.getData().toString();
        this.intValue = 0;
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.value == null ? 0 : Bridge.getHashCode(this.value));
        hash = hash * 23 + (this.intValue == null ? 0 : Bridge.getHashCode(this.intValue));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Bridge.ClientTest.BridgeIssues.Bridge603B)) {
            return false;
        }
        return Bridge.equals(this.value, o.value) && Bridge.equals(this.intValue, o.intValue);
    },
    $clone: function (to) {
        var s = to || new Bridge.ClientTest.BridgeIssues.Bridge603B();
        s.value = this.value;
        s.intValue = this.intValue;
        return s;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge606', {
    statics: {
        testUseCase: function () {
            var c = new Bridge.ClientTest.BridgeIssues.Bridge606C();
            c.example1("b", "a");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getX(), "b", "Bridge606 C X");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getY(), "a", "Bridge606 C Y");

            var b = new Bridge.ClientTest.BridgeIssues.Bridge606B("b", "a");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getX(), "b", "Bridge606 B X");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getY(), "a", "Bridge606 B Y");

            var s = Bridge.ClientTest.BridgeIssues.Bridge606A.example2("123", "b", "a");
            Bridge.get(Bridge.Test.Assert).areEqual$1(s, "123 - b - a", "Bridge606 123");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge607', {
    statics: {
        testUseCase: function () {
            var c = new Bridge.ClientTest.BridgeIssues.Bridge607A$1(String)();
            var c1 = new Bridge.ClientTest.BridgeIssues.Bridge607B();

            Bridge.get(Bridge.Test.Assert).true$1(c.equalsT(c), "Bridge607A c");
            Bridge.get(Bridge.Test.Assert).false$1(c.equalsT(null), "Bridge607A null");

            Bridge.get(Bridge.Test.Assert).true$1(c1.equalsT(c1), "Bridge607B c");
            Bridge.get(Bridge.Test.Assert).false$1(c1.equalsT(null), "Bridge607B null");

            Bridge.get(Bridge.Test.Assert).false$1(Bridge.equals(new Bridge.ClientTest.BridgeIssues.Bridge607C(), null), "Bridge607C null");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge608', {
    statics: {
        testUseCase: function () {
            var s = new Bridge.ClientTest.BridgeIssues.Bridge608A("constructor$1", "test");
            var o = "test";
            Bridge.get(Bridge.Test.Assert).true$1(s.equals(o), "Bridge608 Object");
            Bridge.get(Bridge.Test.Assert).true$1(s.equals$1("test"), "Bridge608 String");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge615', {
    statics: {
        testUseCase: function () {
            var i = 0;
            var o = null;

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge615A.method1$1(o), "object", "Bridge615 object");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge615A.method1(i), "int", "Bridge615 int");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge623', {
    statics: {
        testUseCase: function () {
            var func1 = function () {
                return (Bridge.caller[0] || this).foo;
            };

            var point1 = new Bridge.ClientTest.BridgeIssues.Bridge623A(1, func1);
            var point2 = new Bridge.ClientTest.BridgeIssues.Bridge623A(2, func1);

            Bridge.get(Bridge.Test.Assert).areEqual$1(point1.call(), 1, "Bridge623A point1 func1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(point2.call(), 2, "Bridge623A point2 func1");

            var point3 = new Bridge.ClientTest.BridgeIssues.Bridge623B1(3, func1);
            var point4 = new Bridge.ClientTest.BridgeIssues.Bridge623B1(4, func1);

            Bridge.get(Bridge.Test.Assert).areEqual$1(point3.call(), 3, "Bridge623B1 point3 func1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(point4.call(), 4, "Bridge623B1 point4 func1");

            var func2 = function () {
                return (Bridge.caller[0] || this).getFoo();
            };

            var point5 = new Bridge.ClientTest.BridgeIssues.Bridge623B1(5, func2);
            var point6 = new Bridge.ClientTest.BridgeIssues.Bridge623B1(6, func2);

            Bridge.get(Bridge.Test.Assert).areEqual$1(point5.call(), 10, "Bridge623B1 point5 func2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(point6.call(), 12, "Bridge623B1 point6 func2");

            var func3 = function () {
                return (Bridge.caller[0] || this).getFoo();
            };

            var point7 = new Bridge.ClientTest.BridgeIssues.Bridge623B2(7, func3);
            var point8 = new Bridge.ClientTest.BridgeIssues.Bridge623B2(8, func3);

            Bridge.get(Bridge.Test.Assert).areEqual$1(point7.call(), 1021, "Bridge623B2 point7 func3");
            Bridge.get(Bridge.Test.Assert).areEqual$1(point8.call(), 1024, "Bridge623B2 point8 func3");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge625', {
    statics: {
        testUseCase: function () {
            var list = [1, 2, 3];

            var d1 = Bridge.Linq.Enumerable.from(list).toDictionary(function (x) {
                return x;
            }, null, Bridge.Int, Bridge.Int);
            Bridge.get(Bridge.Test.Assert).true$1(true, "Bridge625 d1");

            var d2 = Bridge.Linq.Enumerable.from(list).toDictionary(function (x) {
                return x;
            }, null, Bridge.Int, Bridge.Int, new Bridge.ClientTest.BridgeIssues.Bridge625A());
            Bridge.get(Bridge.Test.Assert).true$1(true, "Bridge625 d2");

            var d3 = Bridge.Linq.Enumerable.from(list).toDictionary(function (x) {
                return x;
            }, function (y) {
                return y;
            }, Bridge.Int, Bridge.Int);
            Bridge.get(Bridge.Test.Assert).true$1(true, "Bridge625 d3");

            var d4 = Bridge.Linq.Enumerable.from(list).toDictionary(function (x) {
                return x;
            }, function (y) {
                return y;
            }, Bridge.Int, Bridge.Int, new Bridge.ClientTest.BridgeIssues.Bridge625A());
            Bridge.get(Bridge.Test.Assert).true$1(true, "Bridge625 d4");

        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge634', {
    statics: {
        testUseCase1: function () {
            var $t;
            var hashSet = new Bridge.Collections.HashSet$1(String)("constructor");

            hashSet.add$1("a");
            hashSet.add$1("b");
            hashSet.add$1("c");

            var text = "";

            $t = Bridge.getEnumerator(hashSet);
            while ($t.moveNext()) {
                var s = $t.getCurrent();
                text += s;
            }

            Bridge.get(Bridge.Test.Assert).areEqual$1(text, "abc", "Bridge634: foreach works for HashSet");
        },
        testUseCase2: function () {
            var a = new Bridge.ClientTest.BridgeIssues.Bridge634A$1(String)();
            var a1 = new Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested(String)();
            var a2 = new Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested$1(String,Bridge.Int)();
            var a3 = new Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested.SubNested(String)();
            var a4 = new Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested.SubNested$1(String,Bridge.Int)();
            var a5 = new Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested$1.SubNested(String,Bridge.Int)();
            var a6 = new Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested$1.SubNested$1(String,Bridge.Int,Bridge.Int)();

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(a), "Bridge.ClientTest.BridgeIssues.Bridge634A$1$String", "Bridge634 A a");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(a1), "Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested$String", "Bridge634 A a1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(a2), "Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested$1$String$Bridge.Int", "Bridge634 A a2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(a3), "Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested.SubNested$String", "Bridge634 A a3");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(a4), "Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested.SubNested$1$String$Bridge.Int", "Bridge634 A a4");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(a5), "Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested$1.SubNested$String$Bridge.Int", "Bridge634 A a5");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(a6), "Bridge.ClientTest.BridgeIssues.Bridge634A$1.Nested$1.SubNested$1$String$Bridge.Int$Bridge.Int", "Bridge634 A a6");

            var b = new ClientTestLibraryCustom.Bridge634B$1(String)();
            var b1 = new ClientTestLibraryCustom.Bridge634B$1.Nested(String)();
            var b2 = new ClientTestLibraryCustom.Bridge634B$1.Nested$1(String,Bridge.Int)();
            var b3 = new ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested(String)();
            var b4 = new ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested$1(String,Bridge.Int)();
            var b5 = new ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested(String,Bridge.Int)();
            var b6 = new ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested$1(String,Bridge.Int,Bridge.Int)();

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(b), "ClientTestLibraryCustom.Bridge634B$1$String", "Bridge634 B b");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(b1), "ClientTestLibraryCustom.Bridge634B$1.Nested$String", "Bridge634 B b1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(b2), "ClientTestLibraryCustom.Bridge634B$1.Nested$1$String$Bridge.Int", "Bridge634 B b2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(b3), "ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested$String", "Bridge634 B b3");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(b4), "ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested$1$String$Bridge.Int", "Bridge634 B b4");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(b5), "ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested$String$Bridge.Int", "Bridge634 B b5");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(b6), "ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested$1$String$Bridge.Int$Bridge.Int", "Bridge634 B b6");

            var c = new Bridge.ClientTest.BridgeIssues.Bridge634C();
            var c1 = new Bridge.ClientTest.BridgeIssues.Bridge634C.Nested();
            var c2 = new Bridge.ClientTest.BridgeIssues.Bridge634C.Nested$1(Bridge.Int)();
            var c3 = new Bridge.ClientTest.BridgeIssues.Bridge634C.Nested.SubNested();
            var c4 = new Bridge.ClientTest.BridgeIssues.Bridge634C.Nested.SubNested$1(Bridge.Int)();
            var c5 = new Bridge.ClientTest.BridgeIssues.Bridge634C.Nested$1.SubNested(Bridge.Int)();
            var c6 = new Bridge.ClientTest.BridgeIssues.Bridge634C.Nested$1.SubNested$1(Bridge.Int,Bridge.Int)();

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(c), "Bridge.ClientTest.BridgeIssues.Bridge634C", "Bridge634 C c");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(c1), "Bridge.ClientTest.BridgeIssues.Bridge634C.Nested", "Bridge634 C c1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(c2), "Bridge.ClientTest.BridgeIssues.Bridge634C.Nested$1$Bridge.Int", "Bridge634 C c2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(c3), "Bridge.ClientTest.BridgeIssues.Bridge634C.Nested.SubNested", "Bridge634 C c3");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(c4), "Bridge.ClientTest.BridgeIssues.Bridge634C.Nested.SubNested$1$Bridge.Int", "Bridge634 C c4");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(c5), "Bridge.ClientTest.BridgeIssues.Bridge634C.Nested$1.SubNested$Bridge.Int", "Bridge634 C c5");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(c6), "Bridge.ClientTest.BridgeIssues.Bridge634C.Nested$1.SubNested$1$Bridge.Int$Bridge.Int", "Bridge634 C c6");
        },
        testUseCaseFor658: function () {
            var d = new Bridge634D();
            var d1 = new Bridge634D.Nested();

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(d), "Bridge634D", "Bridge634 D d");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(d1), "Bridge634D.Nested", "Bridge634 D d1");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge635', {
    statics: {
        testUseCase: function () {
            var a = new Bridge.ClientTest.BridgeIssues.Bridge635A();
            var b = new Bridge.ClientTest.BridgeIssues.Bridge635B();

            Bridge.get(Bridge.Test.Assert).areEqual$1(typeof a.internalFunc1, "function", "Bridge635 A.internalFunc1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a["internalFunc1"](), "A.Test1", "Bridge635 A.internalFunc1 Invoke");

            Bridge.get(Bridge.Test.Assert).areEqual$1(typeof b.internalFunc1, "function", "Bridge635 B.internalFunc1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b["internalFunc1"](), "B.Test1", "Bridge635 B.internalFunc1 Invoke");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge647', {
    statics: {
        testUseCase: function () {
            var a = { bar: 1 };
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.bar, 1, "Bridge647 A");

            var b = { bar: 1, bar1: 12 };
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.bar, 1, "Bridge647 B bar");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.bar1, 12, "Bridge647 B bar1");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge648', {
    statics: {
        testUseCase: function () {
            var wrappedString = new Bridge.ClientTest.BridgeIssues.Bridge648A("test");
            var stringArray = Bridge.Array.init(0, null);
            stringArray.push(Bridge.ClientTest.BridgeIssues.Bridge648A.op_Implicit(wrappedString));

            Bridge.get(Bridge.Test.Assert).areEqual(stringArray[0], "test");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge652', {
    statics: {
        log: null,
        testUseCase: function () {
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge652).log = null;
            var c = new Bridge.ClientTest.BridgeIssues.Bridge652.Bridge652A1();
            Bridge.get(Bridge.Test.Assert).areNotEqual$1(c.bar, null, "Bridge652A1 Bar NotNull");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge652).log, "Bridge652B1", "Bridge652A1 log");

            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge652).log = null;
            var d = new Bridge.ClientTest.BridgeIssues.Bridge652.Bridge652A2();
            Bridge.get(Bridge.Test.Assert).areNotEqual$1(d.bar, null, "Bridge652A2 Bar NotNull");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge652).log, "Bridge652B2", "Bridge652A2 log");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge655', {
    statics: {
        testUseCase: function () {
            var item11 = function () {
                return 11;
            };
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge655A.isNullOrUndefined(item11), false, "Bridge655 IsNullOrUndefined11");
            Bridge.get(Bridge.Test.Assert).areEqual$1(item11(), 11, "Bridge655 item11");

            var item12 = function (i) {
                return i;
            };
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge655A.isNullOrUndefined(item12), false, "Bridge655 IsNullOrUndefined12");
            Bridge.get(Bridge.Test.Assert).areEqual$1(item12(12), 12, "Bridge655 item12");

            var item21 = function () {
                return 21;
            };
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge655A.isNullOrUndefined$1(item21, 21), false, "Bridge655 IsNullOrUndefined21 false");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge655A.isNullOrUndefined$1(item21, 0), true, "Bridge655 IsNullOrUndefined21 true");
            Bridge.get(Bridge.Test.Assert).areEqual$1(item21(), 21, "Bridge655 item21");

            var item22 = function (i, s) {
                return i + s.length;
            };
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge655A.isNullOrUndefined$2(item22, "22"), "false", "Bridge655 IsNullOrUndefined22 false");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge655A.isNullOrUndefined$2(item22, ""), "true", "Bridge655 IsNullOrUndefined22 true");
            Bridge.get(Bridge.Test.Assert).areEqual$1(item22(19, "two"), 22, "Bridge655 item22");

            var item32 = function (i, s) {
                var b = i === s.length;
            };
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge655A.isNullOrUndefined$2(item32, "32"), "false", "Bridge655 IsNullOrUndefined32 false");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge655A.isNullOrUndefined$2(item32, ""), "true", "Bridge655 IsNullOrUndefined32 true");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge660MessageStore', {
    statics: {
        config: {
            init: function () {
                this._initialEditState = new Bridge.ClientTest.BridgeIssues.Bridge660MessageEditState(new Bridge.ClientTest.BridgeIssues.Bridge660TextInputState("constructor", "Message"));
            }
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge661', {
    statics: {
        example1: function (exampleInput) {
            if (exampleInput === void 0) { exampleInput = 0; }
            return exampleInput === 0;
        },
        example2: function (exampleInput) {
            if (exampleInput === void 0) { exampleInput = 49; }
            return exampleInput === 49;
        },
        testUseCase: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge661).example1(), true, "Bridge661 Example1 true default");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge661).example1(0), true, "Bridge661 Example1 true");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge661).example1(65), false, "Bridge661 Example1 false");

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge661).example2(), true, "Bridge661 Example2 true default");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge661).example2(49), true, "Bridge661 Example2 true");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge661).example2(0), false, "Bridge661 Example2 false");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge664', {
    statics: {
        testUseCase: function () {
            var f = function (s) {
                return s;
            };
            // if cast will be emitted then exception will be thrown because Bridge664A is not emitted
            Bridge.get(Bridge.Test.Assert).areEqual$1(f("test"), "test", "Bridge664");

            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                var b = { };
                var s = Bridge.cast(b, Bridge.ClientTest.BridgeIssues.Bridge664B);
            }, "Bridge664 Should throw exception");


        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge666', {
    statics: {
        testUseCase: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge666).getSum(), 360, "Bridge666 GetSum 360");
        },
        getSum: function () {
            var $t;
            var sum = 0;
            var numbers = [1, 2, 3];

            $t = Bridge.getEnumerator(numbers);
            while ($t.moveNext()) {
                (function () {
                    var n = $t.getCurrent();
                    var func = function (i) {
                        var $t1;
                        var bigNumbers = [10, 20, 30];
                        $t1 = Bridge.getEnumerator(bigNumbers);
                        while ($t1.moveNext()) {
                            var bn = $t1.getCurrent();
                            sum = sum + i * bn;
                        }
                    };

                    func(n);
                }).call(this);
            }

            return sum;
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge671', {
    statics: {
        testUseCase: function () {
            Bridge.get(Bridge.Test.Assert).areEqual(new Bridge.ClientTest.BridgeIssues.Bridge671().invoke(), 1);
        }
    },
    one: 1,
    getOne: function () {
        return this.one;
    },
    invoke: function () {
        var b = new Bridge.ClientTest.BridgeIssues.Bridge671A(Bridge.fn.bind(this, this.getOne));
        return b.invoke();
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge674', {
    statics: {
        testUseCase: function () {
            var o = undefined;
            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                var s = Bridge.cast(o, String);
            }, "Unable to cast type 'null' to type String");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge675', {
    statics: {
        testUseCase: function () {
            var me = Bridge.global.Bridge.ClientTest.BridgeIssues.Bridge675;
            me.id = "str1";
            me.i1 = 1;
            me.i2 = 2;

            Bridge.get(Bridge.Test.Assert).areEqual$1(me.dynMethod(me.id), "str1", "Bridge675 DynMethod");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge675).method1$1(me.id), "str1", "Bridge675 Method1 id");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge675).method1(me.i1, me.i2), 3, "Bridge675 Method1 i1 i2");
        },
        dynMethod: function (s) {
            return s;
        },
        method1$1: function (s) {
            return s;
        },
        method1: function (i1, i2) {
            return i1 + i2;
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge687', {
    statics: {
        testUseCase: function () {
            var c = new Bridge.ClientTest.BridgeIssues.Bridge687A(null);
            var case1 = false;
            if (!Bridge.hasValue(c)) {
                case1 = true;
            }
            Bridge.get(Bridge.Test.Assert).areEqual$1(case1, false, "Bridge687 case1");

            c = new Bridge.ClientTest.BridgeIssues.Bridge687A("test");
            var case2 = false;
            if (Bridge.ClientTest.BridgeIssues.Bridge687A.op_Implicit(c) === "test") {
                case2 = true;
            }
            Bridge.get(Bridge.Test.Assert).areEqual$1(case2, true, "Bridge687 case2");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge689', {
    statics: {
        testUseCase: function () {
            var fn1 = parseInt;
            Bridge.get(Bridge.Test.Assert).areEqual$1(fn1("5"), 5, "Bridge689 should equals 5");

            var fn2 = parseInt;
            Bridge.get(Bridge.Test.Assert).areEqual$1(fn2("6"), 6, "Bridge689 should equals 6");

            //object a = 7;
            //Func<object, bool> fn3 = a.BridgeEquals;
            //Assert.AreEqual(fn3("7"), 7, "Bridge689 should equals 7");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge690');

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge691', {
    statics: {
        testUseCase: function () {
            var $t;
            var pos = 0;
            var lines = ["", "", "str"];
            while (pos < lines.length) {
                var $t = (function () {
                    while (pos < lines.length && lines[pos].length === 0) {
                        pos++;
                    }

                    if (!(pos < lines.length)) {
                        return {jump:2};
                    }

                    var a = function (p) {
                    };

                    if (pos > 0) {
                        return {jump:2};
                    }
                }).call(this) || {};
                if($t.jump == 2) break;
            }

            Bridge.get(Bridge.Test.Assert).areEqual$1(pos, 2, "Bridge691");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge692', {
    statics: {
        testUseCase: function () {
            var a = new Bridge.ClientTest.BridgeIssues.Bridge692.A();
            Bridge.get(Bridge.Test.Assert).areEqual$1(a, a, "Bridge692 A");

            var b1 = new Bridge.ClientTest.BridgeIssues.Bridge692.B1("constructor");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b1, b1, "Bridge692 B1");

            var b2 = new Bridge.ClientTest.BridgeIssues.Bridge692.B1("constructor");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b2, b2, "Bridge692 B2");

            var b3 = new Bridge.ClientTest.BridgeIssues.Bridge692.B3();
            Bridge.get(Bridge.Test.Assert).areEqual$1(b3, b3, "Bridge692 B3");

            var c1 = new Bridge.ClientTest.BridgeIssues.Bridge692.C1("constructor");
            Bridge.get(Bridge.Test.Assert).areNotStrictEqual$1(c1.$clone(), c1.$clone(), "Bridge692 C1");

            var c2 = new Bridge.ClientTest.BridgeIssues.Bridge692.C2("constructor");
            Bridge.get(Bridge.Test.Assert).areNotStrictEqual$1(c2.$clone(), c2.$clone(), "Bridge692 C2");

            var c3 = new Bridge.ClientTest.BridgeIssues.Bridge692.C3();
            Bridge.get(Bridge.Test.Assert).areNotStrictEqual$1(c3.$clone(), c3.$clone(), "Bridge692 C3");

            var c3_1 = new Bridge.ClientTest.BridgeIssues.Bridge692.C3();
            Bridge.get(Bridge.Test.Assert).areNotStrictEqual$1(Bridge.Nullable.lift1("$clone", c3_1), Bridge.Nullable.lift1("$clone", c3_1), "Bridge692 C3_1");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge693', {
    statics: {
        testUseCase: function () {
            var c = new Bridge.ClientTest.BridgeIssues.Bridge693B();
            Bridge.get(Bridge.Test.Assert).areNotEqual$1(c, null, "Bridge693 not null");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge694', {
    statics: {
        testUseCase: function () {
            var fruits = Bridge.Array.init(3, null);
            fruits[0] = "mango";
            fruits[1] = "apple";
            fruits[2] = "lemon";

            var list = Bridge.Linq.Enumerable.from(fruits).select(function(x) { return Bridge.cast(x, String); }).orderBy(function (fruit) {
                return fruit;
            }).select(function (fruit) {
                return fruit;
            }).toList(String);
            Bridge.get(Bridge.Test.Assert).areEqual$1(list.getItem(0), "apple", "Bridge694 apple");
            Bridge.get(Bridge.Test.Assert).areEqual$1(list.getItem(1), "lemon", "Bridge694 lemon");
            Bridge.get(Bridge.Test.Assert).areEqual$1(list.getItem(2), "mango", "Bridge694 mango");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge696', {
    statics: {
        testUseCase: function () {
            var namedCallbacks = new Bridge.Dictionary$2(String,Function)();
            namedCallbacks.add("Shout", function (message) {
                return message.length;
            });
            namedCallbacks.add("Whisper", function (message) {
                return message.length;
            });

            Bridge.get(Bridge.Test.Assert).areEqual$1(namedCallbacks.get("Shout")("HELLO!"), 6, "Bridge696 HELLO!");
            Bridge.get(Bridge.Test.Assert).areEqual$1(namedCallbacks.get("Whisper")("HELLO"), 5, "Bridge696 HELLO");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge699', {
    statics: {
        testUseCase: function () {
            var blob1 = new Blob(["blobData1"], { type: "text/richtext", endings: "transparent" });

            Bridge.get(Bridge.Test.Assert).areNotEqual$1(blob1, null, "blob1 is not null");
            Bridge.get(Bridge.Test.Assert).areEqual$1(blob1.size, 9, "blob1.Size equals 9");
            Bridge.get(Bridge.Test.Assert).areEqual$1(blob1.type, "text/richtext", "blob1.Type equals 'text/richtext'");

            var blob2 = new Blob(["data2"]);
            Bridge.get(Bridge.Test.Assert).areNotEqual$1(blob2, null, "blob2 is not null");
            Bridge.get(Bridge.Test.Assert).areEqual$1(blob2.size, 5, "blob2.Size equals 5");

        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge708', {
    statics: {
        testUseCase: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge708).testIssue(), 12, "Bridge708 TestIssue");
        },
        testIssue: function () {
            var sum = 0;
            var f = function () {
                var $t;
                $t = Bridge.getEnumerator([1, 2, 3]);
                while ($t.moveNext()) {
                    (function () {
                        var n = $t.getCurrent();
                        var g = function (i) {
                            sum += i;
                        };
                        g(n);
                    }).call(this);
                }
                var h = function () {
                    sum *= 2;
                };
                h();
            };

            f();

            return sum;
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge721', {
    statics: {
        testUseCase: function () {
            var testList = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [3]
            ] );
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge721).check(testList), "ThirdLoop", "Bridge721 ThirdLoop");

            testList = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [5]
            ] );
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge721).check(testList), "SecondLoop", "Bridge721 SecondLoop");

            testList = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [15]
            ] );
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge721).check(testList), "FirstLoop", "Bridge721 FirstLoop");

            testList = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [25]
            ] );
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge721).check(testList), "NoLoops", "Bridge721 NoLoops");
        },
        check: function (testList) {
            var $t, $t1, $t2;
            var i = 0;
            while (i < 20) {
                var $t = (function () {
                    while (i < 10) {
                        var $t1 = (function () {
                            while (i < 5) {
                                var $t2 = (function () {
                                    if (Bridge.Linq.Enumerable.from(testList).any(function (x) {
                                        return x === i;
                                    })) {
                                        return {jump: 3, v: "ThirdLoop"};
                                    }
                                    i++;
                                }).call(this) || {};
                                if($t2.jump == 3) return {jump: 3, v: $t2.v};
                            }

                            if (Bridge.Linq.Enumerable.from(testList).any(function (x) {
                                return x === i;
                            })) {
                                return {jump: 3, v: "SecondLoop"};
                            }
                            i++;
                        }).call(this) || {};
                        if($t1.jump == 3) return {jump: 3, v: $t1.v};
                    }

                    if (Bridge.Linq.Enumerable.from(testList).any(function (x) {
                        return x === i;
                    })) {
                        return {jump: 3, v: "FirstLoop"};
                    }
                    i++;
                }).call(this) || {};
                if($t.jump == 3) return $t.v;
            }

            return "NoLoops";
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge722', {
    statics: {
        m1: function (i) {
            return i;
        },
        testUseCase: function () {
            var $t, $t1, $t2, $t3, $t4, $t5, $t6;
            var c1 = new Bridge.ClientTest.BridgeIssues.Bridge722();
            var asset1 = 1;
            asset1 = ($t = 2, c1.setItem("path", $t), $t);

            Bridge.get(Bridge.Test.Assert).areEqual$1(asset1, 2, "Bridge722 asset1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge722).m1(($t1 = 3, c1.setItem("path", $t1), $t1)), 3, "Bridge722 M1 3");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge722).m1(($t2 = ($t3 = 4, c1.setItem("path", $t3), $t3), asset1 = $t2, $t2)), 4, "Bridge722 M1 4");

            var c2 = { };
            var asset2 = ($t4 = 5, c2.path = $t4, $t4);
            Bridge.get(Bridge.Test.Assert).areEqual$1(asset2, 5, "Bridge722 asset2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c2.path, 5, "Bridge722 c2");

            var c3 = new Bridge.Dictionary$2(String,Bridge.Int)();
            var asset3 = ($t5 = 6, c3.set("path", $t5), $t5);
            Bridge.get(Bridge.Test.Assert).areEqual$1(asset3, 6, "Bridge722 asset3");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c3.get("path"), 6, "Bridge722 c3");

            var data4 = [Bridge.Decimal(1.0), Bridge.Decimal(2.0), Bridge.Decimal(3.0), Bridge.Decimal(4.0), Bridge.Decimal(7.0)];
            var c4 = new Bridge.Dictionary$2(String,Bridge.Decimal)();
            var asset4 = ($t6 = Bridge.Linq.Enumerable.from(data4).select(function (x) {
                return x;
            }).last(), c4.set("path", $t6), $t6);
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(asset4, Bridge.Decimal(7.0), "Bridge722 asset4");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(c4.get("path"), Bridge.Decimal(7.0), "Bridge722 c4");
        }
    },
    lastItem: 0,
    getItem: function (item) {
        return this.lastItem;
    },
    setItem: function (item, value) {
        this.lastItem = value;
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge726', {
    statics: {
        testUseCase: function () {
            var $t;
            var b = true;
            var t = [1, 2, 3];

            var sum = 0;
            if (b) {
                $t = Bridge.getEnumerator(t);
                while ($t.moveNext()) {
                    var i = $t.getCurrent();
                    sum += i;
                }
            }

            Bridge.get(Bridge.Test.Assert).areEqual$1(sum, 6, "Bridge726");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge732', {
    statics: {
        testUseCase: function () {
            var decimalValue = Bridge.Decimal(5.0);
            var assign = false;
            var test = assign ? decimalValue : Bridge.Decimal(2);
            var test2 = test.mul(decimalValue);

            Bridge.get(Bridge.Test.Assert).true$1(test2.equalsT(Bridge.Decimal(10)), "Bridge732");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge733', {
    statics: {
        config: {
            init: function () {
                this.dateb = new Date(-864e13);
                Bridge.property(this, "DateA", new Date(-864e13));
            }
        },
        testUseCase: function () {
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.equals(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge733).getDateA(), new Date(-864e13)), "Bridge733 DateA");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.equals(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge733).dateb, new Date(-864e13)), "Bridge733 dateb");

            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge733).dateb = new Date(); // to prevent warning that dateb is never assigned
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge751', {
    statics: {
        testUseCase: function () {
            for (var i = 0; i < 5; i++) {
                var el = i;
            }

            var values = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [1],
                [2]
            ] );
            var v1 = Bridge.Linq.Enumerable.from(values).count(function (el1) {
                return el1 === 1;
            });

            Bridge.get(Bridge.Test.Assert).areEqual$1(v1, 1, "Bridge751");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge758', {
    statics: {
        testUseCase: function () {
            var list = new Bridge.List$1(Date)();
            list.add(new Date(2015, 1 - 1, 2));
            list.add(new Date(2015, 1 - 1, 1));
            list.add(new Date(2015, 1 - 1, 3));

            list.sort();
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.equals(list.getItem(0), new Date(2015, 1 - 1, 1)), "Bridge758 2015/1/1");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.equals(list.getItem(1), new Date(2015, 1 - 1, 2)), "Bridge758 2015/1/2");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.equals(list.getItem(2), new Date(2015, 1 - 1, 3)), "Bridge758 2015/1/3");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge760', {
    statics: {
        testUseCase: function () {
            var $t;
            var a = null;
            var b = 10;

            var c = ($t = b, Bridge.hasValue($t) ? $t : Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge760).doSomething(a));
            Bridge.get(Bridge.Test.Assert).areEqual$1(c, 10, "Bridge760");
        },
        doSomething: function (test) {
            return Bridge.Nullable.getValue(test);
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge762', {
    statics: {
        testUseCase: function () {
            var test1 = null;
            var test2 = null;
            var test3 = null;

            var value1 = Bridge.Nullable.getValueOrDefault(test1, Bridge.getDefaultValue(Bridge.Int));
            var value2 = Bridge.Nullable.getValueOrDefault(test2, Bridge.getDefaultValue(Bridge.ClientTest.BridgeIssues.Bridge762A));
            var value3 = Bridge.Nullable.getValueOrDefault(test3, Bridge.getDefaultValue(Bridge.ClientTest.BridgeIssues.Bridge762B));

            Bridge.get(Bridge.Test.Assert).areEqual$1(value1, 0, "Bridge762 int");
            Bridge.get(Bridge.Test.Assert).areNotEqual$1(value2, null, "Bridge762A struct");
            Bridge.get(Bridge.Test.Assert).areNotEqual$1(value3.$clone(), null, "Bridge762B struct");
            Bridge.get(Bridge.Test.Assert).areEqual$1(value3.getData(), 0, "Bridge762B.Data struct");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge782', {
    statics: {
        testUseCase: function () {
            var o = { };
            Bridge.get(Bridge.Test.Assert).true$1(!Bridge.hasValue(o.__foo), "Bridge782");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge785', {
    statics: {
        testUseCase: function () {
            {
                var i = 1;
                var j = i;
                Bridge.get(Bridge.Test.Assert).areEqual$1(j, 1, "Bridge785 by name");
            }
            {
                var i1 = 2;
                var j1 = i1;
                Bridge.get(Bridge.Test.Assert).areEqual$1(j1, 2, "Bridge785 by index");
            }
            {
                var i2 = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge785.DataClass(), {
                    setValue: 3
                } );
                var j2 = i2.getValue();
                Bridge.get(Bridge.Test.Assert).areEqual$1(j2, 3, "Bridge785 by index for DataClass property");
            }
            {
                var i3 = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge785.DataClass(), {
                    setValue: 4
                } );
                var j3 = i3;
                Bridge.get(Bridge.Test.Assert).areEqual$1(j3, i3, "Bridge785 by index for DataClass");
            }
            {
                var i4 = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge785.DataClass(), {
                    setValue: 5
                } );
                var j4 = i4.getSomething(55).getValue();
                Bridge.get(Bridge.Test.Assert).areEqual$1(j4, 55, "Bridge785 by index for DataClass method");
            }
            {
                var i5 = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge785.DataStruct(), {
                    setValue: 6
                } );
                var j5 = i5.getValue();
                Bridge.get(Bridge.Test.Assert).areEqual$1(j5, 6, "Bridge785 by index for DataStruct property");
            }
            {
                var i6 = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge785.DataStruct(), {
                    setValue: 7
                } );
                var j6 = i6.getSomething(77).getValue();
                Bridge.get(Bridge.Test.Assert).areEqual$1(j6, 77, "Bridge785 by index for DataStruct method");
            }
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge786', {
    statics: {
        testUseCase: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge786).get(true), "true", "Bridge786 true");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge786).get(false), "false", "Bridge786 false");
        },
        get: function ($throws) {
            return $throws ? "true" : "false";
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge788', {
    statics: {
        testUseCase: function () {
            Bridge.get(Bridge.Test.Assert).$true(Bridge.Validation.url("http://127.0.0.1"));
            Bridge.get(Bridge.Test.Assert).$false(Bridge.Validation.url("http://127.0.1"));
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge789', {
    statics: {
        testUseCase: function () {
            Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge789).method1(), null);
            Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge789).method2().$clone(), null);
            Bridge.get(Bridge.Test.Assert).areEqual(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge789).method2().field1, 0);
        },
        method1: function (dt) {
            if (dt === void 0) { dt = new Date(-864e13); }
            return dt;
        },
        method2: function (s) {
            if (s === void 0) { s = new Bridge.ClientTest.BridgeIssues.Bridge789A(); }
            return s.$clone();
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge793', {
    statics: {
        testUseCase: function () {
            var js = new Bridge.List$1(String)();
            js.add("1");
            var test = new Bridge.ReadOnlyCollection$1(String)(js);

            Bridge.get(Bridge.Test.Assert).areEqual$1(test.getCount(), 1, "Bridge793 Count");
            Bridge.get(Bridge.Test.Assert).areEqual$1(test.get(0), "1", "Bridge793 [0]");

            var ilist = Bridge.cast(test, Bridge.IList$1(String));

            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                Bridge.Array.setItem(ilist, 0, "0");
            }, "Bridge793 Setter should throw an exception");
            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                Bridge.Array.add(ilist, "1");
            }, "Bridge793 Add should throw an exception");
            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                Bridge.Array.removeAt(ilist, 0);
            }, "Bridge793 RemoveAt should throw an exception");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge795', {
    statics: {
        testUseCase: function () {
            var wrappedValue = new Bridge.ClientTest.BridgeIssues.Bridge795A("constructor$1", 1);
            var wrappedValueIsNull = (!Bridge.hasValue(wrappedValue));

            Bridge.get(Bridge.Test.Assert).areEqual$1(wrappedValueIsNull, false, "Bridge795");
        },
        testRelated: function () {
            var v1 = new Bridge.ClientTest.BridgeIssues.Bridge795B("constructor$1", 1);
            var v2 = new Bridge.ClientTest.BridgeIssues.Bridge795B("constructor$1", 2);
            var v3 = new Bridge.ClientTest.BridgeIssues.Bridge795B("constructor$1", 1);

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_Equality(v1, v2), false, "Bridge795 lift == 12");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_Equality(v1, v3), true, "Bridge795 lift == 13");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_Inequality(v1, v2), true, "Bridge795 lift != 12");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_Inequality(v1, v3), false, "Bridge795 lift != 13");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_GreaterThanOrEqual(v1, v2), false, "Bridge795 lift >= 12");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_GreaterThanOrEqual(v2, v1), true, "Bridge795 lift >= 21");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_GreaterThanOrEqual(v1, v3), true, "Bridge795 lift >= 13");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_GreaterThan(v1, v2), false, "Bridge795 lift > 12");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_GreaterThan(v2, v1), true, "Bridge795 lift > 21");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_GreaterThan(v1, v3), false, "Bridge795 lift > 13");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_LessThanOrEqual(v1, v2), true, "Bridge795 lift <= 12");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_LessThanOrEqual(v2, v1), false, "Bridge795 lift <= 21");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_LessThanOrEqual(v1, v3), true, "Bridge795 lift <= 13");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_LessThan(v1, v2), true, "Bridge795 lift < 12");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_LessThan(v2, v1), false, "Bridge795 lift < 21");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge795B.op_LessThan(v1, v3), false, "Bridge795 lift < 13");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge796', {
    statics: {
        testUseCase: function () {
            var b = { v : true };

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge796).method1(true), "Bridge796 Method1");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge796).method1_1(true), "Bridge796 Method1_1");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge796).method2(true), "Bridge796 Method2");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge796).method3(b), "Bridge796 Method3");
            Bridge.get(Bridge.Test.Assert).false$1(b.v, "Bridge796 Method3 b");
        },
        method1: function ($num) {
            return $num;
        },
        method1_1: function ($throws) {
            return $throws;
        },
        method2: function ($throws) {
            return $throws;
        },
        method3: function ($throws) {
            $throws.v = false;
            return $throws.v;
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge815', {
    statics: {
        testUseCase: function () {
            var a = new Bridge.ClientTest.BridgeIssues.Bridge815.A();

            a.method();
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Nullable.lift1("$clone", a.getProperty()), null, "Bridge815 null");

            a.method(new Bridge.ClientTest.BridgeIssues.Bridge815.B("constructor$1", 1));
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Nullable.hasValue(a.getProperty()), "Bridge815 Property.HasValue");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Nullable.getValue(a.getProperty()).field, 1, "Bridge815 Property.Value.field == 1");

            a.method2();
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Nullable.hasValue(a.getProperty()), "Bridge815 Method2 Property.HasValue");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Nullable.getValue(a.getProperty()).field, 0, "Bridge815 Method2 Property.Value.field == 0");

            a.method2(new Bridge.ClientTest.BridgeIssues.Bridge815.B("constructor$1", 2));
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Nullable.hasValue(a.getProperty()), "Bridge815 Method2 Property.HasValue 2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Nullable.getValue(a.getProperty()).field, 2, "Bridge815 Method2 Property.Value.field == 2");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge816', {
    statics: {
        testUseCase: function () {
            var textArea = document.createElement('textarea');
            textArea.id = "textArea1";
            textArea.value = "Test";

            var root = document.getElementById("qunit-fixture");
            root.appendChild(textArea);

            var ta = document.getElementById("textArea1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(ta.value, "Test", "Bridge816 textArea1.value");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge817', {
    statics: {
        testUseCase: function () {
            Bridge.get(Bridge.Test.Assert).true$1((Bridge.Char.isDigit(65) || Bridge.Char.isLetter(65)), "Bridge817 IsLetterOrDigit");
            Bridge.get(Bridge.Test.Assert).true$1((Bridge.Char.isDigit("A".charCodeAt(0)) || Bridge.Char.isLetter("A".charCodeAt(0))), "Bridge817 IsLetterOrDigit string");

            Bridge.get(Bridge.Test.Assert).false$1(!(Bridge.Char.isDigit(65) || Bridge.Char.isLetter(65)), "Bridge817 IsLetterOrDigit !");
            Bridge.get(Bridge.Test.Assert).false$1(!(Bridge.Char.isDigit("A".charCodeAt(0)) || Bridge.Char.isLetter("A".charCodeAt(0))), "Bridge817 IsLetterOrDigit string !");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge818', {
    statics: {
        testUseCase: function () {
            var z = 0;
            for (; ; ) {
                z++;
                if (z === 10) {
                    break;
                }
            }
            Bridge.get(Bridge.Test.Assert).areEqual$1(z, 10, "Bridge818 z");

            var i;
            var j;
            for (i = 0, j = 1; i < 10; i++, j++) {

            }
            Bridge.get(Bridge.Test.Assert).areEqual$1(i, 10, "Bridge818 i");
            Bridge.get(Bridge.Test.Assert).areEqual$1(j, 11, "Bridge818 j");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge821', {
    statics: {
        testUseCase: function () {
            var defaultCulture = Bridge.get(Bridge.CultureInfo).getCurrentCulture();

            try {
                var d = Bridge.Decimal("443534569034876.12345678901235");
                Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(d, 'G'), "443534569034876.12345678901235");
                Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(d, 'G', Bridge.get(Bridge.CultureInfo).getCultureInfo("ru-RU")), "443534569034876,12345678901235");
                Bridge.get(Bridge.CultureInfo).setCurrentCulture(Bridge.get(Bridge.CultureInfo).getCultureInfo("ru-RU"));
                Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(d, 'G'), "443534569034876,12345678901235");

                Bridge.get(Bridge.CultureInfo).setCurrentCulture(defaultCulture);

                var d1 = 1.25;
                Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(d1, 'G'), "1.25");
                Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(d1, 'G', Bridge.get(Bridge.CultureInfo).getCultureInfo("ru-RU")), "1,25");
                Bridge.get(Bridge.CultureInfo).setCurrentCulture(Bridge.get(Bridge.CultureInfo).getCultureInfo("ru-RU"));
                Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(d1, 'G'), "1,25");

                Bridge.get(Bridge.CultureInfo).setCurrentCulture(defaultCulture);

                var f = 1.25;
                Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(f, 'G'), "1.25");
                Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(f, 'G', Bridge.get(Bridge.CultureInfo).getCultureInfo("ru-RU")), "1,25");
                Bridge.get(Bridge.CultureInfo).setCurrentCulture(Bridge.get(Bridge.CultureInfo).getCultureInfo("ru-RU"));
                Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(f, 'G'), "1,25");
            }
            finally {
                Bridge.get(Bridge.CultureInfo).setCurrentCulture(defaultCulture);
            }
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge823', {
    statics: {
        getTicksReturnsCorrectValue: function () {
            var val = 946710000000;
            var result = 9467100000000000;

            var ticks = (new Date(val).getTime() * 10000);
            var ticksPlusOne = (new Date(val).getTime() * 10000) + 1;
            var ticksString = (new Date(val).getTime() * 10000).toString();

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(ticks, result, "Ticks returning correct int value");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(ticksPlusOne, result + 1, "Adding to a Tick value is correct");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(ticksString, result.toString(), "Ticks returning correct value if .ToString() called on int");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge826', {
    statics: {
        echoDecimal: function (d) {
            if (d === void 0) { d = Bridge.Decimal(42.0); }
            return d;
        },
        testUseCase: function () {
            var d = null;
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge826).echoDecimal(Bridge.ClientTest.BridgeIssues.Bridge826A.op_Implicit$1(d)).equalsT(Bridge.Decimal(0)), "Bridge826 decimal 0");

            d = Bridge.ClientTest.BridgeIssues.Bridge826A.op_Implicit(Bridge.Decimal(1));
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge826).echoDecimal(Bridge.ClientTest.BridgeIssues.Bridge826A.op_Implicit$1(d)).equalsT(Bridge.Decimal(1)), "Bridge826 decimal 1");

            var i = null;
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge826).echoDecimal(Bridge.Decimal(Bridge.ClientTest.BridgeIssues.Bridge826B.op_Implicit$1(i))).equalsT(Bridge.Decimal(0)), "Bridge826 int 0");

            i = Bridge.ClientTest.BridgeIssues.Bridge826B.op_Implicit(1);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge826).echoDecimal(Bridge.Decimal(Bridge.ClientTest.BridgeIssues.Bridge826B.op_Implicit$1(i))).equalsT(Bridge.Decimal(1)), "Bridge826 int 1");

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge826).echoDecimal().equalsT(Bridge.Decimal(42)), "Bridge826 42");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge835', {
    statics: {
        testUseCase: function () {
            var arr = Bridge.Array.create(new Bridge.ClientTest.BridgeIssues.Bridge835.Dot(), null, 10, 10);
            Bridge.get(Bridge.Test.Assert).areNotEqual$1(arr, null, "Bridge835");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge841', {
    statics: {
        testUseCase: function () {
            var $t;
            var testListA = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [1],
                [2]
            ] );

            var result = 0;
            $t = Bridge.getEnumerator(testListA);
            while ($t.moveNext()) {
                (function () {
                    var item = $t.getCurrent();
                    var fn = function () {
                    };

                    switch (item) {
                        case 1: 
                            result += 1;
                            break;
                        case 2: 
                            result += 2;
                            break;
                    }
                }).call(this);
            }

            Bridge.get(Bridge.Test.Assert).areEqual$1(result, 3, "Bridge841");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge844', {
    statics: {
        nullableAndSimpleDateTimeToStringEquals: function () {
            var dt1 = new Date();
            var dt2 = dt1;

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Date.format(dt1), Bridge.Date.format(dt2), "Bridge844");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge849', {
    statics: {
        testUseCase: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge849A.setToBlah(""), true, "Bridge849 true");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.ClientTest.BridgeIssues.Bridge849A.setToBlah("", false), false, "Bridge849 false");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge861', {
    statics: {
        testUseCase: function () {
            var testA = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge861A(), {
                setMyId: 1
            } );

            testA.setDelegates(Bridge.fn.combine(testA.getDelegates(), function (data) {
                var $t;
                ($t = data.getMyId(), data.setMyId($t+1), $t);
            }));

            var testB = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge861A(), {
                setMyId: 2,
                setDelegates: testA.getDelegates()
            } );

            testB.setDelegates(Bridge.fn.combine(testB.getDelegates(), function (data) {
                data.setMyId(0);
            }));
            testB.invokeDelegates();

            Bridge.get(Bridge.Test.Assert).areEqual(testB.getMyId(), 0);
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge863', {
    statics: {
        testUseCase: function () {
            var test = false;
            test = test || true;
            Bridge.get(Bridge.Test.Assert).areStrictEqual(test, true);

            test = false;
            test = test && true;
            Bridge.get(Bridge.Test.Assert).areStrictEqual(test, false);

            var test1 = false;
            test1 = Bridge.Nullable.or(test1, true);
            Bridge.get(Bridge.Test.Assert).areStrictEqual(test1, true);

            test1 = false;
            test1 = Bridge.Nullable.and(test1, true);
            Bridge.get(Bridge.Test.Assert).areStrictEqual(test1, false);
        }
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ComparerTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.Comparer$1(Object)), "Bridge.Comparer$1$Object", "GetClassName()");

        var comparer = new Bridge.Comparer$1(Object)(Bridge.Comparer$1.$default.fn);
        Bridge.get(Bridge.Test.Assert).true$1(true, "is Comparer<object> should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(comparer, Bridge.IComparer$1(Object)), "is IComparer<object> should be true");

        var comparer1 = new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn);
        Bridge.get(Bridge.Test.Assert).true$1(true, "is Comparer<int> should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(comparer1, Bridge.IComparer$1(Bridge.Int)), "is IComparer<int> should be true");
    },
    defaultComparerCanOrderNumbers: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn).compare(3, 8), -1, "Compare(3, 8) should be -1");
        Bridge.get(Bridge.Test.Assert).areEqual$1(new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn).compare(3, 3), 0, "Compare(3, 3) should be 0");
        Bridge.get(Bridge.Test.Assert).areEqual$1(new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn).compare(8, 3), 1, "Compare(8, 3) should be 1");
    },
    defaultComparerCanOrderNullValues: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn).compare(0, null), 1, "Compare(0, null) should be 1");
        Bridge.get(Bridge.Test.Assert).areEqual$1(new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn).compare(null, 0), -1, "Compare(null, 0) should be -1");
        Bridge.get(Bridge.Test.Assert).areEqual$1(new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn).compare(null, null), 0, "Compare(null, null) should be 0");
    },
    defaultComparerUsesCompareMethodIfClassImplementsIComparable: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(new Bridge.Comparer$1(Bridge.ClientTest.Collections.Generic.ComparerTests.C)(Bridge.Comparer$1.$default.fn).compare(new Bridge.ClientTest.Collections.Generic.ComparerTests.C(3), new Bridge.ClientTest.Collections.Generic.ComparerTests.C(8)), -1, "Compare(3, 8) should be -1");
        Bridge.get(Bridge.Test.Assert).areEqual$1(new Bridge.Comparer$1(Bridge.ClientTest.Collections.Generic.ComparerTests.C)(Bridge.Comparer$1.$default.fn).compare(new Bridge.ClientTest.Collections.Generic.ComparerTests.C(3), new Bridge.ClientTest.Collections.Generic.ComparerTests.C(3)), 0, "Compare(3, 3) should be 0");
        Bridge.get(Bridge.Test.Assert).areEqual$1(new Bridge.Comparer$1(Bridge.ClientTest.Collections.Generic.ComparerTests.C)(Bridge.Comparer$1.$default.fn).compare(new Bridge.ClientTest.Collections.Generic.ComparerTests.C(8), new Bridge.ClientTest.Collections.Generic.ComparerTests.C(3)), 1, "Compare(8, 3) should be 1");
    },
    createWorks: function () {
        var comparer = new Bridge.Comparer$1(Bridge.Int)(function (x, y) {
            Bridge.get(Bridge.Test.Assert).areEqual$1(x, 8, "x should be 8");
            Bridge.get(Bridge.Test.Assert).areEqual$1(y, 3, "y should be 3");
            return 42;
        });
        Bridge.get(Bridge.Test.Assert).areEqual$1(comparer.compare(8, 3), 42, "The result should be 42");
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.EqualityComparerTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.EqualityComparer$1(Object)), "Bridge.EqualityComparer$1$Object", "FullName should be correct");
        var dict = new Bridge.EqualityComparer$1(Object)();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(dict, Bridge.EqualityComparer$1(Object)), "is EqualityComparer<object> should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(dict, Bridge.IEqualityComparer$1(Object)), "is IEqualityComparer<object> should be true");
    },
    defaultComparerCanGetHashCodeOfNumber: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(new Bridge.EqualityComparer$1(Object)().getHashCode(12345, true), Bridge.getHashCode((12345)));
    },
    defaultComparerReturnsZeroAsHashCodeForNullAndUndefined: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(new Bridge.EqualityComparer$1(Object)().getHashCode(null, true), 0);
        Bridge.get(Bridge.Test.Assert).areEqual(new Bridge.EqualityComparer$1(Object)().getHashCode(undefined, true), 0);
    },
    defaultComparerCanDetermineEquality: function () {
        var o1 = { }, o2 = { };

        Bridge.get(Bridge.Test.Assert).true$1(new Bridge.EqualityComparer$1(Object)().equals(null, null), "null, null");
        Bridge.get(Bridge.Test.Assert).false$1(new Bridge.EqualityComparer$1(Object)().equals(null, o1), "null, o1");
        Bridge.get(Bridge.Test.Assert).false$1(new Bridge.EqualityComparer$1(Object)().equals(o1, null), "o1, null");
        Bridge.get(Bridge.Test.Assert).true$1(new Bridge.EqualityComparer$1(Object)().equals(o1, o1), "o1, o1");
        Bridge.get(Bridge.Test.Assert).false$1(new Bridge.EqualityComparer$1(Object)().equals(o1, o2), "o1, o2");
    },
    defaultComparerInvokesOverriddenGetHashCode: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(new Bridge.EqualityComparer$1(Object)().getHashCode(Bridge.merge(new Bridge.ClientTest.Collections.Generic.EqualityComparerTests.MyClass(), {
            hashCode: 42158
        } ), true), 42158);
    },
    defaultComparerInvokesOverriddenEquals: function () {
        var c = new Bridge.ClientTest.Collections.Generic.EqualityComparerTests.MyClass();
        var other = new Bridge.ClientTest.Collections.Generic.EqualityComparerTests.MyClass();
        c.shouldEqual = false;
        Bridge.get(Bridge.Test.Assert).$false(new Bridge.EqualityComparer$1(Object)().equals(c, other));
        Bridge.get(Bridge.Test.Assert).areStrictEqual(c.other, other);

        c.shouldEqual = true;
        c.other = null;
        Bridge.get(Bridge.Test.Assert).$true(new Bridge.EqualityComparer$1(Object)().equals(c, other));
        Bridge.get(Bridge.Test.Assert).areStrictEqual(c.other, other);

        c.shouldEqual = true;
        c.other = other;
        Bridge.get(Bridge.Test.Assert).$false(new Bridge.EqualityComparer$1(Object)().equals(c, null)); // We should not invoke our own equals so its return value does not matter.
        Bridge.get(Bridge.Test.Assert).areEqual(c.other, other); // We should not invoke our own equals so the 'other' member should not be set.
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.GenericDictionaryTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.Dictionary$2(Bridge.Int,String)), "Bridge.Dictionary$2$Bridge.Int$String", "FullName should be correct");
        var dict = new Bridge.Dictionary$2(Bridge.Int,String)();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(dict, Bridge.Dictionary$2(Bridge.Int,String)), "is Dictionary<int,string> should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(dict, Bridge.IDictionary$2(Bridge.Int,String)), "is IDictionary<int,string> should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(dict, Bridge.IEnumerable$1(Bridge.KeyValuePair$2(Bridge.Int,String))), "is IEnumerable<KeyValuePair<int,string>> should be true");
    },
    defaultConstructorWorks: function () {
        var d = new Bridge.Dictionary$2(Bridge.Int,String)();
        Bridge.get(Bridge.Test.Assert).areEqual$1(d.getCount(), 0, "Count is 0");
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(d.getEnumerator()), "Bridge.CustomEnumerator", "Enumerator should be Bridge.CustomEnumerator");
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(d.getComparer()), "Bridge.EqualityComparer$1$Object", "Comparer should be Bridge.EqualityComparer$1$Object");
    },
    capacityConstructorWorks: function () {
        var d = new Bridge.Dictionary$2(Bridge.Int, String)();
        Bridge.get(Bridge.Test.Assert).areEqual(d.getCount(), 0);
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(d.getEnumerator()), "Bridge.CustomEnumerator", "Enumerator should be Bridge.CustomEnumerator");
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(d.getComparer()), "Bridge.EqualityComparer$1$Object", "Comparer should be Bridge.EqualityComparer$1$Object");
    },
    capacityAndEqualityComparerWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.GenericDictionaryTests.TestEqualityComparer();
        var d = new Bridge.Dictionary$2(String, String)(null, c);
        Bridge.get(Bridge.Test.Assert).areEqual(d.getCount(), 0);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(d.getComparer(), c);
    },
    equalityComparerOnlyConstructorWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.GenericDictionaryTests.TestEqualityComparer();
        var d = new Bridge.Dictionary$2(String, Bridge.Int)(null, c);
        Bridge.get(Bridge.Test.Assert).areEqual(d.getCount(), 0);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(d.getComparer(), c);
    },
    countWorks: function () {
        var d = new Bridge.Dictionary$2(Bridge.Int,String)();
        Bridge.get(Bridge.Test.Assert).areEqual(d.getCount(), 0);
        d.add(1, "1");
        Bridge.get(Bridge.Test.Assert).areEqual(d.getCount(), 1);
        d.add(2, "2");
        Bridge.get(Bridge.Test.Assert).areEqual(d.getCount(), 2);
    },
    keysWorks: function () {
        var $t;
        var d = Bridge.merge(new Bridge.Dictionary$2(String,String)(), [
            ["1", "a"],
            ["2", "b"]
        ] );
        var keys = d.getKeys();
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(keys, Bridge.IEnumerable$1(String)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(keys, Bridge.ICollection$1(String)));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getCount(keys), 2);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.contains(keys, "1"));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.contains(keys, "2"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Array.contains(keys, "a"));

        var count = 0;
        $t = Bridge.getEnumerator(d.getKeys());
        while ($t.moveNext()) {
            var key = $t.getCurrent();
            if (key !== "1" && key !== "2") {
                Bridge.get(Bridge.Test.Assert).fail$1("Unexpected key " + key);
            }
            count++;
        }
        Bridge.get(Bridge.Test.Assert).areEqual(count, 2);
    },
    valuesWorks: function () {
        var $t;
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"],
            [2, "b"]
        ] );
        var values = d.getValues();
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(values, Bridge.IEnumerable$1(String)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(values, Bridge.ICollection$1(String)));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getCount(values), 2);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.contains(values, "a"));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.contains(values, "b"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Array.contains(values, "1"));

        var count = 0;
        $t = Bridge.getEnumerator(d.getValues());
        while ($t.moveNext()) {
            var value = $t.getCurrent();
            if (value !== "a" && value !== "b") {
                Bridge.get(Bridge.Test.Assert).fail$1("Unexpected key " + value);
            }
            count++;
        }
        Bridge.get(Bridge.Test.Assert).areEqual(count, 2);
    },
    indexerGetterWorksForExistingItems: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"],
            [2, "b"]
        ] );
        Bridge.get(Bridge.Test.Assert).areEqual(d.get(1), "a");
    },
    indexerSetterWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"],
            [2, "b"]
        ] );
        d.set(2, "c");
        d.set(3, "d");
        Bridge.get(Bridge.Test.Assert).areEqual(3, d.getCount());
        Bridge.get(Bridge.Test.Assert).areEqual(d.get(1), "a");
        Bridge.get(Bridge.Test.Assert).areEqual(d.get(2), "c");
        Bridge.get(Bridge.Test.Assert).areEqual(d.get(3), "d");
    },
    indexerGetterThrowsForNonExistingItems: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"],
            [2, "b"]
        ] );
        try {
            var x = d.get(10);
            Bridge.get(Bridge.Test.Assert).$true(false);
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            if (Bridge.is($e, Bridge.KeyNotFoundException)) {
            }
            else {
                throw $e;
            }
        }
    },
    addWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"],
            [2, "b"]
        ] );
        d.add(3, "c");
        Bridge.get(Bridge.Test.Assert).areEqual(3, d.getCount());
        Bridge.get(Bridge.Test.Assert).areEqual(d.get(1), "a");
        Bridge.get(Bridge.Test.Assert).areEqual(d.get(2), "b");
        Bridge.get(Bridge.Test.Assert).areEqual(d.get(3), "c");
    },
    addThrowsIfItemAlreadyExists: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"],
            [2, "b"]
        ] );
        try {
            d.add(2, "b");
            Bridge.get(Bridge.Test.Assert).$true(false);
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            if (Bridge.is($e, Bridge.ArgumentException)) {
            }
            else {
                throw $e;
            }
        }
    },
    clearWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"],
            [2, "b"]
        ] );
        d.clear();
        Bridge.get(Bridge.Test.Assert).areEqual(d.getCount(), 0);
    },
    containsKeyWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"],
            [2, "b"]
        ] );
        Bridge.get(Bridge.Test.Assert).$true(d.containsKey(1));
        Bridge.get(Bridge.Test.Assert).$false(d.containsKey(3));
    },
    enumeratingWorks: function () {
        var $t;
        var d = Bridge.merge(new Bridge.Dictionary$2(String,String)(), [
            ["1", "a"],
            ["2", "b"]
        ] );
        var count = 0;
        $t = Bridge.getEnumerator(d);
        while ($t.moveNext()) {
            var kvp = $t.getCurrent();
            if (kvp.key === "1") {
                Bridge.get(Bridge.Test.Assert).areEqual(kvp.value, "a");
            }
            else  {
                if (kvp.key === "2") {
                    Bridge.get(Bridge.Test.Assert).areEqual(kvp.value, "b");
                }
                else  {
                    Bridge.get(Bridge.Test.Assert).fail$1("Invalid key " + kvp.key);
                }
            }
            count++;
        }
        Bridge.get(Bridge.Test.Assert).areEqual(count, 2);
    },
    removeWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"],
            [2, "b"]
        ] );
        Bridge.get(Bridge.Test.Assert).areStrictEqual(d.remove(2), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(d.remove(3), false);
        Bridge.get(Bridge.Test.Assert).areEqual(d.getCount(), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(d.get(1), "a");
    },
    tryGetValueWithIntKeysWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(String,Bridge.Int)(), [
            ["a", 1],
            ["b", 2]
        ] );
        var i = { };

        Bridge.get(Bridge.Test.Assert).$true(d.tryGetValue("a", i));
        Bridge.get(Bridge.Test.Assert).areEqual(i.v, 1);
        Bridge.get(Bridge.Test.Assert).$false(d.tryGetValue("c", i));
        Bridge.get(Bridge.Test.Assert).areEqual(i.v, 0);
    },
    tryGetValueWithObjectKeysWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(String,Object)(), [
            ["a", 1],
            ["b", "X"]
        ] );
        var o = { };

        Bridge.get(Bridge.Test.Assert).$true(d.tryGetValue("a", o));
        Bridge.get(Bridge.Test.Assert).areEqual(o.v, 1);
        Bridge.get(Bridge.Test.Assert).$false(d.tryGetValue("c", o));
        Bridge.get(Bridge.Test.Assert).areStrictEqual(o.v, null);
    },
    canUseCustomComparer: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(String, Bridge.Int)(null, new Bridge.ClientTest.Collections.Generic.GenericDictionaryTests.TestEqualityComparer()), [
            ["a", 1],
            ["b", 2]
        ] );
        d.set("a2", 100);
        Bridge.get(Bridge.Test.Assert).areEqual(d.get("a3"), 100);
        Bridge.get(Bridge.Test.Assert).areEqual(d.getCount(), 2);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ICollectionTests', {
    arrayImplementsICollection: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(Bridge.Array.init(1, 0), Bridge.ICollection$1(Bridge.Int)));
    },
    customClassThatShouldImplementICollectionDoesSo: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(Bridge.Array.init(0, null)), Bridge.ICollection$1(String)));
    },
    arrayCastToICollectionCountWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getCount((Bridge.cast(["x", "y", "z"], Bridge.ICollection$1(String)))), 3);
    },
    classImplementingICollectionCountWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]).getCount(), 2);
    },
    classImplementingICollectionCastToICollectionCountWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getCount((Bridge.cast(new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y", "z"]), Bridge.ICollection$1(String)))), 3);
    },
    classImplementingICollectionAddWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        c.add("z");
        Bridge.get(Bridge.Test.Assert).areEqual(c.getCount(), 3);
        Bridge.get(Bridge.Test.Assert).$true(c.contains("z"));
    },
    classImplementingICollectionCastToICollectionAddWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        Bridge.Array.add(c, "z");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getCount(c), 3);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.contains(c, "z"));
    },
    classImplementingICollectionClearWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        c.clear();
        Bridge.get(Bridge.Test.Assert).areEqual(c.getCount(), 0);
    },
    classImplementingICollectionCastToICollectionClearWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        Bridge.Array.clear(c);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getCount(c), 0);
    },
    arrayCastToICollectionContainsWorks: function () {
        var arr = [new Bridge.ClientTest.Collections.Generic.ICollectionTests.C(1), new Bridge.ClientTest.Collections.Generic.ICollectionTests.C(2), new Bridge.ClientTest.Collections.Generic.ICollectionTests.C(3)];
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.contains(arr, new Bridge.ClientTest.Collections.Generic.ICollectionTests.C(2)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Array.contains(arr, new Bridge.ClientTest.Collections.Generic.ICollectionTests.C(4)));
    },
    classImplementingICollectionContainsWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        Bridge.get(Bridge.Test.Assert).$true(c.contains("x"));
        Bridge.get(Bridge.Test.Assert).$false(c.contains("z"));
    },
    classImplementingICollectionCastToICollectionContainsWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.contains(c, "x"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Array.contains(c, "z"));
    },
    classImplementingICollectionRemoveWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        c.remove("x");
        Bridge.get(Bridge.Test.Assert).areEqual(c.getCount(), 1);
        c.remove("y");
        Bridge.get(Bridge.Test.Assert).areEqual(c.getCount(), 0);
    },
    classImplementingICollectionCastToICollectionRemoveWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        Bridge.Array.remove(c, "x");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getCount(c), 1);
        Bridge.Array.remove(c, "y");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getCount(c), 0);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IDictionaryTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.IDictionary$2(Object,Object)), "Bridge.IDictionary$2$Object$Object", "FullName should be correct");
    },
    classImplementsInterfaces: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor"), Bridge.IDictionary$2(Bridge.Int,String)));
    },
    countWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor");
        Bridge.get(Bridge.Test.Assert).areEqual(d.getCount(), 0);

        var d2 = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "c"]
        ] ));
        Bridge.get(Bridge.Test.Assert).areEqual(d2.getCount(), 1);

        var d3 = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor");
        Bridge.get(Bridge.Test.Assert).areEqual(d3.getCount(), 0);
    },
    keysWorks: function () {
        var $t;
        var actualKeys = [3, 6, 9];
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"],
            [6, "z"],
            [9, "x"]
        ] ));
        var keys = d.getKeys();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(keys, Bridge.IEnumerable$1(Bridge.Int)), "IEnumerable<int>");
        Bridge.get(Bridge.Test.Assert).true$1(true, "ICollection<int>");

        var i = 0;
        $t = Bridge.getEnumerator(keys);
        while ($t.moveNext()) {
            var key = $t.getCurrent();
            Bridge.get(Bridge.Test.Assert).areEqual(key, actualKeys[i]);
            i++;
        }
        Bridge.get(Bridge.Test.Assert).areEqual(i, actualKeys.length);
    },
    getItemWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"],
            [6, "z"],
            [9, "x"]
        ] ));

        var di2 = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        Bridge.get(Bridge.Test.Assert).areEqual(d.getItem(9), "x");
        Bridge.get(Bridge.Test.Assert).areEqual(di2.getItem(6), "z");

        try {
            var x = d.getItem(1);
            Bridge.get(Bridge.Test.Assert).fail$1("Should throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
        }

        try {
            var x1 = di2.getItem(1);
            Bridge.get(Bridge.Test.Assert).fail$1("Should throw");
        }
        catch ($e1) {
            $e1 = Bridge.Exception.create($e1);
        }
    },
    valuesWorks: function () {
        var $t;
        var actualValues = ["b", "z", "x"];
        var d2 = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"],
            [6, "z"],
            [9, "x"]
        ] ));
        var values = d2.getValues();
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(values, Bridge.IEnumerable$1(String)));

        var i = 0;

        $t = Bridge.getEnumerator(values);
        while ($t.moveNext()) {
            var val = $t.getCurrent();
            Bridge.get(Bridge.Test.Assert).areEqual(val, actualValues[i]);
            i++;
        }
        Bridge.get(Bridge.Test.Assert).areEqual(i, actualValues.length);
    },
    containsKeyWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"],
            [6, "z"],
            [9, "x"]
        ] ));
        var di2 = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        Bridge.get(Bridge.Test.Assert).$true(d.containsKey(9));
        Bridge.get(Bridge.Test.Assert).$true(di2.containsKey(3));

        Bridge.get(Bridge.Test.Assert).$false(d.containsKey(923));
        Bridge.get(Bridge.Test.Assert).$false(di2.containsKey(353));
    },
    tryGetValueWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"],
            [6, "z"],
            [9, "x"]
        ] ));
        var di2 = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        var outVal = { };

        Bridge.get(Bridge.Test.Assert).$true(d.tryGetValue(9, outVal));
        Bridge.get(Bridge.Test.Assert).areEqual(outVal.v, "x");

        Bridge.get(Bridge.Test.Assert).$true(di2.tryGetValue(3, outVal));
        Bridge.get(Bridge.Test.Assert).areEqual(outVal.v, "b");

        outVal.v = "!!!";
        Bridge.get(Bridge.Test.Assert).$false(d.tryGetValue(923, outVal));
        Bridge.get(Bridge.Test.Assert).areEqual(outVal.v, null);

        outVal.v = "!!!";
        Bridge.get(Bridge.Test.Assert).$false(di2.tryGetValue(353, outVal));
        Bridge.get(Bridge.Test.Assert).areEqual(outVal.v, null);
    },
    addWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor");
        var di = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        d.add(5, "aa");
        Bridge.get(Bridge.Test.Assert).areEqual(d.getItem(5), "aa");
        Bridge.get(Bridge.Test.Assert).areEqual(d.getCount(), 1);

        di.add(3, "bb");
        // TODO Bug
        // Assert.AreEqual(di[3], "bb");
        var s = { };
        di.tryGetValue(3, s);
        Bridge.get(Bridge.Test.Assert).areEqual(s.v, "bb");
        Bridge.get(Bridge.Test.Assert).areEqual(di.getCount(), 2);

        try {
            d.add(5, "zz");
            Bridge.get(Bridge.Test.Assert).fail$1("Should throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
        }
    },
    clearWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"],
            [6, "z"],
            [9, "x"]
        ] ));

        Bridge.get(Bridge.Test.Assert).areEqual(d.getCount(), 3);
        d.clear();
        Bridge.get(Bridge.Test.Assert).areEqual(d.getCount(), 0);
    },
    removeWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"],
            [6, "z"],
            [9, "x"],
            [13, "y"]
        ] ));
        var di = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        Bridge.get(Bridge.Test.Assert).areStrictEqual(d.remove(6), true);
        Bridge.get(Bridge.Test.Assert).areEqual(d.getCount(), 3);
        Bridge.get(Bridge.Test.Assert).$false(d.containsKey(6));

        Bridge.get(Bridge.Test.Assert).areStrictEqual(di.remove(3), true);
        Bridge.get(Bridge.Test.Assert).areEqual(di.getCount(), 2);
        Bridge.get(Bridge.Test.Assert).$false(di.containsKey(3));

        Bridge.get(Bridge.Test.Assert).$true(di.containsKey(13));
    },
    setItemWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"],
            [6, "z"],
            [9, "x"],
            [13, "y"]
        ] ));
        var di = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        d.setItem(3, "check");
        Bridge.get(Bridge.Test.Assert).areEqual(d.getItem(3), "check");
        Bridge.get(Bridge.Test.Assert).$false(d.containsKey(10));

        di.setItem(10, "stuff");
        Bridge.get(Bridge.Test.Assert).areEqual(di.getItem(10), "stuff");
        Bridge.get(Bridge.Test.Assert).$true(di.containsKey(10));
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IEnumerableTests', {
    arrayImplementsIEnumerable: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(Bridge.Array.init(1, 0), Bridge.IEnumerable$1(Bridge.Int)));
    },
    customClassThatShouldImplementIEnumerableDoesSo: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(new Bridge.ClientTest.Collections.Generic.IEnumerableTests.MyEnumerable(), Bridge.IEnumerable$1(String)));
    },
    arrayGetEnumeratorMethodWorks: function () {
        var e = Bridge.getEnumerator(["x", "y", "z"]);
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent(), "x");
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent(), "y");
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent(), "z");
        Bridge.get(Bridge.Test.Assert).$false(e.moveNext());
    },
    arrayCastToIEnumerableCanBeEnumerated: function () {
        var enm = ["x", "y", "z"];
        var e = Bridge.getEnumerator(enm, "$1");
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent$1(), "x");
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent$1(), "y");
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent$1(), "z");
        Bridge.get(Bridge.Test.Assert).$false(e.moveNext());
    },
    classImplementingIEnumerableCanBeEnumerated: function () {
        var enm = new Bridge.ClientTest.Collections.Generic.IEnumerableTests.MyEnumerable();
        var e = enm.getEnumerator$1();
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent$1(), "x");
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent$1(), "y");
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent$1(), "z");
        Bridge.get(Bridge.Test.Assert).$false(e.moveNext());
    },
    classImplementingIEnumerableCastToIEnumerableCanBeEnumerated: function () {
        var enm = new Bridge.ClientTest.Collections.Generic.IEnumerableTests.MyEnumerable();
        var e = Bridge.getEnumerator(enm, "$1");
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent$1(), "x");
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent$1(), "y");
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent$1(), "z");
        Bridge.get(Bridge.Test.Assert).$false(e.moveNext());
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IListTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.IList$1(Object)), "Bridge.IList$1$Object", "FullName should be correct");

        var iList = new Bridge.List$1(Object)();

        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(iList, Bridge.IEnumerable$1(Object)), "Interfaces should contain IEnumerable");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(iList, Bridge.ICollection$1(Object)), "Interfaces should contain ICollection");
    },
    arrayImplementsIList: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(Bridge.Array.init(1, 0), Bridge.IList$1(Bridge.Int)));
    },
    customClassThatShouldImplementIListDoesSo: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(new Bridge.ClientTest.Collections.Generic.IListTests.MyList(Bridge.Array.init(0, null)), Bridge.IList$1(String)));
    },
    arrayCastToIListGetItemWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getItem(l, 1), "y");
    },
    classImplementingIListGetItemWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        Bridge.get(Bridge.Test.Assert).areEqual(l.getItem(1), "y");
    },
    classImplementingIListCastToIListGetItemWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getItem(l, 1), "y");
    },
    arrayCastToIListSetItemWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Array.setItem(l, 1, "a");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getItem(l, 1), "a");
    },
    classImplementingIListSetItemWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        l.setItem(1, "a");
        Bridge.get(Bridge.Test.Assert).areEqual(l.getItem(1), "a");
    },
    classImplementingIListCastToIListSetItemWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        Bridge.Array.setItem(l, 1, "a");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getItem(l, 1), "a");
    },
    arrayCastToIListIndexOfWorks: function () {
        var arr = [new Bridge.ClientTest.Collections.Generic.IListTests.C(1), new Bridge.ClientTest.Collections.Generic.IListTests.C(2), new Bridge.ClientTest.Collections.Generic.IListTests.C(3)];
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.indexOf(arr, new Bridge.ClientTest.Collections.Generic.IListTests.C(2)), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.indexOf(arr, new Bridge.ClientTest.Collections.Generic.IListTests.C(4)), -1);
    },
    classImplementingIListIndexOfWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y"]);
        Bridge.get(Bridge.Test.Assert).areEqual(c.indexOf("y"), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(c.indexOf("z"), -1);
    },
    classImplementingIListCastToIListIndexOfWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y"]);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.indexOf(l, "y"), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.indexOf(l, "z"), -1);
    },
    classImplementingIListInsertWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y"]);
        l.insert(1, "z");
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l.getItems().toArray(), ["x", "z", "y"]);
    },
    classImplementingIListCastToIListInsertWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y"]);
        Bridge.Array.insert(l, 1, "z");
        Bridge.get(Bridge.Test.Assert).areDeepEqual((Bridge.cast(l, Bridge.ClientTest.Collections.Generic.IListTests.MyList)).getItems().toArray(), ["x", "z", "y"]);
    },
    classImplementingIListRemoveAtWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        l.removeAt(1);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l.getItems().toArray(), ["x", "z"]);
    },
    classImplementingIListCastToIListRemoveAtWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        Bridge.Array.removeAt(l, 1);
        Bridge.get(Bridge.Test.Assert).areDeepEqual((Bridge.cast(l, Bridge.ClientTest.Collections.Generic.IListTests.MyList)).getItems().toArray(), ["x", "z"]);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IteratorBlockTests', {
    assertEqual: function (actual, expected, message) {
        if (message === void 0) { message = null; }
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.replaceAll(actual, "\r\n", "\n"), Bridge.String.replaceAll(expected, "\r\n", "\n"), message);
    },
    typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable: function () {
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(new Bridge.Text.StringBuilder()).getEnumerator(0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(enm, Bridge.IEnumerator));
    },
    enumeratingIEnumeratorIteratorToEndWorks: function () {
        //TODO expected for v1: yield iterator works with no state machine
        var sb = new Bridge.Text.StringBuilder();
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerator(2);

        while (enm.moveNext()) {
            sb.appendLine("got " + enm.getCurrent$1());
        }

        this.assertEqual(sb.toString(), "yielding 0\r\nyielding 1\r\nyielding -1\r\nin finally\r\ngot 0\r\ngot 1\r\ngot -1\r\n");
    },
    prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks: function () {
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerator(5);

        for (var i = 0; i < 2; i++) {
            enm.moveNext();
            sb.appendLine("got " + enm.getCurrent$1());
        }
        enm.dispose();

        this.assertEqual(sb.toString(), "yielding 0\r\nyielding 1\r\nyielding 2\r\nyielding 3\r\nyielding 4\r\nyielding -1\r\nin finally\r\ngot 0\r\ngot 1\r\n");
    },
    exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks: function () {
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();

        try {
            var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumeratorThrows();
            for (var i = 0; i < 100; i++) {
                enm.moveNext();
                sb.appendLine("got " + enm.getCurrent$1());
            }
            Bridge.get(Bridge.Test.Assert).fail$1("Should have thrown an exception in the loop");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            sb.appendLine("caught exception");
        }

        this.assertEqual(sb.toString(), "yielding 1\r\nyielding 2\r\nthrowing\r\nin finally\r\ncaught exception\r\n");
    },
    typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface: function () {
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(new Bridge.Text.StringBuilder()).getEnumerable(0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(enm, Bridge.IEnumerable));
    },
    enumeratingIEnumerableIteratorToEndWorks: function () {
        var $t, $t1;
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerable(2);

        $t = Bridge.getEnumerator(enm);
        while ($t.moveNext()) {
            var i = $t.getCurrent();
            sb.appendLine("got " + i);
        }
        sb.appendLine("-");
        $t1 = Bridge.getEnumerator(enm);
        while ($t1.moveNext()) {
            var i1 = $t1.getCurrent();
            sb.appendLine("got " + i1);
        }

        this.assertEqual(sb.toString(), "yielding 0\r\nyielding 1\r\nyielding -1\r\nin finally\r\ngot 0\r\ngot 1\r\ngot -1\r\n-\r\ngot 0\r\ngot 1\r\ngot -1\r\n");
    },
    prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks: function () {
        var $t;
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();
        var n = 0;
        $t = Bridge.getEnumerator(new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerable(5));
        while ($t.moveNext()) {
            var i = $t.getCurrent();
            sb.appendLine("got " + i);
            if (++n === 2) {
                break;
            }
        }

        this.assertEqual(sb.toString(), "yielding 0\r\nyielding 1\r\nyielding 2\r\nyielding 3\r\nyielding 4\r\nyielding -1\r\nin finally\r\ngot 0\r\ngot 1\r\n");
    },
    exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks: function () {
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();

        try {
            var enumerable = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerableThrows(5);

            var enumerator = Bridge.getEnumerator(enumerable, "$1");
            for (var i = 0; i < 100; i++) {
                enumerator.moveNext();
                sb.appendLine("got " + enumerator.getCurrent$1());
            }
            Bridge.get(Bridge.Test.Assert).fail$1("Should have thrown");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            sb.appendLine("caught exception");
        }

        this.assertEqual(sb.toString(), "yielding 1\r\nyielding 2\r\nthrowing\r\nin finally\r\ncaught exception\r\n");
    },
    enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters: function () {
        var $t, $t1;
        var sb = new Bridge.Text.StringBuilder();

        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerableMutateParameter(3);
        $t = Bridge.getEnumerator(enm);
        while ($t.moveNext()) {
            var i = $t.getCurrent();
            sb.appendLine(i.toString());
        }
        $t1 = Bridge.getEnumerator(enm);
        while ($t1.moveNext()) {
            var i1 = $t1.getCurrent();
            sb.appendLine(i1.toString());
        }

        this.assertEqual(sb.toString(), "3\r\n2\r\n1\r\n3\r\n2\r\n1\r\n");
    },
    differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals: function () {
        var sb = new Bridge.Text.StringBuilder();

        var enumerable = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerableSimple(3);
        var enm1 = Bridge.getEnumerator(enumerable, "$1");
        var enm2 = Bridge.getEnumerator(enumerable, "$1");

        while (enm1.moveNext()) {
            enm2.moveNext();
            sb.appendLine(enm1.getCurrent$1().toString());
            sb.appendLine(enm2.getCurrent$1().toString());
        }

        this.assertEqual(sb.toString(), "0\r\n0\r\n1\r\n1\r\n2\r\n2\r\n-1\r\n-1\r\n");
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ListTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.List$1(Bridge.Int)), "Bridge.List$1$Bridge.Int", "GetClassName()");
        var list = new Bridge.List$1(Bridge.Int)();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(list, Bridge.List$1(Bridge.Int)), "is int[] should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(list, Bridge.IList$1(Bridge.Int)), "is IList<int> should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(list, Bridge.ICollection$1(Bridge.Int)), "is ICollection<int> should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(list, Bridge.IEnumerable$1(Bridge.Int)), "is IEnumerable<int> should be true");
    },
    defaultConstructorWorks: function () {
        var l = new Bridge.List$1(Bridge.Int)();
        Bridge.get(Bridge.Test.Assert).areEqual(l.getCount(), 0);
    },
    constructorWithCapacityWorks: function () {
        var l = new Bridge.List$1(Bridge.Int)(12);
        Bridge.get(Bridge.Test.Assert).areEqual(l.getCount(), 0);
    },
    constructingFromArrayWorks: function () {
        var arr = [1, 4, 7, 8];
        var l = new Bridge.List$1(Bridge.Int)(arr);
        Bridge.get(Bridge.Test.Assert).$false(l === arr);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l.toArray(), arr);
    },
    constructingFromListWorks: function () {
        var arr = new Bridge.List$1(Bridge.Int)([1, 4, 7, 8]);
        var l = new Bridge.List$1(Bridge.Int)(arr);
        Bridge.get(Bridge.Test.Assert).$false(l === arr);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l, arr);
    },
    constructingFromIEnumerableWorks: function () {
        var enm = Bridge.cast(new Bridge.List$1(Bridge.Int)([1, 4, 7, 8]), Bridge.IEnumerable$1(Bridge.Int));
        var l = new Bridge.List$1(Bridge.Int)(enm);
        Bridge.get(Bridge.Test.Assert).$false(l === enm);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l.toArray(), [1, 4, 7, 8]);
    },
    countWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(new Bridge.List$1(String)().getCount(), 0);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"]
        ] ).getCount(), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"]
        ] ).getCount(), 2);
    },
    indexingWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"]
        ] ).getItem(0), "x");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"]
        ] ).getItem(1), "y");
    },
    foreachWorks: function () {
        var $t;
        var result = "";
        $t = Bridge.getEnumerator(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"]
        ] ));
        while ($t.moveNext()) {
            var s = $t.getCurrent();
            result += s;
        }
        Bridge.get(Bridge.Test.Assert).areEqual(result, "xy");
    },
    getEnumeratorWorks: function () {
        var e = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"]
        ] ).getEnumerator();
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent$1(), "x");
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent$1(), "y");
        Bridge.get(Bridge.Test.Assert).$false(e.moveNext());
    },
    addWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"]
        ] );
        l.add("a");
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l.toArray(), ["x", "y", "a"]);
    },
    addRangeWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"]
        ] );
        l.addRange(["a", "b", "c"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l.toArray(), ["x", "y", "a", "b", "c"]);
    },
    binarySearch1Works: function () {
        var arr = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1],
            [2],
            [3],
            [3],
            [4],
            [5]
        ] );

        Bridge.get(Bridge.Test.Assert).areEqual(arr.binarySearch(3), 2);
        Bridge.get(Bridge.Test.Assert).$true(arr.binarySearch(6) < 0);
    },
    binarySearch2Works: function () {
        var arr = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1],
            [2],
            [3],
            [3],
            [4],
            [5]
        ] );

        Bridge.get(Bridge.Test.Assert).areEqual(arr.binarySearch(3, 2, 3), 3);
        Bridge.get(Bridge.Test.Assert).$true(arr.binarySearch(2, 2, 4) < 0);
    },
    binarySearch3Works: function () {
        var arr = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1],
            [2],
            [3],
            [3],
            [4],
            [5]
        ] );

        Bridge.get(Bridge.Test.Assert).areEqual(arr.binarySearch(3, new Bridge.ClientTest.Collections.Generic.ListTests.TestReverseComparer()), 2);
        Bridge.get(Bridge.Test.Assert).areEqual(arr.binarySearch(6, new Bridge.ClientTest.Collections.Generic.ListTests.TestReverseComparer()), -1);
    },
    binarySearch4Works: function () {
        var arr = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1],
            [2],
            [3],
            [3],
            [4],
            [5]
        ] );

        Bridge.get(Bridge.Test.Assert).areEqual(arr.binarySearch(3, 2, 3, new Bridge.ClientTest.Collections.Generic.ListTests.TestReverseComparer()), 3);
        Bridge.get(Bridge.Test.Assert).$true(arr.binarySearch(3, 2, 4, new Bridge.ClientTest.Collections.Generic.ListTests.TestReverseComparer()) < 0);
    },
    clearWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"]
        ] );
        l.clear();
        Bridge.get(Bridge.Test.Assert).areEqual(0, l.getCount());
    },
    containsWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"]
        ] );
        Bridge.get(Bridge.Test.Assert).$true(list.contains("x"));
        Bridge.get(Bridge.Test.Assert).$false(list.contains("z"));
    },
    containsUsesEqualsMethod: function () {
        var l = Bridge.merge(new Bridge.List$1(Bridge.ClientTest.Collections.Generic.ListTests.C)(), [
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(1)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(3)]
        ] );
        Bridge.get(Bridge.Test.Assert).$true(l.contains(new Bridge.ClientTest.Collections.Generic.ListTests.C(2)));
        Bridge.get(Bridge.Test.Assert).$false(l.contains(new Bridge.ClientTest.Collections.Generic.ListTests.C(4)));
    },
    sliceWithoutEndWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"],
            ["b"],
            ["c"],
            ["d"]
        ] ).slice(2).toArray(), ["c", "d"]);
    },
    sliceWithEndWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"],
            ["b"],
            ["c"],
            ["d"]
        ] ).slice(1, 3).toArray(), ["b", "c"]);
    },
    foreachWithListItemCallbackWorks: function () {
        var result = "";
        Bridge.Linq.Enumerable.from(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"],
            ["b"],
            ["c"]
        ] )).forEach(function (s) {
            result += s;
        });
        Bridge.get(Bridge.Test.Assert).areEqual(result, "abc");
    },
    foreachWithListCallbackWorks: function () {
        var result = "";
        Bridge.Linq.Enumerable.from(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"],
            ["b"],
            ["c"]
        ] )).forEach(function (s, i) {
            result += s + i;
        });
        Bridge.get(Bridge.Test.Assert).areEqual(result, "a0b1c2");
    },
    indexOfWithoutStartIndexWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(["a", "b", "c", "b"].indexOf("b"), 1);
    },
    indexOfWithoutStartIndexUsesEqualsMethod: function () {
        var l = Bridge.merge(new Bridge.List$1(Bridge.ClientTest.Collections.Generic.ListTests.C)(), [
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(1)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(3)]
        ] );
        Bridge.get(Bridge.Test.Assert).areEqual(l.indexOf(new Bridge.ClientTest.Collections.Generic.ListTests.C(2)), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(l.indexOf(new Bridge.ClientTest.Collections.Generic.ListTests.C(4)), -1);
    },
    indexOfWithStartIndexWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"],
            ["b"],
            ["c"],
            ["b"]
        ] ).indexOf("b", 2), 3);
    },
    indexOfWithStartIndexUsesEqualsMethod: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.merge(new Bridge.List$1(Bridge.ClientTest.Collections.Generic.ListTests.C)(), [
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(1)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(3)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)]
        ] ).indexOf(new Bridge.ClientTest.Collections.Generic.ListTests.C(2), 2), 3);
    },
    insertWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"]
        ] );
        l.insert(1, "a");
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l.toArray(), ["x", "a", "y"]);
    },
    insertRangeWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"]
        ] );

        l.insertRange(1, ["a", "b"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l.toArray(), ["x", "a", "b", "y"]);

        l.insertRange(0, ["q", "q"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(l.toArray(), ["q", "q", "x", "a", "b", "y"]);
    },
    joinWithoutDelimiterWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"],
            ["b"],
            ["c"],
            ["b"]
        ] ).join(), "a,b,c,b");
    },
    joinWithDelimiterWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"],
            ["b"],
            ["c"],
            ["b"]
        ] ).join("|"), "a|b|c|b");
    },
    removeWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"],
            ["b"],
            ["c"],
            ["a"]
        ] );
        Bridge.get(Bridge.Test.Assert).$true(list.remove("a"));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(list.toArray(), ["b", "c", "a"]);
    },
    removeReturnsFalseIfTheElementWasNotFound: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"],
            ["b"],
            ["c"],
            ["a"]
        ] );
        Bridge.get(Bridge.Test.Assert).$false(list.remove("d"));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(list.toArray(), ["a", "b", "c", "a"]);
    },
    removeCanRemoveNullItem: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"],
            [null],
            ["c"],
            [null]
        ] );
        Bridge.get(Bridge.Test.Assert).$true(list.remove(null));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(list.toArray(), ["a", "c", null]);
    },
    removeUsesEqualsMethod: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.ClientTest.Collections.Generic.ListTests.C)(), [
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(1)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(3)]
        ] );
        list.remove(new Bridge.ClientTest.Collections.Generic.ListTests.C(2));
        Bridge.get(Bridge.Test.Assert).areEqual(list.getCount(), 2);
        Bridge.get(Bridge.Test.Assert).areEqual(list.getItem(0).i, 1);
        Bridge.get(Bridge.Test.Assert).areEqual(list.getItem(1).i, 3);
    },
    removeAtWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"],
            ["b"],
            ["c"],
            ["a"]
        ] );
        list.removeAt(1);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(list.toArray(), ["a", "c", "a"]);
    },
    removeRangeWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"],
            ["b"],
            ["c"],
            ["d"]
        ] );
        list.removeRange(1, 2);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(list.toArray(), ["a", "d"]);
    },
    reverseWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1],
            [3],
            [4],
            [1],
            [3],
            [2]
        ] );
        list.reverse();
        Bridge.get(Bridge.Test.Assert).areDeepEqual(list.toArray(), [2, 3, 1, 4, 3, 1]);
    },
    sortWithDefaultCompareWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1],
            [6],
            [6],
            [4],
            [2]
        ] );
        list.sort();
        Bridge.get(Bridge.Test.Assert).areDeepEqual(list.toArray(), [1, 2, 4, 6, 6]);
    },
    sortWithCompareCallbackWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1],
            [6],
            [6],
            [4],
            [2]
        ] );
        list.sort(function (x, y) {
            return y - x;
        });
        Bridge.get(Bridge.Test.Assert).areDeepEqual(list.toArray(), [6, 6, 4, 2, 1]);
    },
    sortWithIComparerWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1],
            [6],
            [6],
            [4],
            [2]
        ] );
        list.sort(Bridge.fn.bind(new Bridge.ClientTest.Collections.Generic.ListTests.TestReverseComparer(), new Bridge.ClientTest.Collections.Generic.ListTests.TestReverseComparer().compare));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(list.toArray(), [6, 6, 4, 2, 1]);
    },
    foreachWhenCastToIEnumerableWorks: function () {
        var $t;
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"]
        ] );
        var result = "";
        $t = Bridge.getEnumerator(list);
        while ($t.moveNext()) {
            var s = $t.getCurrent();
            result += s;
        }
        Bridge.get(Bridge.Test.Assert).areEqual(result, "xy");
    },
    iEnumerableGetEnumeratorWorks: function () {
        var l = Bridge.cast(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"]
        ] ), Bridge.IEnumerable$1(String));
        var e = Bridge.getEnumerator(l, "$1");
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent$1(), "x");
        Bridge.get(Bridge.Test.Assert).$true(e.moveNext());
        Bridge.get(Bridge.Test.Assert).areEqual(e.getCurrent$1(), "y");
        Bridge.get(Bridge.Test.Assert).$false(e.moveNext());
    },
    iCollectionCountWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"],
            ["z"]
        ] );
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getCount(l), 3);
    },
    iCollectionAddWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"],
            ["z"]
        ] );
        Bridge.Array.add(l, "a");
        Bridge.get(Bridge.Test.Assert).areDeepEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), ["x", "y", "z", "a"]);
    },
    iCollectionClearWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"],
            ["z"]
        ] );
        Bridge.Array.clear(l);
        Bridge.get(Bridge.Test.Assert).areDeepEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), Bridge.Array.init(0, null));
    },
    iCollectionContainsWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"],
            ["z"]
        ] );
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.contains(l, "y"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Array.contains(l, "a"));
    },
    iCollectionContainsUsesEqualsMethod: function () {
        var l = Bridge.merge(new Bridge.List$1(Bridge.ClientTest.Collections.Generic.ListTests.C)(), [
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(1)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(3)]
        ] );
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.contains(l, new Bridge.ClientTest.Collections.Generic.ListTests.C(2)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Array.contains(l, new Bridge.ClientTest.Collections.Generic.ListTests.C(4)));
    },
    iCollectionRemoveWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"],
            ["z"]
        ] );
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.remove(l, "y"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Array.remove(l, "a"));

        var ll = Bridge.as(l, Bridge.List$1(String));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(ll.toArray(), ["x", "z"]);
    },
    iCollectionRemoveCanRemoveNullItem: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"],
            [null],
            ["c"],
            [null]
        ] );
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.remove(list, null));
        Bridge.get(Bridge.Test.Assert).areDeepEqual((Bridge.cast(list, Bridge.List$1(String))).toArray(), ["a", "c", null]);
    },
    iCollectionRemoveUsesEqualsMethod: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.ClientTest.Collections.Generic.ListTests.C)(), [
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(1)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(3)]
        ] );
        Bridge.Array.remove(list, new Bridge.ClientTest.Collections.Generic.ListTests.C(2));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getCount(list), 2);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getItem(list, 0).i, 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getItem(list, 1).i, 3);
    },
    iListIndexingWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"],
            ["z"]
        ] );
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getItem(l, 1), "y");
        Bridge.Array.setItem(l, 1, "a");
        Bridge.get(Bridge.Test.Assert).areDeepEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), ["x", "a", "z"]);
    },
    iListIndexOfWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"],
            ["z"]
        ] );
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.indexOf(l, "y"), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.indexOf(l, "a"), -1);
    },
    iListIndexOfUsesEqualsMethod: function () {
        var l = Bridge.merge(new Bridge.List$1(Bridge.ClientTest.Collections.Generic.ListTests.C)(), [
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(1)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)],
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(3)]
        ] );
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.indexOf(l, new Bridge.ClientTest.Collections.Generic.ListTests.C(2)), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.indexOf(l, new Bridge.ClientTest.Collections.Generic.ListTests.C(4)), -1);
    },
    iListInsertWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"],
            ["z"]
        ] );
        Bridge.Array.insert(l, 1, "a");
        Bridge.get(Bridge.Test.Assert).areDeepEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), ["x", "a", "y", "z"]);
    },
    iListRemoveAtWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"],
            ["y"],
            ["z"]
        ] );
        Bridge.Array.removeAt(l, 1);
        Bridge.get(Bridge.Test.Assert).areDeepEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), ["x", "z"]);
    },
    toArrayWorks: function () {
        var l = new Bridge.List$1(String)();
        l.add("a");
        l.add("b");
        var actual = l.toArray();
        Bridge.get(Bridge.Test.Assert).$false(l === actual);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(actual, Array));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(actual, ["a", "b"]);
    }
});

Bridge.define('Bridge.ClientTest.CultureInfoTests', {
    typePropertiesAreCorrect: function () {
        var culture = Bridge.get(Bridge.CultureInfo).invariantCulture;
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.CultureInfo), "Bridge.CultureInfo");
        Bridge.get(Bridge.Test.Assert).$true(true);
    },
    getFormatWorks: function () {
        var culture = Bridge.get(Bridge.CultureInfo).invariantCulture;
        Bridge.get(Bridge.Test.Assert).areEqual(culture.getFormat(Bridge.Int), null);
        Bridge.get(Bridge.Test.Assert).areEqual(culture.getFormat(Bridge.NumberFormatInfo), culture.numberFormat);
        Bridge.get(Bridge.Test.Assert).areEqual(culture.getFormat(Bridge.DateTimeFormatInfo), culture.dateTimeFormat);
    },
    invariantWorks: function () {
        var culture = Bridge.get(Bridge.CultureInfo).invariantCulture;
        Bridge.get(Bridge.Test.Assert).areEqual(culture.name, "iv");
        Bridge.get(Bridge.Test.Assert).areEqual(culture.dateTimeFormat, Bridge.DateTimeFormatInfo.invariantInfo);
        Bridge.get(Bridge.Test.Assert).areEqual(culture.numberFormat, Bridge.NumberFormatInfo.invariantInfo);
    }
});

Bridge.define('Bridge.ClientTest.DateTimeFormatInfoTests', {
    typePropertiesAreCorrect: function () {
        var format = Bridge.DateTimeFormatInfo.invariantInfo;
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.DateTimeFormatInfo), "Bridge.DateTimeFormatInfo");
        Bridge.get(Bridge.Test.Assert).$true(true);
    },
    getFormatWorks: function () {
        var format = Bridge.DateTimeFormatInfo.invariantInfo;
        Bridge.get(Bridge.Test.Assert).areEqual(format.getFormat(Bridge.Int), null);
        Bridge.get(Bridge.Test.Assert).areEqual(format.getFormat(Bridge.DateTimeFormatInfo), format);
    },
    invariantWorks: function () {
        var format = Bridge.DateTimeFormatInfo.invariantInfo;
        Bridge.get(Bridge.Test.Assert).areEqual(format.amDesignator, "AM");
        Bridge.get(Bridge.Test.Assert).areEqual(format.pmDesignator, "PM");

        Bridge.get(Bridge.Test.Assert).areEqual(format.dateSeparator, "/");
        Bridge.get(Bridge.Test.Assert).areEqual(format.timeSeparator, ":");

        Bridge.get(Bridge.Test.Assert).areEqual(format.sortableDateTimePattern, "yyyy'-'MM'-'dd'T'HH':'mm':'ss");

        Bridge.get(Bridge.Test.Assert).areEqual(format.longDatePattern, "dddd, MMMM dd, yyyy");
        Bridge.get(Bridge.Test.Assert).areEqual(format.shortDatePattern, "M/d/yyyy");

        Bridge.get(Bridge.Test.Assert).areEqual(format.longTimePattern, "h:mm:ss tt");
        Bridge.get(Bridge.Test.Assert).areEqual(format.shortTimePattern, "h:mm tt");

        Bridge.get(Bridge.Test.Assert).areEqual(format.firstDayOfWeek, 0);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(format.dayNames, ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);

        Bridge.get(Bridge.Test.Assert).areDeepEqual(format.monthNames, ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""]);
    }
});

Bridge.define('Bridge.ClientTest.DecimalMathTests', {
    statics: {
        useLogging: false,
        jSMode: true,
        NoDotNetDiff: false,
        HasDotNetDiff: true,
        config: {
            init: function () {
                this.maxValue = Bridge.Decimal.MaxValue;
                this.minValue = Bridge.Decimal.MinValue;
                this.inputAdd = Bridge.Array.create(null, [[Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(47.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(-47.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(-47.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(47.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.33478923476"), Bridge.Decimal(47.0), Bridge.Decimal("443534569034923.33478923476")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal(47.000000000001), Bridge.Decimal("443534569034923.12345678901335")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal("9436905724146.297872340425532"), Bridge.Decimal("452971474759022.42132912943788")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal(17.0), Bridge.Decimal("4435345690348766678656790470")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(17.2345324), Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal("4435345690348766678656790470.2")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).HasDotNetDiff, "0.00000000000005", Bridge.Decimal("-943456769034871.4234"), Bridge.Decimal("47.00000000003455"), Bridge.Decimal("-943456769034824.4233999999654")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("6999545690348766678656790453"), Bridge.Decimal(-13.0), Bridge.Decimal("6999545690348766678656790440")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(11.0), Bridge.Decimal("-6435345690348766678656790453"), Bridge.Decimal("-6435345690348766678656790442")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue, Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal.MinusOne, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.Decimal("79228162514264337593543950334")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.Decimal.MinusOne, Bridge.Decimal("79228162514264337593543950334")]], 15, 5);
                this.inputSubtract = Bridge.Array.create(null, [[Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(-47.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(47.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(47.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(-47.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.33478923476"), Bridge.Decimal(47.0), Bridge.Decimal("443534569034829.33478923476")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal(47.000000000001), Bridge.Decimal("443534569034829.12345678901135")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal("9436905724146.297872340425532"), Bridge.Decimal("434097663310729.82558444858682")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal(17.0), Bridge.Decimal("4435345690348766678656790436")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(17.2345324), Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal("-4435345690348766678656790435.8")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).HasDotNetDiff, Bridge.Decimal("-5E-14"), Bridge.Decimal("-943456769034871.4234"), Bridge.Decimal("47.00000000003455"), Bridge.Decimal("-943456769034918.4234000000346")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("6999545690348766678656790453"), Bridge.Decimal(-13.0), Bridge.Decimal("6999545690348766678656790466")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(11.0), Bridge.Decimal("-6435345690348766678656790453"), Bridge.Decimal("6435345690348766678656790464")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal.MinusOne, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue, Bridge.Decimal("79228162514264337593543950334")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.Decimal.One, Bridge.Decimal("79228162514264337593543950334")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue, Bridge.Decimal.MinusOne, Bridge.Decimal("-79228162514264337593543950334")]], 16, 5);
                this.inputMultiply = Bridge.Array.create(null, [[Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(0.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.33478923476"), Bridge.Decimal(0.47), Bridge.Decimal("208461247446391.8773509403372")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("43534569034876.12345678901235"), Bridge.Decimal(47.000000000001), Bridge.Decimal("2046124744639221.3370381184566")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("44.353456903487612345678901235"), Bridge.Decimal("9436905724146.297872340425532"), Bridge.Decimal("418559391338198.38088395328596")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal(0.17), Bridge.Decimal("754008767359290335371654377.01")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(17.2345324), Bridge.Decimal("443534569034876667865679045.37"), Bridge.Decimal("7644110900551618662335084355.4")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("-943456769034871.4234"), Bridge.Decimal("0.4700000000003455"), Bridge.Decimal("-443424681446715.53331170154808")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).HasDotNetDiff, Bridge.Decimal(-0.01), Bridge.Decimal("6999545690348766678656790453"), Bridge.Decimal(-0.13), Bridge.Decimal("-909940939745339668225382758.9")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).HasDotNetDiff, Bridge.Decimal(0.0001), Bridge.Decimal(0.11), Bridge.Decimal("-64353456903487666786567904.535"), Bridge.Decimal("-7078880259383643346522469.4988")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.Decimal.MinusOne, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal.MinusOne, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.Decimal.One, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue, Bridge.Decimal.MinusOne, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue]], 17, 5);
                this.inputDivide = Bridge.Array.create(null, [[Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal.One, Bridge.Decimal(2.0), Bridge.Decimal(0.5)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(3.0), Bridge.Decimal(4.0), Bridge.Decimal(0.75)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).HasDotNetDiff, "-0.00000000000000000000000000003", Bridge.Decimal(5.0), Bridge.Decimal(6.0), Bridge.Decimal("0.8333333333333333333333333333")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(7.0), Bridge.Decimal(8.0), Bridge.Decimal(0.875)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).HasDotNetDiff, "-0.0000000000000005", Bridge.Decimal("443534569034876.33478923476"), Bridge.Decimal(47.0), Bridge.Decimal("9436905724146.304995515633191")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).HasDotNetDiff, "0.0000000000000002", Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal(47.000000000001), Bridge.Decimal("9436905724146.099713852443963")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal("9436905724146.297872340425532"), Bridge.Decimal("47.000000000000013082337857467")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal(17.0), Bridge.Decimal("260902687667574510509222967.82")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).HasDotNetDiff, "0.0000000000000000000000000000142752779107986686908967873", Bridge.Decimal(17.2345324), Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal("3.9000000000000004E-27")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("-943456769034871.4234"), Bridge.Decimal("47.00000000003455"), Bridge.Decimal("-20073548277322.933666106776439")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("6999545690348766678656790453"), Bridge.Decimal(-13.0), Bridge.Decimal("-538426591565289744512060804.08")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).HasDotNetDiff, "0.0000000000000000000000000000093098847039324132480985641", Bridge.Decimal(11.0), Bridge.Decimal("-6435345690348766678656790453"), Bridge.Decimal("-1.7000000000000002E-27")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue, Bridge.Decimal.MinusOne], [Bridge.get(Bridge.ClientTest.DecimalMathTests).HasDotNetDiff, "-0.000000000000000000000000000012621774483536188886587657045", Bridge.Decimal.MinusOne, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue, Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.Decimal.MinusOne, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue, Bridge.Decimal.MinusOne, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue]], 20, 5);
                this.inputRemainder = Bridge.Array.create(null, [[Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.33478923476"), Bridge.Decimal(47.0), Bridge.Decimal(14.33478923476)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal(47.000000000001), Bridge.Decimal(4.68655106486635)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).HasDotNetDiff, Bridge.Decimal("4E-15"), Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal("9436905724146.297872340425532"), Bridge.Decimal(0.12345678901235)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal(17.0), Bridge.Decimal(14.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(17.2345324), Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal(17.2345324)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).HasDotNetDiff, Bridge.Decimal("1E-13"), Bridge.Decimal("-943456769034871.4234"), Bridge.Decimal("47.00000000003455"), Bridge.Decimal(-43.8823070185248)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("6999545690348766678656790453"), Bridge.Decimal(-13.0), Bridge.Decimal.One], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(11.0), Bridge.Decimal("-6435345690348766678656790453"), Bridge.Decimal(11.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal.MinusOne, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue, Bridge.Decimal.MinusOne], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.Decimal.One, Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue, Bridge.Decimal.MinusOne, Bridge.Decimal(0.0)]], 16, 5);
            }
        },
        testSubtractOperator: function () {
            Bridge.get(Bridge.ClientTest.DecimalMathTests).runOperationSet$1(Bridge.get(Bridge.ClientTest.DecimalMathTests).inputSubtract, "SubtractOperator", function (a, b) {
                return a.sub(b);
            });
        },
        testRemainderOperator: function () {
            Bridge.get(Bridge.ClientTest.DecimalMathTests).runOperationSet$1(Bridge.get(Bridge.ClientTest.DecimalMathTests).inputRemainder, "RemainderOperator", function (a, b) {
                return a.mod(b);
            });
        },
        testMultiplyOperator: function () {
            Bridge.get(Bridge.ClientTest.DecimalMathTests).runOperationSet$1(Bridge.get(Bridge.ClientTest.DecimalMathTests).inputMultiply, "MultiplyOperator", function (a, b) {
                return a.mul(b);
            });
        },
        testDivideOperator: function () {
            Bridge.get(Bridge.ClientTest.DecimalMathTests).runOperationSet$1(Bridge.get(Bridge.ClientTest.DecimalMathTests).inputDivide, "DivideOperator", function (a, b) {
                return a.div(b);
            });
        },
        testAddOperator: function () {
            Bridge.get(Bridge.ClientTest.DecimalMathTests).runOperationSet$1(Bridge.get(Bridge.ClientTest.DecimalMathTests).inputAdd, "AddOperator", function (a, b) {
                return a.add(b);
            });
        },
        testAddMethod: function () {
            Bridge.get(Bridge.ClientTest.DecimalMathTests).runOperationSet$1(Bridge.get(Bridge.ClientTest.DecimalMathTests).inputAdd, "AddMethod", function (a, b) {
                return a.add(b);
            });
        },
        testDivideMethod: function () {
            Bridge.get(Bridge.ClientTest.DecimalMathTests).runOperationSet$1(Bridge.get(Bridge.ClientTest.DecimalMathTests).inputDivide, "DivideMethod", function (a, b) {
                return a.div(b);
            });
        },
        testMultiplyMethod: function () {
            Bridge.get(Bridge.ClientTest.DecimalMathTests).runOperationSet$1(Bridge.get(Bridge.ClientTest.DecimalMathTests).inputMultiply, "MiltiplyMethod", function (a, b) {
                return a.mul(b);
            });
        },
        testRemainderMethod: function () {
            Bridge.get(Bridge.ClientTest.DecimalMathTests).runOperationSet$1(Bridge.get(Bridge.ClientTest.DecimalMathTests).inputRemainder, "RemainderMethod", function (a, b) {
                return a.mod(b);
            });
        },
        testSubtractMethod: function () {
            Bridge.get(Bridge.ClientTest.DecimalMathTests).runOperationSet$1(Bridge.get(Bridge.ClientTest.DecimalMathTests).inputSubtract, "SubtractMethod", function (a, b) {
                return a.sub(b);
            });
        },
        testCeilingMethod: function () {
            var input = Bridge.Array.create(null, [[Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("-443534569034876.12345678901235"), Bridge.Decimal(-443534569034876.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("-443534569034876.82345678901235"), Bridge.Decimal(-443534569034876.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal(443534569034877.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.62345678901235"), Bridge.Decimal(443534569034877.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.49999999999999"), Bridge.Decimal(443534569034877.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.50000000000001"), Bridge.Decimal(443534569034877.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.99999999999999"), Bridge.Decimal(443534569034877.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal("4435345690348766678656790453")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(17.9345324), Bridge.Decimal(18.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("-0.9434567690348714234"), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("6999545690348766678656790453"), Bridge.Decimal("6999545690348766678656790453")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal.MinusOne, Bridge.Decimal.MinusOne], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue]], 15, 4);

            Bridge.get(Bridge.ClientTest.DecimalMathTests).runOperationSet(input, "CeilingMethod", function (a) {
                return a.ceil();
            });
        },
        testFloorMethod: function () {
            var input = Bridge.Array.create(null, [[Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(0.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("-443534569034876.12345678901235"), Bridge.Decimal(-443534569034877.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("-443534569034876.82345678901235"), Bridge.Decimal(-443534569034877.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal(443534569034876.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.62345678901235"), Bridge.Decimal(443534569034876.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.49999999999999"), Bridge.Decimal(443534569034876.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.50000000000001"), Bridge.Decimal(443534569034876.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("443534569034876.99999999999999"), Bridge.Decimal(443534569034876.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal("4435345690348766678656790453")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal(17.9345324), Bridge.Decimal(17.0)], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("-0.9434567690348714234"), Bridge.Decimal.MinusOne], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal("6999545690348766678656790453"), Bridge.Decimal("6999545690348766678656790453")], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue, Bridge.get(Bridge.ClientTest.DecimalMathTests).maxValue], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.Decimal.MinusOne, Bridge.Decimal.MinusOne], [Bridge.get(Bridge.ClientTest.DecimalMathTests).NoDotNetDiff, null, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue, Bridge.get(Bridge.ClientTest.DecimalMathTests).minValue]], 15, 4);

            Bridge.get(Bridge.ClientTest.DecimalMathTests).runOperationSet(input, "FloorMethod", function (a) {
                return a.floor();
            });
        },
        runOperationSet$1: function (input, name, operation) {
            var logger = new Bridge.ClientTest.DecimalMathTests.Logger();
            logger.onLogBegin(name);

            for (var i = Bridge.Array.getLower(input, 0); i <= (Bridge.Array.getLength(input, 0) - 1); i++) {
                var lowerBound = Bridge.Array.getLower(input, 1);
                var dotNetDiff = Bridge.get(Bridge.ClientTest.DecimalMathTests).parseDotNetDiff(input, i, lowerBound);

                var a = input.get([i, lowerBound + 2]);
                var b = input.get([i, lowerBound + 3]);
                var expected = input.get([i, lowerBound + 4]);
                var result = Bridge.get(Bridge.ClientTest.DecimalMathTests).runOperation(Bridge.cast(a, Bridge.Decimal), Bridge.cast(b, Bridge.Decimal), operation);

                logger.onLog([dotNetDiff, a, b, result]);

                var diff = Bridge.get(Bridge.ClientTest.DecimalMathTests).getDifference(expected, result);
                var diffReport = Bridge.get(Bridge.ClientTest.DecimalMathTests).getDifferenceReport(diff);

                Bridge.get(Bridge.ClientTest.DecimalMathTests).assertDecimal(dotNetDiff, expected, result, diffReport, Bridge.String.format("{0} for row {1} with operand {2} and {3} .NetDiff {4}{5}", name, i, a, b, dotNetDiff, diffReport));
            }

            logger.onLogEnd();
        },
        runOperationSet: function (input, name, operation) {
            var logger = new Bridge.ClientTest.DecimalMathTests.Logger();
            logger.onLogBegin(name);

            for (var i = Bridge.Array.getLower(input, 0); i <= (Bridge.Array.getLength(input, 0) - 1); i++) {
                var lowerBound = Bridge.Array.getLower(input, 1);
                var dotNetDiff = Bridge.get(Bridge.ClientTest.DecimalMathTests).parseDotNetDiff(input, i, lowerBound);
                var a = input.get([i, lowerBound + 2]);
                var expected = input.get([i, lowerBound + 3]);
                var result = Bridge.get(Bridge.ClientTest.DecimalMathTests).runOperation$1(Bridge.cast(a, Bridge.Decimal), operation);

                logger.onLog([dotNetDiff, a, result]);

                var diff = Bridge.get(Bridge.ClientTest.DecimalMathTests).getDifference(expected, result);
                var diffReport = Bridge.get(Bridge.ClientTest.DecimalMathTests).getDifferenceReport(diff);

                Bridge.get(Bridge.ClientTest.DecimalMathTests).assertDecimal(dotNetDiff, expected, result, diffReport, Bridge.String.format("{0} for row {1} with operand {2} .NetDiff {3}{4}", name, i, a, dotNetDiff, diffReport));
            }

            logger.onLogEnd();
        },
        parseDotNetDiff: function (input, i, lowerBound) {
            var o = input.get([i, lowerBound + 1]);
            if (!Bridge.hasValue(o)) {
                return Bridge.Decimal.lift(null);
            }

            if (Bridge.is(o, String)) {
                return Bridge.Decimal(o.toString());
            }

            var dotNetDiff = Bridge.cast(input.get([i, lowerBound + 1]), Bridge.Decimal, true);
            return dotNetDiff;
        },
        assertDecimal: function (dotNetDiff, expected, result, differenceReport, message) {
            if (Bridge.get(Bridge.ClientTest.DecimalMathTests).jSMode) {
                Bridge.get(Bridge.ClientTest.DecimalMathTests).assertIsDecimalAndEqualTo(result, Bridge.cast(expected, Bridge.Decimal).sub((Bridge.Nullable.hasValue(dotNetDiff) ? Bridge.Nullable.getValue(dotNetDiff) : Bridge.Decimal(0.0))), message);
            }
            else  {
                Bridge.get(Bridge.ClientTest.DecimalMathTests).assertIsDecimalAndEqualTo(result, expected, message);
            }
        },
        assertIsDecimalAndEqualTo: function (actual, expected, message) {
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(actual, Bridge.Decimal), "isDecimal " + message);
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(actual.toString(), expected.toString(), "StrictEqual " + message);
        },
        getDifferenceReport: function (difference) {
            var differenceReport = difference.ne(Bridge.Decimal(0.0)) ? "; result diff is " + Bridge.Int.format(difference, 'G') : "";
            return differenceReport;
        },
        getDifference: function (expected, result) {
            var difference;
            if ((Bridge.is(result, Bridge.Decimal) || Bridge.is(result, Bridge.Int)) && (Bridge.is(expected, Bridge.Decimal) || Bridge.is(expected, Bridge.Int))) {
                difference  = Bridge.cast(expected, Bridge.Decimal).sub(Bridge.cast(result, Bridge.Decimal));
            }
            else  {
                difference  = Bridge.Decimal(0.0);
            }

            return difference;
        },
        runOperation: function (a, b, operation) {
            return operation(a, b);
        },
        runOperation$1: function (a, operation) {
            return operation(a);
        }
    }
});

Bridge.define('Bridge.ClientTest.EnvironmentTests', {
    newLineIsAStringContainingOnlyTheNewLineChar: function () {
        Bridge.get(Bridge.Test.Assert).areEqual('\n', "\n");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ArgumentExceptionTests', {
    statics: {
        DefaultMessage: "Value does not fall within the expected range."
    },
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.ArgumentException), "Bridge.ArgumentException", "Name");
        var d = new Bridge.ArgumentException();
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(d, Bridge.ArgumentException));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(d, Bridge.Exception));
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.ArgumentException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArgumentException), "is ArgumentException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getParamName(), undefined, "ParamName");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), Bridge.get(Bridge.ClientTest.Exceptions.ArgumentExceptionTests).DefaultMessage);
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.ArgumentException("The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArgumentException), "is ArgumentException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getParamName(), undefined, "ParamName");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArgumentException("The message", null, inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArgumentException), "is ArgumentException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getParamName(), null, "ParamName");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndParamNameWorks: function () {
        var ex = new Bridge.ArgumentException("The message", "someParam");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArgumentException), "is ArgumentException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndParamNameAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArgumentException("The message", "someParam", inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArgumentException), "is ArgumentException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.get(Bridge.Test.Assert).true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.ArgumentNullException), "Bridge.ArgumentNullException", "Name");
        var d = new Bridge.ArgumentNullException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.ArgumentNullException), "is ArgumentNullException");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.ArgumentException), "is ArgumentException");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.ArgumentNullException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArgumentNullException), "is ArgumentNullException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getParamName(), undefined, "ParamName");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "Value cannot be null.");
    },
    constructorWithParamNameWorks: function () {
        var ex = new Bridge.ArgumentNullException("someParam");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArgumentNullException), "is ArgumentNullException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "Value cannot be null.\nParameter name: someParam");
    },
    constructorWithParamNameAndMessageWorks: function () {
        var ex = new Bridge.ArgumentNullException("someParam", "The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArgumentNullException), "is ArgumentNullException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArgumentNullException(null, "The message", inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArgumentNullException), "is ArgumentException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getParamName(), null, "ParamName");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.ArgumentOutOfRangeException), "Bridge.ArgumentOutOfRangeException", "Name");
        var d = new Bridge.ArgumentOutOfRangeException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.ArgumentException), "is ArgumentException");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.ArgumentOutOfRangeException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getParamName(), undefined, "ParamName");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getActualValue(), undefined, "ActualValue");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "Value is out of range.");
    },
    constructorWithParamNameWorks: function () {
        var ex = new Bridge.ArgumentOutOfRangeException("someParam");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getActualValue(), undefined, "ActualValue");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "Value is out of range.\nParameter name: someParam");
    },
    constructorWithParamNameAndMessageWorks: function () {
        var ex = new Bridge.ArgumentOutOfRangeException("someParam", "The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getActualValue(), undefined, "ActualValue");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArgumentOutOfRangeException(null, "The message", inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.get(Bridge.Test.Assert).null$1(ex.getParamName(), "ParamName");
        Bridge.get(Bridge.Test.Assert).true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getActualValue(), undefined, "ActualValue");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithParamNameAndActualValueAndMessageWorks: function () {
        var ex = new Bridge.ArgumentOutOfRangeException("someParam", "The message", null, 42);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.get(Bridge.Test.Assert).null$1(ex.getInnerException(), "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getActualValue(), 42, "ActualValue");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    rangeErrorIsConvertedToArgumentOutOfRangeException: function () {
        var size = -1;
        try {
            var arr = Bridge.Array.init(size, 0);
            Bridge.get(Bridge.Test.Assert).fail$1("Should throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var ex;
            if (Bridge.is($e, Bridge.ArgumentOutOfRangeException)) {
                ex = $e;
                var inner = ex.getInnerException();
                Bridge.get(Bridge.Test.Assert).notNull$1(inner, "Inner Exception");
            }
            else {
                ex = $e;
                Bridge.get(Bridge.Test.Assert).fail$1("Expected ArgumentOutOfRangeException, got " + Bridge.getType(ex));
            }
        }
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ArithmeticExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.ArithmeticException), "Bridge.ArithmeticException", "Name");
        var d = new Bridge.ArithmeticException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.ArithmeticException), "is DivideByZeroException");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.ArithmeticException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArithmeticException), "is ArithmeticException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "Overflow or underflow in the arithmetic operation.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.ArithmeticException("The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArithmeticException), "is OverflowException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArithmeticException("The message", inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.ArithmeticException), "is OverflowException");
        Bridge.get(Bridge.Test.Assert).true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.DivideByZeroException), "Bridge.DivideByZeroException", "Name");
        var d = new Bridge.DivideByZeroException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.DivideByZeroException), "is DivideByZeroException");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.DivideByZeroException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.DivideByZeroException), "is DivideByZeroException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "Division by 0.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.DivideByZeroException("The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.DivideByZeroException), "is DivideByZeroException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.DivideByZeroException("The message", inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.DivideByZeroException), "is DivideByZeroException");
        Bridge.get(Bridge.Test.Assert).true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.Exception), "Bridge.Exception", "Name");
        var d = new Bridge.Exception();
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(d, Bridge.Exception));
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.Exception();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.Exception), "is Exception");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), undefined);
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.Exception("The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.Exception), "is Exception");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.Exception("The message", inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.Exception), "is Exception");
        Bridge.get(Bridge.Test.Assert).true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    messagePropertyCanBeOverridden: function () {
        var ex = Bridge.cast(new Bridge.ClientTest.Exceptions.ExceptionTests.MyException("Test message", null), Bridge.Exception);
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "Test message");
    },
    innerExceptionPropertyCanBeOverridden: function () {
        var inner = new Bridge.Exception("a");
        var ex = Bridge.cast(new Bridge.ClientTest.Exceptions.ExceptionTests.MyException("Test message", inner), Bridge.Exception);
        Bridge.get(Bridge.Test.Assert).$true(ex.getInnerException() === inner);
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.FormatExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.FormatException), "Bridge.FormatException", "Name");
        var d = new Bridge.FormatException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.FormatException), "is FormatException");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.FormatException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.FormatException), "is FormatException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "Invalid format.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.FormatException("The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.FormatException), "is FormatException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.FormatException("The message", inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.FormatException), "is FormatException");
        Bridge.get(Bridge.Test.Assert).true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.InvalidCastExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.InvalidCastException), "Bridge.InvalidCastException", "Name");
        var d = new Bridge.InvalidCastException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.InvalidCastException), "is InvalidCastException");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.InvalidCastException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.InvalidCastException), "is InvalidCastException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The cast is not valid.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.InvalidCastException("The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.InvalidCastException), "is InvalidCastException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.InvalidCastException("The message", inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.InvalidCastException), "is InvalidCastException");
        Bridge.get(Bridge.Test.Assert).true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.InvalidOperationException), "Bridge.InvalidOperationException", "Name");
        var d = new Bridge.InvalidOperationException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.InvalidOperationException), "is InvalidOperationException");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.InvalidOperationException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.InvalidOperationException), "is InvalidOperationException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "Operation is not valid due to the current state of the object.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.InvalidOperationException("The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.InvalidOperationException), "is InvalidOperationException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.InvalidOperationException("The message", inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.InvalidOperationException), "is InvalidOperationException");
        Bridge.get(Bridge.Test.Assert).true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.KeyNotFoundException), "Bridge.KeyNotFoundException", "Name");
        var d = new Bridge.KeyNotFoundException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.KeyNotFoundException), "is KeyNotFoundException");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.KeyNotFoundException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.KeyNotFoundException), "is KeyNotFoundException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "Key not found.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.KeyNotFoundException("The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.KeyNotFoundException), "is KeyNotFoundException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.KeyNotFoundException("The message", inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.KeyNotFoundException), "is KeyNotFoundException");
        Bridge.get(Bridge.Test.Assert).true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.NotImplementedExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.NotImplementedException), "Bridge.NotImplementedException", "Name");
        var d = new Bridge.NotImplementedException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.NotImplementedException), "is NotImplementedException");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.NotImplementedException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.NotImplementedException), "is NotImplementedException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The method or operation is not implemented.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.NotImplementedException("The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.NotImplementedException), "is NotImplementedException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.NotImplementedException("The message", inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.NotImplementedException), "is NotImplementedException");
        Bridge.get(Bridge.Test.Assert).true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.NotSupportedExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.NotSupportedException), "Bridge.NotSupportedException", "Name");
        var d = new Bridge.NotSupportedException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.NotSupportedException), "is NotSupportedException");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.NotSupportedException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.NotSupportedException), "is NotSupportedException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "Specified method is not supported.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.NotSupportedException("The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.NotSupportedException), "is NotSupportedException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.NotSupportedException("The message", inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.NotSupportedException), "is NotSupportedException");
        Bridge.get(Bridge.Test.Assert).true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.NullReferenceExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.NullReferenceException), "Bridge.NullReferenceException", "Name");
        var d = new Bridge.NullReferenceException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.NullReferenceException), "is NullReferenceException");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.NullReferenceException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.NullReferenceException), "is NullReferenceException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "Object is null.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.NullReferenceException("The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.NullReferenceException), "is NullReferenceException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.NullReferenceException("The message", inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.NullReferenceException), "is NullReferenceException");
        Bridge.get(Bridge.Test.Assert).true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    accessingAFieldOnANullObjectCausesANullReferenceException: function () {
        try {
            var d = null;
            var x = d.someField;
            Bridge.get(Bridge.Test.Assert).fail$1("A NullReferenceException should have been thrown");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var ex;
            if (Bridge.is($e, Bridge.NullReferenceException)) {
                ex = $e;
                var inner = ex.getInnerException();
                Bridge.get(Bridge.Test.Assert).notNull$1(inner, "Inner Exception");
            }
            else {
                ex = $e;
                Bridge.get(Bridge.Test.Assert).fail$1("Expected NullReferenceException, got type " + Bridge.getType(ex));
            }
        }
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.OverflowExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.OverflowException), "Bridge.OverflowException", "Name");
        var d = new Bridge.OverflowException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.OverflowException), "is OverflowException");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.OverflowException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.OverflowException), "is OverflowException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "Arithmetic operation resulted in an overflow.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.OverflowException("The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.OverflowException), "is OverflowException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.OverflowException("The message", inner);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.OverflowException), "is OverflowException");
        Bridge.get(Bridge.Test.Assert).true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.RankExceptionTests', {
    statics: {
        DefaultMessage: "Attempted to operate on an array with the incorrect number of dimensions."
    },
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.RankException), "Bridge.RankException", "Name");
        var d = new Bridge.RankException();
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(d, Bridge.RankException));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(d, Bridge.Exception));
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.RankException();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.RankException), "is ArgumentException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), Bridge.get(Bridge.ClientTest.Exceptions.RankExceptionTests).DefaultMessage);
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.RankException("The message");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(ex, Bridge.RankException), "is RankException");
        Bridge.get(Bridge.Test.Assert).areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.get(Bridge.Test.Assert).areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.ExceptionTests', {
    throwingAndCatchingExceptionsWorks: function () {
        try {
            throw new Bridge.ClientTest.ExceptionTests.E2("The message");
            Bridge.get(Bridge.Test.Assert).fail$1("Should not get to statement after throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var e;
            if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E2)) {
                e = $e;
                Bridge.get(Bridge.Test.Assert).areEqual(e.getMessage(), "The message");
                return;
            }
            else {
                throw $e;
            }
        }
        Bridge.get(Bridge.Test.Assert).fail$1("Should not get to statement after catch");
    },
    exceptionOfWrongTypeIsNotCaught: function () {
        try {
            throw new Bridge.ClientTest.ExceptionTests.E1("The message");
            Bridge.get(Bridge.Test.Assert).fail$1("Should not get to statement after throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var e;
            if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E2)) {
                Bridge.get(Bridge.Test.Assert).fail$1("Should not catch E2");
            }
            else if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E1)) {
                e = $e;
                Bridge.get(Bridge.Test.Assert).areEqual(e.getMessage(), "The message");
                return;
            }
            else {
                throw $e;
            }
        }
        Bridge.get(Bridge.Test.Assert).fail$1("Should not get to statement after catch");
    },
    canCatchExceptionAsBaseType: function () {
        try {
            throw new Bridge.ClientTest.ExceptionTests.E2("The message");
            Bridge.get(Bridge.Test.Assert).fail$1("Should not get to statement after throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var e;
            if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E1)) {
                e = $e;
                Bridge.get(Bridge.Test.Assert).areEqual(e.getMessage(), "The message");
                return;
            }
            else {
                throw $e;
            }
        }
        Bridge.get(Bridge.Test.Assert).fail$1("Should not get to statement after catch");
    },
    canCatchStringAsException: function () {
        try {
            (function() {{ throw 'The message'; }})();
            Bridge.get(Bridge.Test.Assert).fail$1("Should not get to statement after throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var e;
            if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E1)) {
                Bridge.get(Bridge.Test.Assert).fail$1("Should not catch E1");
            }
            else {
                e = $e;
                Bridge.get(Bridge.Test.Assert).areEqual(e.getMessage(), "The message");
                return;
            }
        }
        Bridge.get(Bridge.Test.Assert).fail$1("Should not get to statement after catch");
    },
    canCatchStringAsCatchAll: function () {
        try {
            (function() {{ throw 'The message'; }})();
            Bridge.get(Bridge.Test.Assert).fail$1("Should not get to statement after throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E1)) {
                Bridge.get(Bridge.Test.Assert).fail$1("Should not catch E1");
            }
            else {
                return;
            }
        }
        Bridge.get(Bridge.Test.Assert).fail$1("Should not get to statement after catch");
    }
});

Bridge.define('Bridge.ClientTest.IComparableTests', {
    callingMethodThroughIComparableInterfaceInvokesImplementingMethod: function () {
        var a = new Bridge.ClientTest.IComparableTests.MyComparable(), b = new Bridge.ClientTest.IComparableTests.MyComparable();
        a.result = 534;
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.compare((Bridge.cast(a, Bridge.IComparable$1(Bridge.ClientTest.IComparableTests.MyComparable))), b), 534);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(a.other, b);

        a.result = -42;
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.compare((Bridge.cast(a, Bridge.IComparable$1(Bridge.ClientTest.IComparableTests.MyComparable))), null), -42);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(a.other, null);

        a.result = -534;
        Bridge.get(Bridge.Test.Assert).areEqual(a.compareTo(b), -534);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(a.other, b);

        a.result = 42;
        Bridge.get(Bridge.Test.Assert).areEqual(a.compareTo(null), 42);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(a.other, null);
    }
});

Bridge.define('Bridge.ClientTest.IEquatableTests', {
    callingMethodThroughIComparableInterfaceInvokesImplementingMethod: function () {
        var a = new Bridge.ClientTest.IEquatableTests.MyEquatable(), b = new Bridge.ClientTest.IEquatableTests.MyEquatable();
        a.result = true;
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast(a, Bridge.IEquatable$1(Bridge.ClientTest.IEquatableTests.MyEquatable))), b));
        Bridge.get(Bridge.Test.Assert).areStrictEqual(a.other, b);
        a.result = false;
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast(a, Bridge.IEquatable$1(Bridge.ClientTest.IEquatableTests.MyEquatable))), b));

        a.result = true;
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast(a, Bridge.IEquatable$1(Bridge.ClientTest.IEquatableTests.MyEquatable))), null));
        Bridge.get(Bridge.Test.Assert).areStrictEqual(a.other, null);
        a.result = false;
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast(a, Bridge.IEquatable$1(Bridge.ClientTest.IEquatableTests.MyEquatable))), null));

        a.result = true;
        Bridge.get(Bridge.Test.Assert).$true(a.equalsT(b));
        Bridge.get(Bridge.Test.Assert).areStrictEqual(a.other, b);
        a.result = false;
        Bridge.get(Bridge.Test.Assert).$false(a.equalsT(b));

        a.result = true;
        Bridge.get(Bridge.Test.Assert).$true(a.equalsT(null));
        Bridge.get(Bridge.Test.Assert).areStrictEqual(a.other, null);
        a.result = false;
        Bridge.get(Bridge.Test.Assert).$false(a.equalsT(null));
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqAggregateOperators', {
    statics: {
        test: function () {
            var numbers = [2, 2, 3, 5, 5, -1, 2, -1];
            var words = ["one", "two", "three"];
            var doubles = [1.7, 2.3, 1.9, 4.1, 2.9];

            // TEST
            var uniqueNumbers = Bridge.Linq.Enumerable.from(numbers).distinct().count();
            Bridge.get(Bridge.Test.Assert).areEqual$1(uniqueNumbers, 4, "Count() distinct numbers");

            // TEST
            var oddNumbers = Bridge.Linq.Enumerable.from(numbers).count(function (n) {
                return n % 2 === 1;
            });
            Bridge.get(Bridge.Test.Assert).areEqual$1(oddNumbers, 3, "Count() odd numbers");

            // TEST
            var groupJoin = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Group).getGroups()).groupJoin(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons(), function (g) {
                return g.getName();
            }, function (p) {
                return p.getGroup();
            }, function (g, pg) {
                return { group: g.getName(), personCount: Bridge.Linq.Enumerable.from(pg).count() };
            })).toArray();

            var groupJoinExpected = [{ group: "A", personCount: 1 }, { group: "B", personCount: 4 }, { group: "C", personCount: 2 }, { group: "D", personCount: 0 }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(groupJoin, groupJoinExpected, "Count() within joint collections");

            // TEST
            var grouped = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { group: g.key(), personCount: g.count() };
            })).toArray();

            var groupedExpected = [{ group: "A", personCount: 1 }, { group: "C", personCount: 2 }, { group: "B", personCount: 4 }, { group: Bridge.cast(null, String), personCount: 1 }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(grouped, groupedExpected, "Count() within group");

            // TEST
            var numSum = Bridge.Linq.Enumerable.from(numbers).sum();
            Bridge.get(Bridge.Test.Assert).areEqual$1(numSum, 17, "Sum() numbers");

            // TEST
            var totalChars = Bridge.Linq.Enumerable.from(words).sum(function (w) {
                return w.length;
            });
            Bridge.get(Bridge.Test.Assert).areEqual$1(totalChars, 11, "Sum() total chars");

            // TEST
            var groupedSum = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { group: g.key(), sum: g.sum(function (x) {
                    return x.getCount();
                }) };
            })).toArray();

            var groupedSumExpected = [{ group: "A", sum: 300 }, { group: "C", sum: 600 }, { group: "B", sum: 2000 }, { group: Bridge.cast(null, String), sum: 3000 }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(groupedSum, groupedSumExpected, "Sum() within group");

            // TEST
            var minNum = Bridge.Linq.Enumerable.from(numbers).min();
            Bridge.get(Bridge.Test.Assert).areEqual$1(minNum, -1, "Min() number");

            // TEST
            var shortestWordLength = Bridge.Linq.Enumerable.from(words).min(function (w) {
                return w.length;
            });
            Bridge.get(Bridge.Test.Assert).areEqual$1(shortestWordLength, 3, "Min() for shortest word");

            // TEST
            var groupedMin = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { group: g.key(), min: g.min(function (x) {
                    return x.getCount();
                }) };
            })).toArray();

            var groupedMinExpected = [{ group: "A", min: 300 }, { group: "C", min: 100 }, { group: "B", min: 50 }, { group: Bridge.cast(null, String), min: 3000 }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(groupedMin, groupedMinExpected, "Min() within group");

            // TEST
            var groupedMinWithLet = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { g: g, minCount: g.min(function (x) {
                    return x.getCount();
                }) };
            }).select(function (x0) {
                return { group: x0.g.key(), name: x0.g.where(function (x) {
                    return x.getCount() === x0.minCount;
                }).select(function (x) {
                    return x.getName();
                }).toArray() };
            })).toArray();

            var groupedMinWithLetExpected = [{ group: "A", name: ["Frank"] }, { group: "C", name: ["Zeppa"] }, { group: "B", name: ["Dora"] }, { group: Bridge.cast(null, String), name: ["Nemo"] }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(groupedMinWithLet, groupedMinWithLetExpected, "Min() within group with let");

            // TEST
            var maxNum = Bridge.Linq.Enumerable.from(numbers).max();
            Bridge.get(Bridge.Test.Assert).areEqual$1(maxNum, 5, "Max() number");

            // TEST
            var longestWordLength = Bridge.Linq.Enumerable.from(words).max(function (w) {
                return w.length;
            });
            Bridge.get(Bridge.Test.Assert).areEqual$1(longestWordLength, 5, "Max() for longest word");

            // TEST
            var groupedMax = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { group: g.key(), max: g.max(function (x) {
                    return x.getCount();
                }) };
            })).toArray();

            var groupedMaxExpected = [{ group: "A", max: 300 }, { group: "C", max: 500 }, { group: "B", max: 700 }, { group: Bridge.cast(null, String), max: 3000 }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(groupedMax, groupedMaxExpected, "Max() within group");

            // TEST
            var groupedMaxWithLet = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { g: g, maxCount: g.max(function (x) {
                    return x.getCount();
                }) };
            }).select(function (x1) {
                return { group: x1.g.key(), name: x1.g.where(function (x) {
                    return x.getCount() === x1.maxCount;
                }).select(function (x) {
                    return x.getName();
                }).toArray() };
            })).toArray();

            var groupedMaxWithLetExpected = [{ group: "A", name: ["Frank"] }, { group: "C", name: ["Billy"] }, { group: "B", name: ["John", "Mary"] }, { group: Bridge.cast(null, String), name: ["Nemo"] }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(groupedMaxWithLet, groupedMaxWithLetExpected, "Max() within group with let");

            // TEST
            var averageNum = Bridge.Linq.Enumerable.from(numbers).average();
            Bridge.get(Bridge.Test.Assert).areEqual$1(averageNum, 2.125, "Average() number");

            // TEST
            var averageWordLengths = ["1", "22", "333", "4444", "55555"];
            var averageWordLength = Bridge.Linq.Enumerable.from(averageWordLengths).average(function (w) {
                return w.length;
            });
            Bridge.get(Bridge.Test.Assert).areEqual$1(averageWordLength, 3, "Average() for word lengths");

            // TEST
            var groupedAverage = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { group: g.key(), average: g.average(function (x) {
                    return x.getCount();
                }) };
            })).toArray();

            var groupedAverageExpected = [{ group: "A", average: 300 }, { group: "C", average: 300 }, { group: "B", average: 500 }, { group: Bridge.cast(null, String), average: 3000 }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(groupedAverage, groupedAverageExpected, "Average() within group");

            // TEST
            var doublesForAggregate = [1.0, 2.0, 3.0, 4.0, 5.0];
            var product = Bridge.Linq.Enumerable.from(doublesForAggregate).aggregate(function (runningProduct, nextFactor) {
                return runningProduct * nextFactor;
            });
            Bridge.get(Bridge.Test.Assert).areEqual$1(product, 120, "Aggregate() within doubles");

            // TEST
            var startBalance = 100.0;
            var attemptedWithdrawals = [20, 10, 40, 50, 10, 70, 30];

            var endBalance = Bridge.Linq.Enumerable.from(attemptedWithdrawals).aggregate(startBalance, function (balance, nextWithdrawal) {
                return ((nextWithdrawal <= balance) ? (balance - nextWithdrawal) : balance);
            });

            Bridge.get(Bridge.Test.Assert).areEqual$1(endBalance, 20, "Aggregate() balance");
        },
        bridge315: function () {
            var q = Bridge.Linq.Enumerable.from("a,b,c,a".toUpperCase().split(",")).aggregate("", function (workingSentence, next) {
                return next + " " + workingSentence;
            });

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(q, "A C B A ", "Enumerable.Aggregate");
        }
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqConversionOperators', {
    statics: {
        test: function () {
            // TEST
            var doubles = [1.7, 2.3, 1.9, 4.1, 2.9];

            var sameDoubles = Bridge.Linq.Enumerable.from(doubles).select(function (d) {
                return d;
            });
            var doublesArray = sameDoubles.toArray();

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.String.contains(Bridge.getType(doublesArray).toString(),"function Array()"), "ToArray() conversion for doubles - check type name");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(doublesArray, doubles, "ToArray() conversion for doubles - check content");

            // TEST
            var words = ["1.one", "2.two", "3.three"];

            var wordList1 = Bridge.Linq.Enumerable.from((Bridge.Linq.Enumerable.from(words).orderByDescending(function (w) {
                return w;
            }))).toList(String);
            var wordListExpected1 = new Bridge.List$1(String)(["3.three", "2.two", "1.one"]);

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.Utilities.TypeHelper).getTypeName(wordList1), "Bridge.List$1$String", "ToList() conversion with explicit String type for string - check type name");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(wordList1, wordListExpected1, "ToList() conversion for strings with explicit String type - check content");

            // TEST
            var wordList2 = (Bridge.Linq.Enumerable.from(words).orderByDescending(function (w) {
                return w;
            })).toList(String);
            var wordListExpected2 = new Bridge.List$1(String)(["3.three", "2.two", "1.one"]);

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.Utilities.TypeHelper).getTypeName(wordList2), "Bridge.List$1$String", "ToList() conversion for string - check type name");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(wordList2, wordListExpected2, "ToList() conversion for strings - check content");

            // TEST
            var groups = Bridge.get(Bridge.ClientTest.Utilities.Group).getGroups();
            var groupDictionary1 = (Bridge.Linq.Enumerable.from(groups).select(function (g) {
                return g;
            })).toDictionary(function (g) {
                return g.getName();
            }, function (g) {
                return g;
            }, String, Bridge.ClientTest.Utilities.Group);
            var expectedGroupDictionary1 = new Bridge.Dictionary$2(String,Bridge.ClientTest.Utilities.Group)();

            expectedGroupDictionary1.add("A", Bridge.merge(new Bridge.ClientTest.Utilities.Group(), {
                setName: "A",
                setLimit: 1000
            } ));
            expectedGroupDictionary1.add("B", Bridge.merge(new Bridge.ClientTest.Utilities.Group(), {
                setName: "B",
                setLimit: 400
            } ));
            expectedGroupDictionary1.add("C", Bridge.merge(new Bridge.ClientTest.Utilities.Group(), {
                setName: "C",
                setLimit: 800
            } ));
            expectedGroupDictionary1.add("D", Bridge.merge(new Bridge.ClientTest.Utilities.Group(), {
                setName: "D",
                setLimit: 200
            } ));
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.Utilities.TypeHelper).getTypeName(groupDictionary1), "Bridge.Dictionary$2$String$Bridge.ClientTest.Utilities.Group", "ToDictionary(keySelector, elementSelector) conversion for <string, Group> - check type name");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(groupDictionary1, expectedGroupDictionary1, "ToDictionary(keySelector, elementSelector) conversion for <string, Group> - check content");

            // TEST
            var comparer = new Bridge.ClientTest.Linq.TestLinqConversionOperatorsIEqualityComparer();
            var expectedGroupDictionary2 = new Bridge.Dictionary$2(String, Bridge.ClientTest.Utilities.Group)(null, comparer);

            expectedGroupDictionary2.add("A", Bridge.merge(new Bridge.ClientTest.Utilities.Group(), {
                setName: "A",
                setLimit: 1000
            } ));
            expectedGroupDictionary2.add("B", Bridge.merge(new Bridge.ClientTest.Utilities.Group(), {
                setName: "B",
                setLimit: 400
            } ));
            expectedGroupDictionary2.add("C", Bridge.merge(new Bridge.ClientTest.Utilities.Group(), {
                setName: "C",
                setLimit: 800
            } ));
            expectedGroupDictionary2.add("D", Bridge.merge(new Bridge.ClientTest.Utilities.Group(), {
                setName: "D",
                setLimit: 200
            } ));

            var groupDictionary2 = (Bridge.Linq.Enumerable.from(groups).select(function (g) {
                return g;
            })).toDictionary(function (g) {
                return g.getName();
            }, function (g) {
                return g;
            }, String, Bridge.ClientTest.Utilities.Group, comparer);

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.Utilities.TypeHelper).getTypeName(groupDictionary2), "Bridge.Dictionary$2$String$Bridge.ClientTest.Utilities.Group", "ToDictionary(keySelector, elementSelector, IEqualityComparer) conversion for <string, Group> - check type name");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(groupDictionary2, expectedGroupDictionary2, "ToDictionary(keySelector, elementSelector, IEqualityComparer) conversion for <string, Group> - check content");

            // TEST
            var groupDictionary3 = (Bridge.Linq.Enumerable.from(groups).select(function (g) {
                return g;
            })).toDictionary(function (g) {
                return g.getName();
            }, null, String, Bridge.ClientTest.Utilities.Group);

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.Utilities.TypeHelper).getTypeName(groupDictionary3), "Bridge.Dictionary$2$String$Bridge.ClientTest.Utilities.Group", "ToDictionary(keySelector) conversion for <string, Group> - check type name");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(groupDictionary3, expectedGroupDictionary1, "ToDictionary(keySelector) conversion for <string, Group> - check content");

            // TEST
            var numbers = [null, 1.0, "two", 3, "four", 5, "six", 7.0];

            var doubleNumbers = Bridge.Linq.Enumerable.from(numbers).ofType(Number).toArray();

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(doubleNumbers, [1.0, 3, 5, 7.0], "Issue #218. OfType<double> should get only double type items");
        }
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqElementOperators', {
    statics: {
        test: function () {
            // TEST
            var persons = Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons();
            var person3 = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).where(function (p) {
                return p.getID() === 3;
            })).first();

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(person3, Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons().getItem(2), "First() with ID = 3");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(Bridge.Linq.Enumerable.from(persons).first(function (x) {
                return x.getID() === 3;
            }), Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons().getItem(2), "First() with ID = 3 by lambda");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(Bridge.Linq.Enumerable.from(persons).where(function (x) {
                return x.getID() === 3;
            }).first(), Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons().getItem(2), "First() with Where() with ID = 3 by lambda");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(Bridge.Linq.Enumerable.from(persons).first(function (x) {
                return x.getGroup() === "C";
            }), Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons().getItem(1), "First() with Group = 'C' by lambda");
            Bridge.get(Bridge.Test.Assert).throws$5(Bridge.get(Bridge.ClientTest.Linq.TestLinqElementOperators).throwExceptionOnFirst1, "First() should throw exception if no element found");
            Bridge.get(Bridge.Test.Assert).throws$5(Bridge.get(Bridge.ClientTest.Linq.TestLinqElementOperators).throwExceptionOnFirst2, "First() should throw exception on empty collection");

            // TEST
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Linq.Enumerable.from(persons).firstOrDefault(function (x) {
                return x.getID() === -1;
            }, Bridge.getDefaultValue(Bridge.ClientTest.Utilities.Person)), null, "FirstOrDefault() unexisting element by lambda");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Linq.Enumerable.from(persons).where(function (x) {
                return x.getID() === -1;
            }).firstOrDefault(null, Bridge.getDefaultValue(Bridge.ClientTest.Utilities.Person)), null, "FirstOrDefault() with Where() unexisting element by lambda");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Linq.Enumerable.from(persons).firstOrDefault(function (x) {
                return x.getName() === "Nemo";
            }, Bridge.getDefaultValue(Bridge.ClientTest.Utilities.Person)), persons.getItem(7), "FirstOrDefault() with Name = 'Nemo' by lambda");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Linq.Enumerable.from(persons).where(function (x) {
                return x.getName() === "Nemo";
            }).firstOrDefault(null, Bridge.getDefaultValue(Bridge.ClientTest.Utilities.Person)), persons.getItem(7), "FirstOrDefault() with Where() with Name = 'Nemo' by lambda");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Linq.Enumerable.from(([])).firstOrDefault(null, Bridge.getDefaultValue(Object)), null, "FirstOrDefault() within zero-length array by lambda");

            // TEST
            var lastPerson = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).select(function (p) {
                return p;
            })).last();

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(lastPerson, Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons().getItem(7), "Last() person");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(Bridge.Linq.Enumerable.from(persons).last(function (x) {
                return x.getID() === 4;
            }), Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons().getItem(3), "Last() with ID = 4 by lambda");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(Bridge.Linq.Enumerable.from(persons).last(function (x) {
                return x.getGroup() === "B";
            }), Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons().getItem(6), "Last() with Group = 'B' by lambda");
            Bridge.get(Bridge.Test.Assert).throws$5(Bridge.get(Bridge.ClientTest.Linq.TestLinqElementOperators).throwExceptionOnLast1, "Last() should throw exception if no element found");
            Bridge.get(Bridge.Test.Assert).throws$5(Bridge.get(Bridge.ClientTest.Linq.TestLinqElementOperators).throwExceptionOnLast2, "Last() should throw exception on empty collection");

            // TEST
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Linq.Enumerable.from(persons).lastOrDefault(function (x) {
                return x.getID() === -1;
            }, Bridge.getDefaultValue(Bridge.ClientTest.Utilities.Person)), null, "LastOrDefault() unexisting element by lambda");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Linq.Enumerable.from(persons).where(function (x) {
                return x.getID() === -1;
            }).lastOrDefault(null, Bridge.getDefaultValue(Bridge.ClientTest.Utilities.Person)), null, "LastOrDefault() with Where() unexisting element by lambda");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Linq.Enumerable.from(persons).lastOrDefault(function (x) {
                return x.getName() === "Nemo";
            }, Bridge.getDefaultValue(Bridge.ClientTest.Utilities.Person)), persons.getItem(7), "LastOrDefault() with Name = 'Nemo' by lambda");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Linq.Enumerable.from(([])).lastOrDefault(null, Bridge.getDefaultValue(Object)), null, "LastOrDefault() within zero-length array by lambda");

            // TEST
            var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
            var elementAt1 = (Bridge.Linq.Enumerable.from(numbers).where(function (n) {
                return n > 5;
            })).elementAt(1);

            Bridge.get(Bridge.Test.Assert).areEqual$1(elementAt1, 8, "ElementAt() should return 8");
            Bridge.get(Bridge.Test.Assert).throws$5(Bridge.get(Bridge.ClientTest.Linq.TestLinqElementOperators).throwExceptionOnElementAt1, "ElementAt() should throw exception if no element found");
            Bridge.get(Bridge.Test.Assert).throws$5(Bridge.get(Bridge.ClientTest.Linq.TestLinqElementOperators).throwExceptionOnElementAt2, "ElementAt() should throw exception on empty collection");

            // TEST
            var elementAt1OrDefault = Bridge.Linq.Enumerable.from(numbers).elementAtOrDefault(1, Bridge.getDefaultValue(Bridge.Int));
            Bridge.get(Bridge.Test.Assert).areEqual$1(elementAt1OrDefault, 4, "ElementAtOrDefault() should return 4");

            // TEST
            var elementAt2OrDefault = (Bridge.Linq.Enumerable.from(numbers).where(function (n) {
                return n > 5;
            })).elementAtOrDefault(2, Bridge.getDefaultValue(Bridge.Int));
            Bridge.get(Bridge.Test.Assert).areEqual$1(elementAt2OrDefault, 6, "ElementAtOrDefault() should return 6");

            // TEST
            var elementAt100OrDefault = (Bridge.Linq.Enumerable.from(numbers).where(function (n) {
                return n > 5;
            })).elementAtOrDefault(100, Bridge.getDefaultValue(Bridge.Int));
            Bridge.get(Bridge.Test.Assert).areEqual$1(elementAt100OrDefault, 0, "ElementAtOrDefault() should return 0");
        },
        throwExceptionOnFirst1: function () {
            var numbers = [3, 4];

            Bridge.Linq.Enumerable.from(numbers).first(function (x) {
                return x === 5;
            });
        },
        throwExceptionOnFirst2: function () {
            var numbers = [];

            Bridge.Linq.Enumerable.from(numbers).first();
        },
        throwExceptionOnLast1: function () {
            var numbers = [3, 4];

            Bridge.Linq.Enumerable.from(numbers).last(function (x) {
                return x === 5;
            });
        },
        throwExceptionOnLast2: function () {
            var numbers = [];

            Bridge.Linq.Enumerable.from(numbers).last();
        },
        throwExceptionOnElementAt1: function () {
            var numbers = [3, 4];

            Bridge.Linq.Enumerable.from(numbers).elementAt(3);
        },
        throwExceptionOnElementAt2: function () {
            var numbers = [];

            Bridge.Linq.Enumerable.from(numbers).elementAt(1);
        }
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqGenerationOperators', {
    statics: {
        test: function () {
            // TEST
            var numbers = (Bridge.Linq.Enumerable.range(0, 6).select(function (n) {
                return { number: n, isOdd: n % 2 === 1 };
            })).toArray();
            var numbersExpected = [{ number: 0, isOdd: false }, { number: 1, isOdd: true }, { number: 2, isOdd: false }, { number: 3, isOdd: true }, { number: 4, isOdd: false }, { number: 5, isOdd: true }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(numbers, numbersExpected, "Range() 6 items from 0");

            // TEST
            var repeatNumbers = Bridge.Linq.Enumerable.repeat(-3, 4).toArray();
            var repeatNumbersExpected = [-3, -3, -3, -3];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(repeatNumbers, repeatNumbersExpected, "Repeat() -3 four times");
        }
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqGroupingOperators', {
    statics: {
        test: function () {
            // TEST
            var numbers = [2, 10, 3, 5, 30, 1, -15];
            var words = ["1.one", "3.three", "2.two", "22.twentytwo", "11.eleven", "30.thirty"];

            var numberGroups = (Bridge.Linq.Enumerable.from(numbers).groupBy(function (n) {
                return n % 5;
            }).select(function (g) {
                return { remainder: g.key(), numbers: g.toArray() };
            })).toArray();

            var numberGroupsExpected = [{ remainder: 2, numbers: [2] }, { remainder: 0, numbers: [10, 5, 30, -15] }, { remainder: 3, numbers: [3] }, { remainder: 1, numbers: [1] }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(numberGroups, numberGroupsExpected, "Group numbers by remainders");

            // TEST
            var wordGroups = (Bridge.Linq.Enumerable.from(words).groupBy(function (w) {
                return w.charCodeAt(0);
            }).select(function (g) {
                return { firstLetter: g.key(), words: g.toArray() };
            })).toArray();

            var wordGroupsExpected = [{ firstLetter: 49, words: ["1.one", "11.eleven"] }, { firstLetter: 51, words: ["3.three", "30.thirty"] }, { firstLetter: 50, words: ["2.two", "22.twentytwo"] }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(wordGroups, wordGroupsExpected, "Group words by first letters");

            // TEST
            var personGroups = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { group: g.key(), persons: g.select(function (x) {
                    return x.getName();
                }).toArray() };
            })).toArray();

            var personGroupsExpected = [{ group: "A", persons: ["Frank"] }, { group: "C", persons: ["Zeppa", "Billy"] }, { group: "B", persons: ["John", "Dora", "Ian", "Mary"] }, { group: Bridge.cast(null, String), persons: ["Nemo"] }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(personGroups, personGroupsExpected, "Person group by Group field");
        },
        testComplexGrouping: function () {
            // TEST
            var numbers = [2, 10, 3, 5, 30, 1, -15];
            var words = ["1.one", "3.three", "2.two", "22.twentytwo", "11.eleven", "30.thirty"];

            var complexGrouping = (Bridge.Linq.Enumerable.from(numbers).select(function (n) {
                return { number: n, words: (Bridge.Linq.Enumerable.from(words).where(function (w) {
                    return String.fromCharCode(w.charCodeAt(0)) === n.toString();
                }).groupBy(function (w) {
                    return w.charCodeAt(0);
                }).select(function (g) {
                    return { letter: g.key(), letterGroups: (Bridge.Linq.Enumerable.from(g).groupBy(function (l) {
                        return l;
                    }, function (l) {
                        return l;
                    }).select(function (mg) {
                        return { letter: mg.key(), letters: mg.toArray() };
                    })).toArray() };
                })).toArray() };
            })).toArray();

            var complexGroupingExpected = Bridge.get(Bridge.ClientTest.Linq.TestLinqGroupingOperators).getComplexGroupingExpectedResult();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(complexGrouping, complexGroupingExpected, "Complex grouping for numbers and words");
        },
        testAnagrams: function () {
            // TEST
            var anagrams = [" from ", " salt ", " earn ", " last ", " near ", " form "];

            var anagramsGroups = Bridge.Linq.Enumerable.from(anagrams).groupBy(function (w) {
                return w.trim();
            }, null, null, new Bridge.ClientTest.Linq.AnagramEqualityComparer()).select(function (x) {
                return { key: x.key(), words: x.toArray() };
            }).toArray();

            var anagramsGroupsExpected = [{ key: "from", words: [" from ", " form "] }, { key: "salt", words: [" salt ", " last "] }, { key: "earn", words: [" earn ", " near "] }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(anagramsGroups, anagramsGroupsExpected, "Anagram grouping with equality comparer");

            // TEST
            var anagramsGroups1 = Bridge.Linq.Enumerable.from(anagrams).groupBy(function (w) {
                return w.trim();
            }, function (a) {
                return a.toUpperCase();
            }, null, new Bridge.ClientTest.Linq.AnagramEqualityComparer()).select(function (x) {
                return { key: x.key(), words: x.toArray() };
            }).toArray();
            var anagramsGroupsExpected1 = [{ key: "from", words: [" FROM ", " FORM "] }, { key: "salt", words: [" SALT ", " LAST "] }, { key: "earn", words: [" EARN ", " NEAR "] }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(anagramsGroups1, anagramsGroupsExpected1, "Anagram grouping with equality compare and upper case");
        },
        getComplexGroupingExpectedResult: function () {
            var complexGroupingExpected = [{ number: 2, words: [{ letter: 50, letterGroups: [{ letter: "2.two", letters: ["2.two"] }, { letter: "22.twentytwo", letters: ["22.twentytwo"] }] }] }, { number: 10, words: [] }, { number: 3, words: [{ letter: 51, letterGroups: [{ letter: "3.three", letters: ["3.three"] }, { letter: "30.thirty", letters: ["30.thirty"] }] }] }, { number: 5, words: [] }, { number: 30, words: [] }, { number: 1, words: [{ letter: 49, letterGroups: [{ letter: "1.one", letters: ["1.one"] }, { letter: "11.eleven", letters: ["11.eleven"] }] }] }, { number: -15, words: [] }];

            return complexGroupingExpected;
        }
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqJoinOperators', {
    statics: {
        test: function () {
            // TEST
            var persons = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).join(Bridge.get(Bridge.ClientTest.Utilities.Group).getGroups(), function (p) {
                return p.getGroup();
            }, function (g) {
                return g.getName();
            }, function (p, g) {
                return { name: p.getName(), limit: g.getLimit() };
            })).toArray();

            var personsExpected = [{ name: "Frank", limit: 1000 }, { name: "Zeppa", limit: 800 }, { name: "John", limit: 400 }, { name: "Billy", limit: 800 }, { name: "Dora", limit: 400 }, { name: "Ian", limit: 400 }, { name: "Mary", limit: 400 }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(persons, personsExpected, "Join Persons and Groups");

            // TEST
            var personsByLambda = Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).join(Bridge.get(Bridge.ClientTest.Utilities.Group).getGroups(), function (p) {
                return p.getGroup();
            }, function (g) {
                return g.getName();
            }, function (p, g) {
                return { name: p.getName(), limit: g.getLimit() };
            }).toArray();

            var personsByLambdaExpected = [{ name: "Frank", limit: 1000 }, { name: "Zeppa", limit: 800 }, { name: "John", limit: 400 }, { name: "Billy", limit: 800 }, { name: "Dora", limit: 400 }, { name: "Ian", limit: 400 }, { name: "Mary", limit: 400 }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(personsByLambda, personsByLambdaExpected, "Join Persons and Groups by lambda");

            // TEST
            var groupJoin = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Group).getGroups()).groupJoin(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons(), function (g) {
                return g.getName();
            }, function (p) {
                return p.getGroup();
            }, function (g, pg) {
                return { group: g.getName(), persons: Bridge.Linq.Enumerable.from(pg).select(function (x) {
                    return x.getName();
                }).toArray() };
            })).toArray();

            var groupJoinExpected = [{ group: "A", persons: ["Frank"] }, { group: "B", persons: ["John", "Dora", "Ian", "Mary"] }, { group: "C", persons: ["Zeppa", "Billy"] }, { group: "D", persons: [] }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(groupJoin, groupJoinExpected, "Grouped join Persons and Groups");

            // TEST
            var groupJoinWithDefault = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Group).getGroups()).groupJoin(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons(), function (g) {
                return g.getName();
            }, function (p) {
                return p.getGroup();
            }, function (g, pg) {
                return { g: g, pg: pg };
            }).selectMany(function (x0) {
                return Bridge.Linq.Enumerable.from(x0.pg).defaultIfEmpty(Bridge.getDefaultValue(Bridge.ClientTest.Utilities.Person));
            }, function (x1, ep) {
                return { groupName: x1.g.getName(), personName: Bridge.hasValue(ep) ? ep.getName() : "" };
            })).toArray();

            var groupJoinWithDefaultExpected = [{ groupName: "A", personName: "Frank" }, { groupName: "B", personName: "John" }, { groupName: "B", personName: "Dora" }, { groupName: "B", personName: "Ian" }, { groupName: "B", personName: "Mary" }, { groupName: "C", personName: "Zeppa" }, { groupName: "C", personName: "Billy" }, { groupName: "D", personName: "" }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(groupJoinWithDefault, groupJoinWithDefaultExpected, "Grouped join Persons and Groups with DefaultIfEmpty");

            // TEST
            var groupJoinWithDefaultAndComplexEquals = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Group).getGroups()).groupJoin(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons(), function (g) {
                return { name: g.getName(), digit: 1 };
            }, function (p) {
                return { name: p.getGroup(), digit: 1 };
            }, function (g, pg) {
                return { g: g, pg: pg };
            }).selectMany(function (x2) {
                return Bridge.Linq.Enumerable.from(x2.pg).defaultIfEmpty(Bridge.getDefaultValue(Bridge.ClientTest.Utilities.Person));
            }, function (x3, ep) {
                return { x3: x3, ep: ep };
            }).orderByDescending(function (x4) {
                return Bridge.hasValue(x4.ep) ? x4.ep.getName() : null;
            }).select(function (x5) {
                return { groupName: Bridge.hasValue(x5.x3.g) ? x5.x3.g.getName() : null, personName: Bridge.hasValue(x5.ep) ? x5.ep.getName() : null };
            })).toArray();

            var groupJoinWithDefaultAndComplexEqualsExpected = [{ groupName: "C", personName: "Zeppa" }, { groupName: "B", personName: "Mary" }, { groupName: "B", personName: "John" }, { groupName: "B", personName: "Ian" }, { groupName: "A", personName: "Frank" }, { groupName: "B", personName: "Dora" }, { groupName: "C", personName: "Billy" }, { groupName: "D", personName: Bridge.cast(null, String) }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(groupJoinWithDefaultAndComplexEquals, groupJoinWithDefaultAndComplexEqualsExpected, "Issue #209. Grouped join Persons and Groups with DefaultIfEmpty, complex equals and ordering");
        }
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqMiscellaneousOperators', {
    statics: {
        test: function () {
            // TEST
            var numbersA = [4, 1, 3];
            var numbersB = [2, 3, 5];

            var concatNumbers = numbersA.concat(numbersB);
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(concatNumbers, [4, 1, 3, 2, 3, 5], "Concat() numbers");

            // TEST
            var names = Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).select(function (p) {
                return p.getName();
            });
            var cities = Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).select(function (p) {
                return p.getCity();
            });
            var concatNames = names.concat(cities).toArray();

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(concatNames, ["Frank", "Zeppa", "John", "Billy", "Dora", "Ian", "Mary", "Nemo", "Edmonton", "Tokyo", "Lisbon", "Paris", "Budapest", "Rome", "Dortmund", "Ocean"], "Concat() two sequences");

            // TEST
            var a = ["a", "b", "z"];
            var b = ["a", "b", "z"];

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Linq.Enumerable.from(a).sequenceEqual(b), "SequenceEqual() for equal sequences");

            // TEST
            var c = ["a", "b", "z"];
            var d = ["a", "z", "b"];

            Bridge.get(Bridge.Test.Assert).true$1(!Bridge.Linq.Enumerable.from(c).sequenceEqual(d), "SequenceEqual() for not equal sequences");
        }
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqOrderingOperators', {
    statics: {
        test: function () {
            // TEST
            var words = ["ab2", "ac", "a", "ab12", "", "ab", "bac", "z"];
            var sortedWords = (Bridge.Linq.Enumerable.from(words).orderBy(function (word) {
                return word;
            })).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(sortedWords, ["", "a", "ab", "ab12", "ab2", "ac", "bac", "z"], "Order by words");

            // TEST
            var sortedWordsByLength = (Bridge.Linq.Enumerable.from(words).orderBy(function (word) {
                return word.length;
            })).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(sortedWordsByLength, ["", "a", "z", "ac", "ab", "ab2", "bac", "ab12"], "Order by word length");

            // TEST
            var sortedPersonsByName = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).orderBy(function (p) {
                return p.getName();
            }).select(function (p) {
                return p.getName();
            })).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(sortedPersonsByName, ["Billy", "Dora", "Frank", "Ian", "John", "Mary", "Nemo", "Zeppa"], "Order by person names");

            // TODO test with System.StringComparison

            // TEST
            var doubles = [1.0, -0.7, 2.1, 0.9, 1.4, 2.9];
            var sortedDoubles = (Bridge.Linq.Enumerable.from(doubles).orderByDescending(function (d) {
                return d;
            })).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(sortedDoubles, [2.9, 2.1, 1.4, 1.0, 0.9, -0.7], "Order by descending double");

            // TEST
            var sortedPersonsByCountDesc = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).orderByDescending(function (p) {
                return p.getCount();
            }).select(function (p) {
                return p.getCount();
            })).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(sortedPersonsByCountDesc, [3000, 700, 700, 550, 500, 300, 100, 50], "Order by person count descending");

            // TEST
            var sortedWordsByLengthAndLetters = (Bridge.Linq.Enumerable.from(words).orderBy(function (word) {
                return word.length;
            }).thenBy(function (word) {
                return word;
            })).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(sortedWordsByLengthAndLetters, ["", "a", "z", "ab", "ac", "ab2", "bac", "ab12"], "Order by word length then by letters");

            // TEST
            var sortedWordsByLengthAndLettersLambda = Bridge.Linq.Enumerable.from(words).orderBy(function (x) {
                return x.length;
            }).thenByDescending(function (x) {
                return x;
            }).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(sortedWordsByLengthAndLettersLambda, ["", "z", "a", "ac", "ab", "bac", "ab2", "ab12"], "Order by word length then by letters as lambda");

            // TEST
            // var numbers = new[] { 2, 4, 6, 1, 5, 7, 9, 0, 8, 3};
            var numbers = [2, 4, 6, 1, 5];
            var numbersReversed = Bridge.Linq.Enumerable.from(numbers).reverse().toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(numbersReversed, [5, 1, 6, 4, 2], "Reverse() numbers");
        }
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqPartitioningOperators', {
    statics: {
        test: function () {
            // TEST
            var numbers = [1, 3, 5, 7, 9];
            var firstTwo = Bridge.Linq.Enumerable.from(numbers).take(2).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(firstTwo, [1, 3], "Take() the first two array elements");

            // TEST
            var lastThree = Bridge.Linq.Enumerable.from(numbers).takeFromLast(3).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(lastThree, [5, 7, 9], "TakeFromLast() the last three array elements");

            // TEST
            var exceptTwoLast = Bridge.Linq.Enumerable.from(numbers).takeExceptLast(2).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(exceptTwoLast, [1, 3, 5], "TakeExceptLast() the first array elements except the last two");

            // TEST
            var takeWhileLessTwo = Bridge.Linq.Enumerable.from(numbers).takeWhile(function (number) {
                return number < 2;
            }).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(takeWhileLessTwo, [1], "TakeWhile() less two");

            // TEST
            var takeWhileSome = Bridge.Linq.Enumerable.from(numbers).takeWhile(function (number, index) {
                return number - index <= 4;
            }).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(takeWhileSome, [1, 3, 5, 7], "TakeWhile() by value and index");

            // TEST
            var skipThree = Bridge.Linq.Enumerable.from(numbers).skip(3).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(skipThree, [7, 9], "Skip() the first three");

            // TEST
            var skipWhileLessNine = Bridge.Linq.Enumerable.from(numbers).skipWhile(function (number) {
                return number < 9;
            }).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(skipWhileLessNine, [9], "SkipWhile() less then 9");

            // TEST
            var skipWhileSome = Bridge.Linq.Enumerable.from(numbers).skipWhile(function (number, index) {
                return number <= 3 && index < 2;
            }).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(skipWhileSome, [5, 7, 9], "SkipWhile() by value and index");
        }
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqProjectionOperators', {
    statics: {
        test: function () {
            // TEST
            var numbers = [1, 3, 5, 7];
            var numberPlusOne = (Bridge.Linq.Enumerable.from(numbers).select(function (n) {
                return n + 1;
            })).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(numberPlusOne, [2, 4, 6, 8], "A sequence of ints one higher than the numbers[]");

            // TEST
            var persons = Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons();
            var names = (Bridge.Linq.Enumerable.from(persons).select(function (p) {
                return p.getName();
            })).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(names, ["Frank", "Zeppa", "John", "Billy", "Dora", "Ian", "Mary", "Nemo"], "Selects names as instance field");

            // TEST
            var strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

            var textNumbers = (Bridge.Linq.Enumerable.from(numbers).select(function (n) {
                return strings[n];
            })).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(textNumbers, ["one", "three", "five", "seven"], "Selects names as items of another array");

            // TEST
            var anonimNames = (Bridge.Linq.Enumerable.from(persons).select(function (p) {
                return { name: p.getName() };
            })).toArray();

            var anonimNamesToCompare = [{ name: "Frank" }, { name: "Zeppa" }, { name: "John" }, { name: "Billy" }, { name: "Dora" }, { name: "Ian" }, { name: "Mary" }, { name: "Nemo" }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(anonimNames, anonimNamesToCompare, "Selects names as an anonymous type");

            // TEST
            numbers = [0, 1, 3, 3];

            var numberssInPlace = Bridge.Linq.Enumerable.from(numbers).select(function (n, index) {
                return { number: n, isIndex: n === index };
            }).toArray();

            var anonimNumbersToCompare = [{ number: 0, isIndex: true }, { number: 1, isIndex: true }, { number: 3, isIndex: false }, { number: 3, isIndex: true }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(numberssInPlace, anonimNumbersToCompare, "Selects numbers as an anonymous type");

            // TEST
            var numbersA = [1, 5, 2];
            var numbersB = [3, 4, 2];
            var simplePairs = (Bridge.Linq.Enumerable.from(numbersA).selectMany(function (a) {
                return numbersB;
            }, function (a, b) {
                return { a: a, b: b };
            }).where(function (x0) {
                return x0.a < x0.b;
            }).select(function (x1) {
                return { a: x1.a, b: x1.b };
            })).toArray();

            var expectedSimplePairs = [{ a: 1, b: 3 }, { a: 1, b: 4 }, { a: 1, b: 2 }, { a: 2, b: 3 }, { a: 2, b: 4 }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(simplePairs, expectedSimplePairs, "Join two numeric arrays with one where clause");

            // TEST
            numbersA = [1, 5, 2, 4, 3];
            numbersB = [3, 4, 2, 5, 1];

            var pairs = (Bridge.Linq.Enumerable.from(numbersA).where(function (a) {
                return a > 1;
            }).selectMany(function (a) {
                return numbersB;
            }, function (a, b) {
                return { a: a, b: b };
            }).where(function (x2) {
                return x2.b < 4 && x2.a > x2.b;
            }).select(function (x3) {
                return { sum: x3.a + x3.b };
            })).toArray();

            var expectedPairs = [{ sum: 8 }, { sum: 7 }, { sum: 6 }, { sum: 3 }, { sum: 7 }, { sum: 6 }, { sum: 5 }, { sum: 5 }, { sum: 4 }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(pairs, expectedPairs, "Join two numeric arrays with two where clauses");

            // TEST
            numbersA = [1, 5, 2, 4, 3];
            numbersB = [3, 4, 2, 5, 1];

            var manyNumbers = Bridge.Linq.Enumerable.from(numbersA).selectMany(function (a, aIndex) {
                return Bridge.Linq.Enumerable.from(numbersB).where(function (b) {
                    return a === b && b > aIndex;
                }).select(function (b) {
                    return { a: a, b: b, i: aIndex };
                });
            }).toArray();

            var expectedManyNumbers = [{ a: 1, b: 1, i: 0 }, { a: 5, b: 5, i: 1 }, { a: 4, b: 4, i: 3 }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(manyNumbers, expectedManyNumbers, "SelectMany() two number arrays");
        }
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqQuantifiers', {
    statics: {
        test: function () {
            // TEST
            var words = ["count", "tree", "mount", "five", "doubt"];
            var anyOu = Bridge.Linq.Enumerable.from(words).any(function (w) {
                return Bridge.String.contains(w,"ou");
            });
            Bridge.get(Bridge.Test.Assert).true$1(anyOu, "Any() to return words containing 'ou'");

            // TEST
            var oddNumbers = [3, 7, 9, 5, 247, 1000001];
            var onlyOdd = Bridge.Linq.Enumerable.from(oddNumbers).all(function (n) {
                return n % 2 === 1;
            });
            Bridge.get(Bridge.Test.Assert).true$1(onlyOdd, "All() is odd");

            // TEST
            var someNumbers = [2, 3, 7, 9, 5, 247, 1000001];
            var notOnlyOdd = !Bridge.Linq.Enumerable.from(someNumbers).all(function (n) {
                return n % 2 === 1;
            });
            Bridge.get(Bridge.Test.Assert).true$1(notOnlyOdd, "All() is not only odd");

            // TEST
            var productGroups = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).where(function (pGroup) {
                return pGroup.any(function (p) {
                    return p.getCount() >= 500;
                });
            }).select(function (pGroup) {
                return { group: pGroup.key(), names: pGroup.select(function (x) {
                    return x.getName();
                }).toArray() };
            })).toArray();

            var productGroupsExpected = [{ group: "C", names: ["Zeppa", "Billy"] }, { group: "B", names: ["John", "Dora", "Ian", "Mary"] }, { group: Bridge.cast(null, String), names: ["Nemo"] }];

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(productGroups, productGroupsExpected, "Any() to return a grouped array of names only for groups having any item with Count > 500");
        }
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqQueryExecution', {
    statics: {
        test: function () {
            // TEST
            var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
            var i = 0;

            var aQuery = Bridge.Linq.Enumerable.from(numbers).select(function (n) {
                return ++i;
            });
            Bridge.get(Bridge.Test.Assert).areEqual$1(i, 0, "Query is not executed until you enumerate over them");

            // TEST
            aQuery.toList(Bridge.Int);
            Bridge.get(Bridge.Test.Assert).areEqual$1(i, 10, "Query is  executed after you enumerate over them");

            i = 0;

            // TEST
            var bQuery = (Bridge.Linq.Enumerable.from(numbers).select(function (n) {
                return ++i;
            })).max();
            Bridge.get(Bridge.Test.Assert).areEqual$1(i, 10, "Max() executes immediately");

            // TEST
            var smallNumbers = Bridge.Linq.Enumerable.from(numbers).where(function (n) {
                return n <= 3;
            });
            var smallerEvenNumbers = smallNumbers.where(function (n) {
                return n % 2 === 0;
            });
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(smallerEvenNumbers.toArray(), [2, 0], "Query in a query");

            // TEST
            Bridge.Linq.Enumerable.from(numbers).forEach(function (x, index) {
                numbers[index] = -numbers[index];
            });
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(Bridge.Linq.Enumerable.from(numbers).toArray(), [-5, -4, -1, -3, -9, -8, -6, -7, -2, 0], "ForEach()");

            // TEST
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(smallerEvenNumbers.toArray(), [-4, -8, -6, -2, 0], "Second query run on a modified source");
        }
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqRestrictionOperators', {
    statics: {
        test: function () {
            // TEST
            var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
            var filteredNumbers = (Bridge.Linq.Enumerable.from(numbers).where(function (n) {
                return n <= 6;
            })).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(filteredNumbers, [5, 4, 1, 3, 6, 2, 0], "Where elements in integer array are below or equal 6");

            // TEST
            var filteredCounts = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).where(function (p) {
                return p.getCount() < 501;
            }).select(function (p) {
                return p.getCount();
            })).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(filteredCounts, [300, 100, 500, 50], "Where elements in Person array have Count below 501");

            // TEST
            filteredCounts = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).where(function (p) {
                return p.getCount() < 501 && p.getGroup() === "A";
            }).select(function (p) {
                return p.getCount();
            })).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(filteredCounts, [300], "Where elements in Person array have Count below 501 ang in group 'A'");

            // TEST
            var persons = Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons();
            var filteredPersonByCounts = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).where(function (p) {
                return p.getCount() < 501;
            })).toArray();

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(filteredPersonByCounts, [persons.getItem(0), persons.getItem(1), persons.getItem(3), persons.getItem(4)], "Where elements in Person array have Count below 501. Returns Person instances");

            // TEST
            var filteredPersonByCountAndIndex = Bridge.Linq.Enumerable.from(persons).where(function (p, index) {
                return p.getCount() < index * 100;
            }).toArray();

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(filteredPersonByCountAndIndex, [persons.getItem(4)], "Where elements in Person array have Count meet condition (p.Count < index * 100). Returns Person instances");
        }
    }
});

Bridge.define('Bridge.ClientTest.Linq.TestLinqSetOperators', {
    statics: {
        test: function () {
            // TEST
            var a = [1, 2];
            var b = [1, 2];

            var result = Bridge.Linq.Enumerable.from(a).intersect(b).toArray();

            // TEST
            var numbers = [1, 2, 3, 3, 1, 5, 4, 2, 3];

            var uniqueNumbers = Bridge.Linq.Enumerable.from(numbers).distinct().toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(uniqueNumbers, [1, 2, 3, 5, 4], "Distinct() to remove duplicate elements");

            // TEST
            var distinctPersonGroups = (Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).select(function (p) {
                return p.getGroup();
            })).distinct().toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(distinctPersonGroups, ["A", "C", "B", null], "Distinct() to remove duplicate Group elements");

            // TEST
            var numbersA = [0, 2, 4, 5, 6, 8, 9];
            var numbersB = [1, 3, 5, 7, 8];

            var uniqueNumbersAB = Bridge.Linq.Enumerable.from(numbersA).union(numbersB).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(uniqueNumbersAB, [0, 2, 4, 5, 6, 8, 9, 1, 3, 7], "Union() to get unique number sequence");

            // TEST
            var nameChars = Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).select(function (p) {
                return p.getName().charCodeAt(0);
            });
            var cityChars = Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).select(function (p) {
                return p.getCity().charCodeAt(0);
            });
            var uniqueFirstChars = nameChars.union(cityChars).toArray();

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(uniqueFirstChars, [Bridge.cast(70, Bridge.Int), Bridge.cast(90, Bridge.Int), Bridge.cast(74, Bridge.Int), Bridge.cast(66, Bridge.Int), Bridge.cast(68, Bridge.Int), Bridge.cast(73, Bridge.Int), Bridge.cast(77, Bridge.Int), Bridge.cast(78, Bridge.Int), Bridge.cast(69, Bridge.Int), Bridge.cast(84, Bridge.Int), Bridge.cast(76, Bridge.Int), Bridge.cast(80, Bridge.Int), Bridge.cast(82, Bridge.Int), Bridge.cast(79, Bridge.Int)], "Union to get unique first letters of Name and City");

            // TEST
            var commonNumbersCD = Bridge.Linq.Enumerable.from(numbersA).intersect(numbersB).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(commonNumbersCD, [5, 8], "Intersect() to get common number sequence");

            // TEST
            nameChars = Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).select(function (p) {
                return p.getName().charCodeAt(0);
            });
            cityChars = Bridge.Linq.Enumerable.from(Bridge.get(Bridge.ClientTest.Utilities.Person).getPersons()).select(function (p) {
                return p.getCity().charCodeAt(0);
            });

            var commonFirstChars = Bridge.Linq.Enumerable.from(nameChars).intersect(cityChars).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(commonFirstChars, [Bridge.cast(66, Bridge.Int), Bridge.cast(68, Bridge.Int)], "Intersect() to get common first letters of Name and City");

            // TEST
            var exceptNumbersCD = Bridge.Linq.Enumerable.from(numbersA).except(numbersB).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(exceptNumbersCD, [0, 2, 4, 6, 9], "Except() to get numbers from first sequence and does not contain the second sequence numbers");

            // TEST
            var exceptFirstChars = nameChars.except(cityChars).toArray();
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(exceptFirstChars, [Bridge.cast(70, Bridge.Int), Bridge.cast(90, Bridge.Int), Bridge.cast(74, Bridge.Int), Bridge.cast(73, Bridge.Int), Bridge.cast(77, Bridge.Int), Bridge.cast(78, Bridge.Int)], "Except() to get letters from Name sequence and does not contain City letters");
        }
    }
});

Bridge.define('Bridge.ClientTest.MathTests', {
    assertAlmostEqual: function (d1, d2) {
        var diff = d2 - d1;
        if (diff < 0) {
            diff = -diff;
        }
        Bridge.get(Bridge.Test.Assert).$true(diff < 1E-08);
    },
    assertIsDecimalAndEqualTo: function (v, d, message) {
        if (message === void 0) { message = null; }
        Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.is(v, Bridge.Decimal), true, message);
        Bridge.get(Bridge.Test.Assert).areStrictEqual$1(v.toString(), d.toString(), message);
    },
    assertIsDoubleAndEqualTo: function (v, d, message) {
        if (message === void 0) { message = null; }
        Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.is(v, Number), true, message);
        Bridge.get(Bridge.Test.Assert).areStrictEqual$1(v.toString(), d.toString(), message);
    },
    constantsWork: function () {
        this.assertAlmostEqual(Math.E, 2.7182818284590451);
        this.assertAlmostEqual(Math.LN2, 0.69314718055994529);
        this.assertAlmostEqual(Math.LN10, 2.3025850929940459);
        this.assertAlmostEqual(Math.LOG2E, 1.4426950408889634);
        this.assertAlmostEqual(Math.LOG10E, 0.43429448190325182);
        this.assertAlmostEqual(Math.PI, 3.1415926535897931);
        this.assertAlmostEqual(Math.SQRT1_2, 0.70710678118654757);
        this.assertAlmostEqual(Math.SQRT2, 1.4142135623730951);
    },
    absOfDoubleWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.abs(-12.5), 12.5);
    },
    absOfIntWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.abs(-12), 12);
    },
    absOfLongWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.abs(-12), 12);
    },
    absOfSbyteWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.abs(Bridge.cast(-15, Bridge.Int)), Bridge.cast(15, Bridge.Int));
    },
    absOfShortWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.abs(Bridge.cast(-15, Bridge.Int)), Bridge.cast(15, Bridge.Int));
    },
    absOfFloatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.abs(-17.5), 17.5);
    },
    absOfDecimalWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(-10.0).abs(), 10.0);
    },
    acosWorks: function () {
        this.assertAlmostEqual(Math.acos(0.5), 1.0471975511965979);
    },
    asinWorks: function () {
        this.assertAlmostEqual(Math.asin(0.5), 0.52359877559829893);
    },
    atanWorks: function () {
        this.assertAlmostEqual(Math.atan(0.5), 0.46364760900080609);
    },
    atan2Works: function () {
        this.assertAlmostEqual(Math.atan2(1, 2), 0.46364760900080609);
    },
    cosWorks: function () {
        this.assertAlmostEqual(Math.cos(0.5), 0.87758256189037276);
    },
    divRemWorks: function () {
        var resultInt = { };

        Bridge.Math.divRem(1, 2, resultInt);
        Bridge.get(Bridge.Test.Assert).areEqual(resultInt.v, 1);

        Bridge.Math.divRem(234, 157, resultInt);
        Bridge.get(Bridge.Test.Assert).areEqual(resultInt.v, 77);

        Bridge.Math.divRem(0, 20, resultInt);
        Bridge.get(Bridge.Test.Assert).areEqual(resultInt.v, 0);

        var resultLong = { };

        Bridge.Math.divRem(2, 4, resultLong);
        Bridge.get(Bridge.Test.Assert).areEqual(resultLong.v, 2);

        Bridge.Math.divRem(2341, 157, resultLong);
        Bridge.get(Bridge.Test.Assert).areEqual(resultLong.v, 143);
    },
    expWorks: function () {
        this.assertAlmostEqual(Math.exp(0.5), 1.6487212707001282);
    },
    floorOfDoubleWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.floor(3.6), 3.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.floor(-3.6), -4.0);
    },
    floorOfDecimalWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(3.6).floor(), 3.0);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(-3.6).floor(), -4.0);
    },
    logWorks: function () {
        this.assertAlmostEqual(Math.log(0.5), -0.69314718055994529);
    },
    maxOfByteWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), 3.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), 5.0);
    },
    maxOfDecimalWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.max(Bridge.Decimal(-14.5), Bridge.Decimal(3.0)), 3.0);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.max(Bridge.Decimal(5.4), Bridge.Decimal(3.0)), 5.4);
    },
    maxOfDoubleWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(1.0, 3.0), 3.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(4.0, 3.0), 4.0);
    },
    maxOfShortWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(Bridge.cast(4, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(4, Bridge.Int));
    },
    maxOfIntWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(1, 3), 3);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(4, 3), 4);
    },
    maxOfLongWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(1, 3), 3);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(4, 3), 4);
    },
    maxOfSByteWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(Bridge.cast(-1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(5, Bridge.Int));
    },
    maxOfFloatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(-14.5, 3.0), 3.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(5.4, 3.0), 5.4);
    },
    maxOfUShortWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(5, Bridge.Int));
    },
    maxOfUIntWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(5, Bridge.Int));
    },
    maxOfULongWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(Bridge.cast(100, Bridge.Int), Bridge.cast(300, Bridge.Int)), Bridge.cast(300, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Math.max(Bridge.cast(500, Bridge.Int), Bridge.cast(300, Bridge.Int)), Bridge.cast(500, Bridge.Int));
    },
    minOfByteWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), 1.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), 3.0);
    },
    minOfDecimalWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.min(Bridge.Decimal(-14.5), Bridge.Decimal(3.0)), -14.5);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.min(Bridge.Decimal(5.4), Bridge.Decimal(3.0)), 3.0);
    },
    minOfDoubleWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(1.0, 3.0), 1.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(4.0, 3.0), 3.0);
    },
    minOfShortWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(1, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(Bridge.cast(4, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
    },
    minOfIntWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(1, 3), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(4, 3), 3);
    },
    minOfLongWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(1, 3), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(4, 3), 3);
    },
    minOfSByteWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(Bridge.cast(-1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(-1, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
    },
    minOfFloatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(-14.5, 3.0), -14.5);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(5.4, 3.0), 3.0);
    },
    minOfUShortWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(1, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
    },
    minOfUIntWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(1, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
    },
    minOfULongWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(Bridge.cast(100, Bridge.Int), Bridge.cast(300, Bridge.Int)), Bridge.cast(100, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Math.min(Bridge.cast(500, Bridge.Int), Bridge.cast(300, Bridge.Int)), Bridge.cast(300, Bridge.Int));
    },
    powWorks: function () {
        this.assertAlmostEqual(Math.pow(3, 0.5), 1.7320508075688772);

        this.assertAlmostEqual(Math.pow(3, 2), 9);
        this.assertAlmostEqual(Math.pow(2, 3), 8);
    },
    randomWorks: function () {
        for (var i = 0; i < 5; i++) {
            var d = Math.random();
            Bridge.get(Bridge.Test.Assert).$true(d >= 0);
            Bridge.get(Bridge.Test.Assert).$true(d < 1);
        }
    },
    roundOfDoubleWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Math.round(3.432, 0, 6), 3.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Math.round(3.6, 0, 6), 4.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Math.round(3.5, 0, 6), 4.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Math.round(4.5, 0, 6), 4.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Math.round(-3.5, 0, 6), -4.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Math.round(-4.5, 0, 6), -4.0);
    },
    roundDecimalWithModeWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 6), 4, "3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 6), 4, "3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 6), 3, "3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 6), -3, "-3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 6), -4, "-3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 6), -4, "-3.8m");


        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 0), 4, "Up 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 0), 4, "Up 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 0), 4, "Up 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 0), -4, "Up -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 0), -4, "Up -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 0), -4, "Up -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 1), 3, "Down 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 1), 3, "Down 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 1), 3, "Down 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 1), -3, "Down -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 1), -3, "Down -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 1), -3, "Down -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 2), 4, "InfinityPos 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 2), 4, "InfinityPos 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 2), 4, "InfinityPos 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 2), -3, "InfinityPos -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 2), -3, "InfinityPos -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 2), -3, "InfinityPos -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 3), 3, "InfinityNeg 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 3), 3, "InfinityNeg 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 3), 3, "InfinityNeg 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 3), -4, "InfinityNeg -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 3), -4, "InfinityNeg -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 3), -4, "InfinityNeg -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 5), 4, "TowardsZero 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 5), 3, "TowardsZero 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 5), 3, "TowardsZero 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 5), -3, "TowardsZero -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 5), -3, "TowardsZero -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 5), -4, "TowardsZero -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 4), 4, "AwayFromZero 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 4), 4, "AwayFromZero 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 4), 3, "AwayFromZero 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 4), -3, "AwayFromZero -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 4), -4, "AwayFromZero -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 4), -4, "AwayFromZero -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 7), 4, "Ceil 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 7), 4, "Ceil 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 7), 3, "Ceil 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 7), -3, "Ceil -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 7), -3, "Ceil -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 7), -4, "Ceil -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 8), 4, "Floor 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 8), 3, "Floor 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 8), 3, "Floor 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 8), -3, "Floor -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 8), -4, "Floor -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 8), -4, "Floor -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 6), 4, "ToEven 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 6), 4, "ToEven 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 6), 3, "ToEven 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 6), -3, "ToEven -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 6), -4, "ToEven -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 6), -4, "ToEven -3.8m");
    },
    roundDecimalWithPrecisionAndModeWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 6), Bridge.Decimal(1.4), "Bridge584 1");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 6), Bridge.Decimal(1.6), "Bridge584 2");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 6), Bridge.Decimal(123.4568), "Bridge584 3");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 6), Bridge.Decimal(123.456789), "Bridge584 4");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 6), Bridge.Decimal(123.456789), "Bridge584 5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 6), Bridge.Decimal(-123.0), "Bridge584 6");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 0), 1.5, "Bridge584 Up 1");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 0), 1.6, "Bridge584 Up 2");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 0), 123.4568, "Bridge584 Up 3");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 0), 123.456789, "Bridge584 Up 4");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 0), 123.456789, "Bridge584 Up 5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 0), -124.0, "Bridge584 Up 6");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 4), 1.5, "Bridge584 AwayFromZero 1");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 4), 1.6, "Bridge584 AwayFromZero 2");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 4), 123.4568, "Bridge584 AwayFromZero 3");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 4), 123.456789, "Bridge584 AwayFromZero 4");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 4), 123.456789, "Bridge584 AwayFromZero 5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 4), -123.0, "Bridge584 AwayFromZero 6");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 1), 1.4, "Bridge584 Down 1");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 1), 1.5, "Bridge584 Down 2");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 1), 123.4567, "Bridge584 Down 3");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 1), 123.456789, "Bridge584 Down 4");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 1), 123.456789, "Bridge584 Down 5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 1), -123.0, "Bridge584 Down 6");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 2), 1.5, "Bridge584 InfinityPos 1");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 2), 1.6, "Bridge584 InfinityPos 2");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 2), 123.4568, "Bridge584 InfinityPos 3");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 2), 123.456789, "Bridge584 InfinityPos 4");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 2), 123.456789, "Bridge584 InfinityPos 5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 2), -123.0, "Bridge584 InfinityPos 6");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 3), 1.4, "Bridge584 InfinityNeg 1");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 3), 1.5, "Bridge584 InfinityNeg 2");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 3), 123.4567, "Bridge584 InfinityNeg 3");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 3), 123.456789, "Bridge584 InfinityNeg 4");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 3), 123.456789, "Bridge584 InfinityNeg 5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 3), -124.0, "Bridge584 InfinityNeg 6");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 5), 1.4, "Bridge584 TowardsZero 1");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 5), 1.5, "Bridge584 TowardsZero 2");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 5), 123.4568, "Bridge584 TowardsZero 3");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 5), 123.456789, "Bridge584 TowardsZero 4");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 5), 123.456789, "Bridge584 TowardsZero 5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 5), -123.0, "Bridge584 TowardsZero 6");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 6), 1.4, "Bridge584 ToEven 1");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 6), 1.6, "Bridge584 ToEven 2");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 6), 123.4568, "Bridge584 ToEven 3");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 6), 123.456789, "Bridge584 ToEven 4");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 6), 123.456789, "Bridge584 ToEven 5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 6), -123.0, "Bridge584 ToEven 6");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 7), 1.5, "Bridge584 Ceil 1");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 7), 1.6, "Bridge584 Ceil 2");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 7), 123.4568, "Bridge584 Ceil 3");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 7), 123.456789, "Bridge584 Ceil 4");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 7), 123.456789, "Bridge584 Ceil 5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 7), -123.0, "Bridge584 Ceil 6");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 8), 1.4, "Bridge584 Floor 1");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 8), 1.5, "Bridge584 Floor 2");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 8), 123.4568, "Bridge584 Floor 3");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 8), 123.456789, "Bridge584 Floor 4");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 8), 123.456789, "Bridge584 Floor 5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 8), -123.0, "Bridge584 Floor 6");
    },
    roundDoubleWithModeWorks: function () {
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(3.8, 0, 6), 4, "3.8");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(3.5, 0, 6), 4, "3.5");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(3.2, 0, 6), 3, "3.2");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(-3.2, 0, 6), -3, "-3.2");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(-3.5, 0, 6), -4, "-3.5");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(-3.8, 0, 6), -4, "-3.8");

        //AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.Up), 4, "Up 3.8");
        //AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.Up), 4, "Up 3.5");
        //AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.Up), 4, "Up 3.2");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.Up), -4, "Up -3.2");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.Up), -4, "Up -3.5");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.Up), -4, "Up -3.8");

        //AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.Down), 3, "Down 3.8");
        //AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.Down), 3, "Down 3.5");
        //AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.Down), 3, "Down 3.2");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.Down), -3, "Down -3.2");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.Down), -3, "Down -3.5");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.Down), -3, "Down -3.8");

        //AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.InfinityPos), 4, "InfinityPos 3.8");
        //AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.InfinityPos), 4, "InfinityPos 3.5");
        //AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.InfinityPos), 4, "InfinityPos 3.2");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.InfinityPos), -3, "InfinityPos -3.2");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.InfinityPos), -3, "InfinityPos -3.5");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.InfinityPos), -3, "InfinityPos -3.8");

        //AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.8");
        //AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.5");
        //AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.2");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.2");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.5");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.8");

        //AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.TowardsZero), 4, "TowardsZero 3.8");
        //AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.TowardsZero), 3, "TowardsZero 3.5");
        //AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.TowardsZero), 3, "TowardsZero 3.2");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.TowardsZero), -3, "TowardsZero -3.2");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.TowardsZero), -3, "TowardsZero -3.5");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.TowardsZero), -4, "TowardsZero -3.8");

        this.assertIsDoubleAndEqualTo(Bridge.Math.round(3.8, 0, 4), 4, "AwayFromZero 3.8");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(3.5, 0, 4), 4, "AwayFromZero 3.5");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(3.2, 0, 4), 3, "AwayFromZero 3.2");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(-3.2, 0, 4), -3, "AwayFromZero -3.2");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(-3.5, 0, 4), -4, "AwayFromZero -3.5");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(-3.8, 0, 4), -4, "AwayFromZero -3.8");

        //AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.Ceil), 4, "Ceil 3.8");
        //AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.Ceil), 4, "Ceil 3.5");
        //AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.Ceil), 3, "Ceil 3.2");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.Ceil), -3, "Ceil -3.2");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.Ceil), -3, "Ceil -3.5");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.Ceil), -4, "Ceil -3.8");

        //AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.Floor), 4, "Floor 3.8");
        //AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.Floor), 3, "Floor 3.5");
        //AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.Floor), 3, "Floor 3.2");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.Floor), -3, "Floor -3.2");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.Floor), -4, "Floor -3.5");
        //AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.Floor), -4, "Floor -3.8");

        this.assertIsDoubleAndEqualTo(Bridge.Math.round(3.8, 0, 6), 4, "ToEven 3.8");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(3.5, 0, 6), 4, "ToEven 3.5");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(3.2, 0, 6), 3, "ToEven 3.2");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(-3.2, 0, 6), -3, "ToEven -3.2");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(-3.5, 0, 6), -4, "ToEven -3.5");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(-3.8, 0, 6), -4, "ToEven -3.8");
    },
    roundDoubleWithPrecisionAndModeWorks: function () {
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(1.45, 1, 6), 1.4, "Bridge584 1");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(1.55, 1, 6), 1.6, "Bridge584 2");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(123.456789, 4, 6), 123.4568, "Bridge584 3");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(123.456789, 6, 6), 123.456789, "Bridge584 4");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(123.456789, 8, 6), 123.456789, "Bridge584 5");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(-123.456, 0, 6), -123, "Bridge584 6");

        //AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.Up), 1.5, "Bridge584 Up 1");
        //AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.Up), 1.6, "Bridge584 Up 2");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.Up), 123.4568, "Bridge584 Up 3");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.Up), 123.456789, "Bridge584 Up 4");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.Up), 123.456789, "Bridge584 Up 5");
        //AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.Up), -124.0, "Bridge584 Up 6");

        this.assertIsDoubleAndEqualTo(Bridge.Math.round(1.45, 1, 4), 1.5, "Bridge584 AwayFromZero 1");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(1.55, 1, 4), 1.6, "Bridge584 AwayFromZero 2");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(123.456789, 4, 4), 123.4568, "Bridge584 AwayFromZero 3");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(123.456789, 6, 4), 123.456789, "Bridge584 AwayFromZero 4");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(123.456789, 8, 4), 123.456789, "Bridge584 AwayFromZero 5");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(-123.456, 0, 4), -123.0, "Bridge584 AwayFromZero 6");

        //AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.Down), 1.4, "Bridge584 Down 1");
        //AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.Down), 1.5, "Bridge584 Down 2");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.Down), 123.4567, "Bridge584 Down 3");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.Down), 123.456789, "Bridge584 Down 4");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.Down), 123.456789, "Bridge584 Down 5");
        //AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.Down), -123.0, "Bridge584 Down 6");

        //AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.InfinityPos), 1.5, "Bridge584 InfinityPos 1");
        //AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.InfinityPos), 1.6, "Bridge584 InfinityPos 2");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.InfinityPos), 123.4568, "Bridge584 InfinityPos 3");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.InfinityPos), 123.456789, "Bridge584 InfinityPos 4");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.InfinityPos), 123.456789, "Bridge584 InfinityPos 5");
        //AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.InfinityPos), -123.0, "Bridge584 InfinityPos 6");

        //AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.InfinityNeg), 1.4, "Bridge584 InfinityNeg 1");
        //AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.InfinityNeg), 1.5, "Bridge584 InfinityNeg 2");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.InfinityNeg), 123.4567, "Bridge584 InfinityNeg 3");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.InfinityNeg), 123.456789, "Bridge584 InfinityNeg 4");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.InfinityNeg), 123.456789, "Bridge584 InfinityNeg 5");
        //AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.InfinityNeg), -124.0, "Bridge584 InfinityNeg 6");

        //AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.TowardsZero), 1.4, "Bridge584 TowardsZero 1");
        //AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.TowardsZero), 1.5, "Bridge584 TowardsZero 2");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.TowardsZero), 123.4568, "Bridge584 TowardsZero 3");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.TowardsZero), 123.456789, "Bridge584 TowardsZero 4");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.TowardsZero), 123.456789, "Bridge584 TowardsZero 5");
        //AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.TowardsZero), -123.0, "Bridge584 TowardsZero 6");

        this.assertIsDoubleAndEqualTo(Bridge.Math.round(1.45, 1, 6), 1.4, "Bridge584 ToEven 1");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(1.55, 1, 6), 1.6, "Bridge584 ToEven 2");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(123.456789, 4, 6), 123.4568, "Bridge584 ToEven 3");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(123.456789, 6, 6), 123.456789, "Bridge584 ToEven 4");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(123.456789, 8, 6), 123.456789, "Bridge584 ToEven 5");
        this.assertIsDoubleAndEqualTo(Bridge.Math.round(-123.456, 0, 6), -123.0, "Bridge584 ToEven 6");

        //AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.Ceil), 1.5, "Bridge584 Ceil 1");
        //AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.Ceil), 1.6, "Bridge584 Ceil 2");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.Ceil), 123.4568, "Bridge584 Ceil 3");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.Ceil), 123.456789, "Bridge584 Ceil 4");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.Ceil), 123.456789, "Bridge584 Ceil 5");
        //AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.Ceil), -123.0, "Bridge584 Ceil 6");

        //AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.Floor), 1.4, "Bridge584 Floor 1");
        //AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.Floor), 1.5, "Bridge584 Floor 2");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.Floor), 123.4568, "Bridge584 Floor 3");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.Floor), 123.456789, "Bridge584 Floor 4");
        //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.Floor), 123.456789, "Bridge584 Floor 5");
        //AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.Floor), -123.0, "Bridge584 Floor 6");
    },
    jsRoundWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Math.round(3.432), 3.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.round(3.6), 4.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.round(3.5), 4.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.round(4.5), 5.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.round(-3.5), -3.0);
        Bridge.get(Bridge.Test.Assert).areEqual(Math.round(-4.5), -4.0);
    },
    iEEERemainderWorks: function () {
        this.assertAlmostEqual(3.1 - (4.0 * Math.round(3.1 / 4.0)), -0.9);
        this.assertAlmostEqual(16.1 - (4.0 * Math.round(16.1 / 4.0)), 0.100000000000001);
        this.assertAlmostEqual(4.0 - (16.1 * Math.round(4.0 / 16.1)), 4.0);
        this.assertAlmostEqual(3.1 - (3.2 * Math.round(3.1 / 3.2)), -0.1);
        this.assertAlmostEqual(3.2 - (3.1 * Math.round(3.2 / 3.1)), 0.1);
    },
    sinWorks: function () {
        this.assertAlmostEqual(Math.sin(0.5), 0.479425538604203);
    },
    sqrtWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(3.0).sqrt(), "1.7320508075688772935274463415");
    },
    tanWorks: function () {
        this.assertAlmostEqual(Math.tan(0.5), 0.54630248984379048);
    }
});

Bridge.define('Bridge.ClientTest.MultidimArrayTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Array), "Array", "FullName should be Array");
        var arr = Bridge.Array.create(0, null, 1, 1);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Array), "is Array should be true");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Array), "is int[,] should be true");
    },
    lengthWorks: function () {
        var arr = Bridge.Array.create(0, null, 3, 2);
        Bridge.get(Bridge.Test.Assert).areEqual(6, arr.length);
    },
    getValueWorksForUninitializedElement: function () {
        var arr = Bridge.Array.create(0, null, 2, 2);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Array.get(arr, 0, 0), 0);
    },
    getValueByIndexWorksForUninitializedElement: function () {
        var arr = Bridge.Array.create(0, null, 2, 2);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(arr.get([0, 0]), 0);
    },
    settingValueByIndexWorks: function () {
        var arr = Bridge.Array.create(null, null, 3, 2);
        arr.set([0, 0], "a");
        arr.set([0, 1], "b");
        arr.set([1, 0], "c");
        arr.set([1, 1], "d");
        arr.set([2, 0], "e");
        arr.set([2, 1], "f");
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([0, 0]), "a");
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([0, 1]), "b");
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([1, 0]), "c");
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([1, 1]), "d");
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([2, 0]), "e");
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([2, 1]), "f");
    },
    setValueWorks: function () {
        var arr = Bridge.Array.create(null, null, 3, 2);
        Bridge.Array.set(arr, "a", 0, 0);
        Bridge.Array.set(arr, "b", 0, 1);
        Bridge.Array.set(arr, "c", 1, 0);
        Bridge.Array.set(arr, "d", 1, 1);
        Bridge.Array.set(arr, "e", 2, 0);
        Bridge.Array.set(arr, "f", 2, 1);
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([0, 0]), "a");
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([0, 1]), "b");
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([1, 0]), "c");
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([1, 1]), "d");
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([2, 0]), "e");
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([2, 1]), "f");
    },
    setUpArray: function (values) {
        var arr = Bridge.Array.create(0, null, values.length, 2);

        for (var i = 0; i < values.length; i++) {
            var v = Bridge.as(values[i], Array);
            Bridge.Array.set(arr, v[0], i, 0);
            Bridge.Array.set(arr, v[1], i, 1);
        }

        return arr;
    },
    getValueWorks: function () {
        var arr = this.setUpArray([[1, 2], [3, 4], [5, 6]]);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.get(arr, 0, 0), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.get(arr, 0, 1), 2);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.get(arr, 1, 0), 3);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.get(arr, 1, 1), 4);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.get(arr, 2, 0), 5);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.get(arr, 2, 1), 6);
    },
    gettingValueByIndexWorks: function () {
        var arr = this.setUpArray([[1, 2], [3, 4], [5, 6]]);
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([0, 0]), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([0, 1]), 2);
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([1, 0]), 3);
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([1, 1]), 4);
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([2, 0]), 5);
        Bridge.get(Bridge.Test.Assert).areEqual(arr.get([2, 1]), 6);
    },
    rankWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getRank(Bridge.Array.create(0, null, 0, 0)), 2);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Array.getRank(Bridge.Array.create(0, null, 0, 0, 0)), 3);
    },
    getValueWithIndexOutOfRangeThrowsAnException: function () {
        var arr = Bridge.Array.create(0, null, 2, 3, 4);
        var i = arr.get([1, 2, 3]);
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            i = arr.get([2, 2, 1]);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            i = arr.get([1, 3, 1]);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            i = arr.get([1, 2, 4]);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            i = arr.get([-1, 0, 0]);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            i = arr.get([0, -1, 0]);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            i = arr.get([0, 0, -1]);
        });
    },
    setValueWithIndexOutOfRangeThrowsAnException: function () {
        var arr = Bridge.Array.create(0, null, 2, 3, 4);
        arr.set([1, 2, 3], 0);
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            arr.set([2, 2, 1], 0);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            arr.set([1, 3, 1], 0);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            arr.set([1, 2, 4], 0);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            arr.set([-1, 0, 0], 0);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            arr.set([0, -1, 0], 0);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            arr.set([0, 0, -1], 0);
        });
    }
});

Bridge.define('Bridge.ClientTest.NullableTests', {
    isOfType: function (T) {
        return Bridge.fn.bind(this, function (value) {
            return Bridge.is(value, T);
        });
    },
    typePropertiesAreCorrect: function () {
        var a = 3, b = null;
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Boolean), "Boolean", "Open FullName");
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.Int), "Bridge.Int", "Instantiated FullName");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(a, Bridge.Int), "is int? #1");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.is(b, Bridge.Int), "is int? #2");

        Bridge.get(Bridge.Test.Assert).true$1(this.isOfType(Bridge.Int)(3), "IsOfType #1");
        Bridge.get(Bridge.Test.Assert).false$1(this.isOfType(Bridge.Int)(3.14), "IsOfType #2");
        Bridge.get(Bridge.Test.Assert).true$1(this.isOfType(Bridge.TimeSpan)(new Bridge.TimeSpan(1)), "IsOfType #3");
        Bridge.get(Bridge.Test.Assert).false$1(this.isOfType(Bridge.TimeSpan)(3.14), "IsOfType #4");
    },
    convertingToNullableWorks: function () {
        var i = 3;
        var i1 = i;
        var i2 = i;
        Bridge.get(Bridge.Test.Assert).areEqual(i1, 3);
        Bridge.get(Bridge.Test.Assert).areEqual(i2, 3);
    },
    hasValueWorks: function () {
        var a = 3, b = null;
        Bridge.get(Bridge.Test.Assert).$true(Bridge.Nullable.hasValue(a));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.Nullable.hasValue(b));
    },
    boxingWorks: function () {
        var a = 3, b = null;
        Bridge.get(Bridge.Test.Assert).$true(Bridge.hasValue(a));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.hasValue(b));
    },
    unboxingWorks: function () {
        var a = 3, b = null;
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Nullable.getValue(a), 3);
        try {
            var x = Bridge.Nullable.getValue(b);
            Bridge.get(Bridge.Test.Assert).fail$1("Unboxing null should have thrown an exception");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            if (Bridge.is($e, Bridge.InvalidOperationException)) {
            }
            else {
                throw $e;
            }
        }
    },
    valueWorks: function () {
        var a = 3, b = null;
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Nullable.getValue(a), 3);
        try {
            var x = Bridge.Nullable.getValue(b);
            Bridge.get(Bridge.Test.Assert).fail$1("null.Value should have thrown an exception");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            if (Bridge.is($e, Bridge.InvalidOperationException)) {
            }
            else {
                throw $e;
            }
        }
    },
    unboxingValueOfWrongTypeThrowsAnException: function () {
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            var o = "x";
            var x = Bridge.cast(o, Bridge.Int);
        });
    },
    getValueOrDefaultWithArgWorks: function () {
        var a = 3, b = null;
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Nullable.getValueOrDefault(a, 1), 3);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Nullable.getValueOrDefault(b, 1), 1);
    },
    liftedEqualityWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.eq(a, b), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.eq(a, c), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.eq(a, d), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.eq(d, e), true);
    },
    liftedInequalityWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.neq(a, b), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.neq(a, c), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.neq(a, d), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.neq(d, e), false);
    },
    liftedLessThanWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.lt(a, b), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.lt(a, c), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.lt(a, d), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.lt(d, e), false);
    },
    liftedGreaterThanWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.gt(a, b), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.gt(c, a), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.gt(a, d), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.gt(d, e), false);
    },
    liftedLessThanOrEqualWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.lte(a, b), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.lte(c, a), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.lte(a, d), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.lte(d, e), false);
    },
    liftedGreaterThanOrEqualWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.gte(a, b), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.gte(a, c), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.gte(a, d), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.gte(d, e), false);
    },
    liftedSubtractionWorks: function () {
        var a = 2, b = 3, c = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.sub(a, b), -1);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.sub(a, c), null);
    },
    liftedAdditionWorks: function () {
        var a = 2, b = 3, c = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.add(a, b), 5);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.add(a, c), null);
    },
    liftedModWorks: function () {
        var a = 14, b = 3, c = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.mod(a, b), 2);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.mod(a, c), null);
    },
    liftedFloatingPointDivisionWorks: function () {
        var a = 15, b = 3, c = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.div(a, b), 5);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.div(a, c), null);
    },
    liftedIntegerDivisionWorks: function () {
        var a = 16, b = 3, c = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Int.div(a, b), 5);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Int.div(a, c), null);
    },
    liftedMultiplicationWorks: function () {
        var a = 2, b = 3, c = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.mul(a, b), 6);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.mul(a, c), null);
    },
    liftedBitwiseAndWorks: function () {
        var a = 6, b = 3, c = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.band(a, b), 2);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.band(a, c), null);
    },
    liftedBitwiseOrWorks: function () {
        var a = 6, b = 3, c = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.bor(a, b), 7);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.bor(a, c), null);
    },
    liftedBitwiseXorWorks: function () {
        var a = 6, b = 3, c = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.xor(a, b), 5);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.xor(a, c), null);
    },
    liftedLeftShiftWorks: function () {
        var a = 6, b = 3, c = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.sl(a, b), 48);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.sl(a, c), null);
    },
    liftedSignedRightShiftWorks: function () {
        var a = 48, b = 3, c = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.sr(a, b), 6);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.sr(a, c), null);
    },
    liftedUnsignedRightShiftWorks: function () {
        var a = -48, b = 3, c = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.sr(a, b), -6);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.sr(a, c), null);
    },
    liftedBooleanAndWorks: function () {
        var a = true, b = true, c = false, d = false, e = null, f = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.and(a, b), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.and(a, c), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.and(a, e), null);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.and(c, a), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.and(c, d), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.and(c, e), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.and(e, a), null);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.and(e, c), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.and(e, f), null);
    },
    liftedBooleanOrWorks: function () {
        var a = true, b = true, c = false, d = false, e = null, f = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.or(a, b), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.or(a, c), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.or(a, e), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.or(c, a), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.or(c, d), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.or(c, e), null);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.or(e, a), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.or(e, c), null);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.or(e, f), null);
    },
    liftedBooleanNotWorks: function () {
        var a = true, b = false, c = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.not(a), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.not(b), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.not(c), null);
    },
    liftedNegationWorks: function () {
        var a = 3, b = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.neg(a), -3);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.neg(b), null);
    },
    liftedUnaryPlusWorks: function () {
        var a = 3, b = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.pos(a), 3);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.pos(b), null);
    },
    liftedOnesComplementWorks: function () {
        var a = 3, b = null;
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.bnot(a), -4);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.Nullable.bnot(b), null);
    },
    coalesceWorks: function () {
        var $t, $t1, $t2, $t3, $t4;
        var v1 = null, v2 = 1, v3 = 0, v4 = 2;
        var s1 = null, s2 = "x";
        Bridge.get(Bridge.Test.Assert).areStrictEqual(($t = v1, Bridge.hasValue($t) ? $t : v1), null);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(($t1 = v1, Bridge.hasValue($t1) ? $t1 : v2), 1);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(($t2 = v3, Bridge.hasValue($t2) ? $t2 : v4), 0);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(($t3 = s1, Bridge.hasValue($t3) ? $t3 : s1), null);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(($t4 = s1, Bridge.hasValue($t4) ? $t4 : s2), "x");
    }
});

Bridge.define('Bridge.ClientTest.NumberFormatInfoTests', {
    typePropertiesAreCorrect: function () {
        var format = Bridge.NumberFormatInfo.invariantInfo;
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.NumberFormatInfo), "Bridge.NumberFormatInfo");
        Bridge.get(Bridge.Test.Assert).$true(true);
    },
    getFormatWorks: function () {
        var format = Bridge.NumberFormatInfo.invariantInfo;
        Bridge.get(Bridge.Test.Assert).areEqual(format.getFormat(Bridge.Int), null);
        Bridge.get(Bridge.Test.Assert).areEqual(format.getFormat(Bridge.NumberFormatInfo), format);
    },
    invariantWorks: function () {
        var format = Bridge.NumberFormatInfo.invariantInfo;
        Bridge.get(Bridge.Test.Assert).areEqual(format.nanSymbol, "NaN");
        Bridge.get(Bridge.Test.Assert).areEqual(format.negativeSign, "-");
        Bridge.get(Bridge.Test.Assert).areEqual(format.positiveSign, "+");
        Bridge.get(Bridge.Test.Assert).areEqual(format.negativeInfinitySymbol, "-Infinity");
        Bridge.get(Bridge.Test.Assert).areEqual(format.positiveInfinitySymbol, "Infinity");

        Bridge.get(Bridge.Test.Assert).areEqual(format.percentSymbol, "%");
        Bridge.get(Bridge.Test.Assert).areDeepEqual(format.percentGroupSizes, [3]);
        Bridge.get(Bridge.Test.Assert).areEqual(format.percentDecimalDigits, 2);
        Bridge.get(Bridge.Test.Assert).areEqual(format.percentDecimalSeparator, ".");
        Bridge.get(Bridge.Test.Assert).areEqual(format.percentGroupSeparator, ",");
        Bridge.get(Bridge.Test.Assert).areEqual(format.percentPositivePattern, 0);
        Bridge.get(Bridge.Test.Assert).areEqual(format.percentNegativePattern, 0);

        Bridge.get(Bridge.Test.Assert).areEqual(format.currencySymbol, "¤");
        Bridge.get(Bridge.Test.Assert).areDeepEqual(format.currencyGroupSizes, [3]);
        Bridge.get(Bridge.Test.Assert).areEqual(format.currencyDecimalDigits, 2);
        Bridge.get(Bridge.Test.Assert).areEqual(format.currencyDecimalSeparator, ".");
        Bridge.get(Bridge.Test.Assert).areEqual(format.currencyGroupSeparator, ",");
        Bridge.get(Bridge.Test.Assert).areEqual(format.currencyNegativePattern, 0);
        Bridge.get(Bridge.Test.Assert).areEqual(format.currencyPositivePattern, 0);

        Bridge.get(Bridge.Test.Assert).areDeepEqual(format.numberGroupSizes, [3]);
        Bridge.get(Bridge.Test.Assert).areEqual(format.numberDecimalDigits, 2);
        Bridge.get(Bridge.Test.Assert).areEqual(format.numberDecimalSeparator, ".");
        Bridge.get(Bridge.Test.Assert).areEqual(format.numberGroupSeparator, ",");
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests', {
    accessorsCanBeInvokedInstance: function () {
        var c = new Bridge.ClientTest.PropertyAccessorTests.C1();

        c.setP1(42);
        Bridge.get(Bridge.Test.Assert).areEqual$1(c.f1, 41, "F1 value");

        c.f1 = 15;
        Bridge.get(Bridge.Test.Assert).areEqual$1(c.getP1(), 16, "P1 value");

        c.f2 = 17;
        Bridge.get(Bridge.Test.Assert).areEqual$1(c.getP2(), 18, "P2 value");

        c.setP3(12);
        Bridge.get(Bridge.Test.Assert).areEqual$1(c.f3, 11, "F3 value");
    },
    accessorsCanBeInvokedStatic: function () {
        Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C1).setPS1(42);
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C1).fS1, 41, "FS1 value");

        Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C1).fS1 = 15;
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C1).getPS1(), 16, "PS1 value");

        Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C1).fS2 = 17;
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C1).getPS2(), 18, "PS2 value");

        Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C1).setPS3(12);
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C1).fS3, 11, "FS3 value");
    },
    accessorsCanBeInvokedGeneric: function () {
        var c = new Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int)();

        c.setP1(42);
        Bridge.get(Bridge.Test.Assert).areEqual$1(c.f1, 41, "F1 value");

        c.f1 = 15;
        Bridge.get(Bridge.Test.Assert).areEqual$1(c.getP1(), 16, "P1 value");

        c.f2 = 17;
        Bridge.get(Bridge.Test.Assert).areEqual$1(c.getP2(), 18, "P2 value");

        c.setP3(12);
        Bridge.get(Bridge.Test.Assert).areEqual$1(c.f3, 11, "F3 value");
    },
    accessorsCanBeInvokedGenericStatic: function () {
        Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int)).setPS1(42);
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int)).fS1, 41, "FS1 value");

        Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int)).fS1 = 15;
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int)).getPS1(), 16, "PS1 value");

        Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int)).fS2 = 17;
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int)).getPS2(), 18, "PS2 value");

        Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int)).setPS3(12);
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int)).fS3, 11, "FS3 value");
    },
    baseAccessorsCanBeInvoked: function () {
        var d = new Bridge.ClientTest.PropertyAccessorTests.D3();

        d.setP1(42);
        Bridge.get(Bridge.Test.Assert).areEqual$1(d.f1, 41, "F1 value");

        d.f1 = 15;
        Bridge.get(Bridge.Test.Assert).areEqual$1(d.getP1(), 16, "P1 value");

        d.f2 = 17;
        Bridge.get(Bridge.Test.Assert).areEqual$1(d.getP2(), 18, "P2 value");

        d.setP3(12);
        Bridge.get(Bridge.Test.Assert).areEqual$1(d.f3, 11, "F3 value");
    },
    baseAccessorsCanBeInvokedGeneric: function () {
        var d = new Bridge.ClientTest.PropertyAccessorTests.D4$1(Bridge.Int)();

        d.setP1(42);
        Bridge.get(Bridge.Test.Assert).areEqual$1(d.f1, 41, "F1 value");

        d.f1 = 15;
        Bridge.get(Bridge.Test.Assert).areEqual$1(d.getP1(), 16, "P1 value");

        d.f2 = 17;
        Bridge.get(Bridge.Test.Assert).areEqual$1(d.getP2(), 18, "P2 value");

        d.setP3(12);
        Bridge.get(Bridge.Test.Assert).areEqual$1(d.f3, 11, "F3 value");
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.BooleanTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(true, Boolean));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Boolean), "Boolean");
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIsFalse: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(this.getDefaultValue(Boolean)(), false);
    },
    creatingInstanceReturnsFalse: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(new Boolean(), false);
    },
    defaultConstructorReturnsFalse: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(new Boolean(), false);
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode((true)), Bridge.getHashCode((true)));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode((false)), Bridge.getHashCode((false)));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode((false)), Bridge.getHashCode((true)));
    },
    objectEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals((true), true));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals((true), false));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals((false), true));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals((false), false));
    },
    boolEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals((true), true));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals((true), false));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals((false), true));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals((false), false));
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.ByteTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(Bridge.cast(0, Bridge.Int), Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.is(0.5, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(-1, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(256, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        var b = Bridge.cast(0, Bridge.Int);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(b, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(b, Bridge.IComparable$1(Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(b, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(b, Bridge.IFormattable));
    },
    castsWork: function () {
        var i1 = -1, i2 = 0, i3 = 234, i4 = 255, i5 = 256;
        var ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 255, ni5 = 256, ni6 = null;

        // TODO unchecked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -1, "-1 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 255, "255 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 256, "256 unchecked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni1), Bridge.Int, true), -1, "nullable -1 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), 0, "nullable 0 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 234, "nullable 234 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 255, "nullable 255 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni5), Bridge.Int, true), 256, "nullable 256 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 255, "256 checked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), 0, "nullable 0 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 234, "nullable 234 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 255, "nullable 255 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(0, 0);
        Bridge.get(Bridge.Test.Assert).areEqual(255, 255);
    },
    formatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(18, Bridge.Int))), "x"), "12");
    },
    iFormattableToStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(18, Bridge.Int))), "x"), "12");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("234", numberResult, 0, 255);
        Bridge.get(Bridge.Test.Assert).$true(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 234);

        result = Bridge.Int.tryParseInt("", numberResult, 0, 255);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, 0, 255);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, 0, 255);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("54768", numberResult, 0, 255);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 54768);

        result = Bridge.Int.tryParseInt("-1", numberResult, 0, 255);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, -1);

        result = Bridge.Int.tryParseInt("2.5", numberResult, 0, 255);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.parseInt("234", 0, 255), 234);
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("", 0, 255);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt(null, 0, 255);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("notanumber", 0, 255);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("54768", 0, 255);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("-1", 0, 255);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("2.5", 0, 255);
        });
    },
    toStringWithoutRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123, Bridge.Int))).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123, Bridge.Int))).toString(10), "123");
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(18, Bridge.Int))).toString(16), "12");
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))));
    },
    equalsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(1, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(1, Bridge.Int))), Bridge.cast(1, Bridge.Int)));

        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.CharTests', {
    typePropertiesAreInt32: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(0, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.is(0.5, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(-1, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(65536, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
    },
    castsWork: function () {
        var i1 = -1, i2 = 0, i3 = 234, i4 = 65535, i5 = 65536;
        var ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 65535, ni5 = 65536, ni6 = null;

        //unchecked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(i1, Bridge.Int), Bridge.Int), -1, "-1 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(i2, Bridge.Int), Bridge.Int), 0, "0 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(i3, Bridge.Int), Bridge.Int), 234, "234 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(i4, Bridge.Int), Bridge.Int), 65535, "65535 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(i5, Bridge.Int), Bridge.Int), 65536, "65536 unchecked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(Bridge.Nullable.lift(ni1), Bridge.Int, true), Bridge.Int, true), -1, "nullable -1 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), Bridge.Int, true), 0, "nullable 0 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), Bridge.Int, true), 234, "nullable 234 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), Bridge.Int, true), 65535, "nullable 65535 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(Bridge.Nullable.lift(ni5), Bridge.Int, true), Bridge.Int, true), 65536, "nullable 65536 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(i2, Bridge.Int), Bridge.Int, true), 0, "0 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(i3, Bridge.Int), Bridge.Int, true), 234, "234 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(i4, Bridge.Int), Bridge.Int, true), 65535, "65535 checked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), Bridge.Int, true), 0, "nullable 0 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), Bridge.Int, true), 234, "nullable 234 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), Bridge.Int, true), 65535, "nullable 65535 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(this.getDefaultValue(Bridge.Int)(), Bridge.Int), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.cast(Number(), Bridge.Int), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(0, Bridge.Int), 0);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(65535, Bridge.Int), 65535);
    },
    charComparisonWorks: function () {
        var a = 97, a2 = 97, b = 98;
        Bridge.get(Bridge.Test.Assert).$true(a === a2);
        Bridge.get(Bridge.Test.Assert).$false(a === b);
        Bridge.get(Bridge.Test.Assert).$false(a !== a2);
        Bridge.get(Bridge.Test.Assert).$true(a !== b);
        Bridge.get(Bridge.Test.Assert).$false(a < a2);
        Bridge.get(Bridge.Test.Assert).$true(a < b);
    },
    parseWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Char.charCodeAt("a", 0), 97, "Parse 1");
        Bridge.get(Bridge.Test.Assert).throws$5(function () {
            Bridge.Char.charCodeAt(null, 0);
        }, "Parse 2");
        Bridge.get(Bridge.Test.Assert).throws$5(function () {
            Bridge.Char.charCodeAt("", 0);
        }, "Parse 3");
        Bridge.get(Bridge.Test.Assert).throws$5(function () {
            Bridge.Char.charCodeAt("ab", 0);
        }, "Parse 4");
    },
    formatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format((35), "x4"), "0023");
    },
    iFormattableToStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format((35), "x4"), "0023");
    },
    toStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(String.fromCharCode((65)), "A");
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode((48)), Bridge.getHashCode((48)));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode((49)), Bridge.getHashCode((49)));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode((48)), Bridge.getHashCode((49)));
    },
    equalsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals((48), Bridge.cast(48, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals((49), Bridge.cast(48, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals((48), Bridge.cast(49, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals((49), Bridge.cast(49, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((48), 48));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((49), 48));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((48), 49));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((49), 49));
    },
    compareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((49), 48) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((48), 49) < 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((48), 48) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((49), 49) === 0);
    },
    isLowerWorks: function () {
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.isLower(97), "#1");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.isLower(65), "#2");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.isLower(51), "#3");
    },
    isUpperWorks: function () {
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.isUpper(65), "#1");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.isUpper(97), "#2");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.isUpper(51), "#3");
    },
    toLowerWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(String.fromCharCode(65).toLowerCase().charCodeAt(0), Bridge.Int), Bridge.cast(97, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(String.fromCharCode(97).toLowerCase().charCodeAt(0), Bridge.Int), Bridge.cast(97, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(String.fromCharCode(51).toLowerCase().charCodeAt(0), Bridge.Int), Bridge.cast(51, Bridge.Int));
    },
    toUpperWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(String.fromCharCode(65).toUpperCase().charCodeAt(0), Bridge.Int), Bridge.cast(65, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(String.fromCharCode(97).toUpperCase().charCodeAt(0), Bridge.Int), Bridge.cast(65, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(String.fromCharCode(51).toUpperCase().charCodeAt(0), Bridge.Int), Bridge.cast(51, Bridge.Int));
    },
    isDigitWorks: function () {
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.Char.isDigit(48), "#1");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.Char.isDigit(46), "#2");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.Char.isDigit(65), "#3");
    },
    isWhiteSpaceWorks: function () {
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.Char.isWhiteSpace(String.fromCharCode(32)), "#1");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.Char.isWhiteSpace(String.fromCharCode(10)), "#2");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.Char.isWhiteSpace(String.fromCharCode(65)), "#3");
    },
    isDigitWithStringAndIndexWorks: function () {
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.Char.isDigit("abc0def".charCodeAt(3)), "#1");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.Char.isDigit("1".charCodeAt(0)), "#2");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.Char.isDigit("abcdef5".charCodeAt(6)), "#3");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.Char.isDigit("9abcdef".charCodeAt(0)), "#4");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.Char.isDigit(".012345".charCodeAt(0)), "#5");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.Char.isDigit("012345.".charCodeAt(6)), "#6");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.Char.isDigit("012.345".charCodeAt(3)), "#7");
    },
    isWhiteSpaceWithStringAndIndexWorks: function () {
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.Char.isWhiteSpace("abc def".charAt(3)), "#1");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.Char.isWhiteSpace("\t".charAt(0)), "#2");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.Char.isWhiteSpace("abcdef\r".charAt(6)), "#3");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.Char.isWhiteSpace("\nabcdef".charAt(0)), "#4");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.Char.isWhiteSpace(".\r\n     ".charAt(0)), "#5");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.Char.isWhiteSpace("\r\n    .".charAt(6)), "#6");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.Char.isWhiteSpace("\r  .\n  ".charAt(3)), "#7");
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.DecimalTests', {
    assertIsDecimalAndEqualTo: function (v, d, message) {
        if (message === void 0) { message = null; }
        Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.is(v, Bridge.Decimal), true, message);
        Bridge.get(Bridge.Test.Assert).areStrictEqual$1(v.toString(), Bridge.Int.format(d, 'G'), message);
    },
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(Bridge.Decimal.lift(0.5), Bridge.Decimal));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.Decimal), "Bridge.Decimal");
        var d = Bridge.Decimal.lift(0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(d, Bridge.Decimal));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(d, Bridge.IFormattable));
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        this.assertIsDecimalAndEqualTo(this.getDefaultValue(Bridge.Decimal)(), 0);
    },
    creatingInstanceReturnsZero: function () {
        this.assertIsDecimalAndEqualTo(new Bridge.Decimal(), 0);
    },
    constantsWork: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.One, 1);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.Zero, 0);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.MinusOne, -1);
    },
    defaultConstructorReturnsZero: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(), 0);
    },
    convertingConstructorsWork: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(0.5), 0.5);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(Bridge.cast(1.5, Number)), 1.5);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(2), 2);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(Bridge.cast(3, Bridge.Int)), 3);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(Bridge.cast(4, Bridge.Int)), 4);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(Bridge.cast(5, Bridge.Int)), 5);
    },
    formatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format((Bridge.Decimal(291.0)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format((Bridge.Decimal(291.0)), "x"), "123");
    },
    toStringWithoutRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format((Bridge.Decimal(123.0)), 'G'), "123");
    },
    addWithStringWorks: function () {
        var d1 = Bridge.Decimal(1.0);
        var s1 = d1 + "#";

        Bridge.get(Bridge.Test.Assert).areEqual$1(s1, "1#", "decimal?");

        var d2 = Bridge.Decimal(2.0);
        var s2 = d2 + "!";

        Bridge.get(Bridge.Test.Assert).areEqual$1(s2, "2!", "decimal");
    },
    conversionsToDecimalWork: function () {
        var x = 0;
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.Decimal.lift(Bridge.cast((x + 1), Bridge.Int)), Bridge.Decimal(1.0));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.Decimal.lift(Bridge.cast((x + 2), Bridge.Int)), Bridge.Decimal(2.0));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.Decimal.lift(Bridge.cast((x + 3), Bridge.Int)), Bridge.Decimal(3.0));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.Decimal.lift(Bridge.cast((x + 4), Bridge.Int)), Bridge.Decimal(4.0));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.Decimal.lift(Bridge.cast((x + 5), Bridge.Int)), Bridge.Decimal(5.0));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.Decimal.lift((x + 6)), Bridge.Decimal(6.0));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.Decimal.lift(Bridge.cast((x + 7), Bridge.Int)), Bridge.Decimal(7.0));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.Decimal.lift(Bridge.cast((x + 8), Bridge.Int)), Bridge.Decimal(8.0));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.Decimal.lift(Bridge.cast((x + 9), Bridge.Int)), Bridge.Decimal(9.0));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.Decimal.lift(Bridge.cast((x + 10.5), Number)), Bridge.Decimal(10.5));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.Decimal.lift((x + 11.5)), Bridge.Decimal(11.5));
    },
    conversionsFromDecimalWork: function () {
        var x = 0;
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 1))), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 2))), 2);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 3))), 3);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 4))), 4);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 5))), Bridge.Int), 5);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 6))), 6);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 7))), 7);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 8))), 8);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 9))), 9);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Decimal.toFloat(Bridge.Decimal.lift((x + 10.5))), 10.5);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Decimal.toFloat(Bridge.Decimal.lift((x + 11.5))), 11.5);
    },
    operatorsWork: function () {
        var $t;
        var x = Bridge.Decimal(3);
        this.assertIsDecimalAndEqualTo(x.clone(), 3);
        this.assertIsDecimalAndEqualTo(x.neg(), -3);
        this.assertIsDecimalAndEqualTo(x.add(Bridge.Decimal(4.0)), 7);
        this.assertIsDecimalAndEqualTo(x.sub(Bridge.Decimal(2.0)), 1);
        this.assertIsDecimalAndEqualTo(($t = x, x = x.add(1), $t), 3);
        this.assertIsDecimalAndEqualTo((x = x.add(1)), 5);
        this.assertIsDecimalAndEqualTo(($t = x, x = x.sub(1), $t), 5);
        this.assertIsDecimalAndEqualTo((x = x.sub(1)), 3);
        this.assertIsDecimalAndEqualTo(x.mul(Bridge.Decimal(3.0)), 9);
        this.assertIsDecimalAndEqualTo(x.div(Bridge.Decimal(2.0)), 1.5);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(14.0).mod(x), 2);
        Bridge.get(Bridge.Test.Assert).$true(x.equalsT(Bridge.Decimal(3.0)));
        Bridge.get(Bridge.Test.Assert).$false(x.equalsT(Bridge.Decimal(4.0)));
        Bridge.get(Bridge.Test.Assert).$false(x.ne(Bridge.Decimal(3.0)));
        Bridge.get(Bridge.Test.Assert).$true(x.ne(Bridge.Decimal(4.0)));
        Bridge.get(Bridge.Test.Assert).$true(x.gt(Bridge.Decimal(1.0)));
        Bridge.get(Bridge.Test.Assert).$false(x.gt(Bridge.Decimal(3.0)));
        Bridge.get(Bridge.Test.Assert).$true(x.gte(Bridge.Decimal(3.0)));
        Bridge.get(Bridge.Test.Assert).$false(x.gte(Bridge.Decimal(4.0)));
        Bridge.get(Bridge.Test.Assert).$true(x.lt(Bridge.Decimal(4.0)));
        Bridge.get(Bridge.Test.Assert).$false(x.lt(Bridge.Decimal(3.0)));
        Bridge.get(Bridge.Test.Assert).$true(x.lte(Bridge.Decimal(3.0)));
        Bridge.get(Bridge.Test.Assert).$false(x.lte(Bridge.Decimal(2.0)));
    },
    addWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.Decimal(3.0).add(Bridge.Decimal(4.0)), Bridge.Decimal(7.0));
    },
    ceilingWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(3.4).ceil(), 4);
    },
    divideWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(3.0).div(Bridge.Decimal(4.0)), 0.75);
    },
    floorWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(3.2).floor(), 3);
    },
    remainderWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(14.0).mod(Bridge.Decimal(3.0)), 2);
    },
    multiplyWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(3.0).mul(Bridge.Decimal(2.0)), 6);
    },
    negateWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(0).sub(Bridge.Decimal(3.0)), -3);
    },
    roundWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 6), 3);
    },
    roundWithModeWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 0), 4, "Up 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 0), 4, "Up 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 0), 4, "Up 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 0), -4, "Up -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 0), -4, "Up -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 0), -4, "Up -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 1), 3, "Down 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 1), 3, "Down 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 1), 3, "Down 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 1), -3, "Down -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 1), -3, "Down -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 1), -3, "Down -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 2), 4, "InfinityPos 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 2), 4, "InfinityPos 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 2), 4, "InfinityPos 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 2), -3, "InfinityPos -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 2), -3, "InfinityPos -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 2), -3, "InfinityPos -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 3), 3, "InfinityNeg 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 3), 3, "InfinityNeg 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 3), 3, "InfinityNeg 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 3), -4, "InfinityNeg -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 3), -4, "InfinityNeg -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 3), -4, "InfinityNeg -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 5), 4, "TowardsZero 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 5), 3, "TowardsZero 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 5), 3, "TowardsZero 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 5), -3, "TowardsZero -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 5), -3, "TowardsZero -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 5), -4, "TowardsZero -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 4), 4, "AwayFromZero 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 4), 4, "AwayFromZero 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 4), 3, "AwayFromZero 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 4), -3, "AwayFromZero -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 4), -4, "AwayFromZero -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 4), -4, "AwayFromZero -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 7), 4, "Ceil 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 7), 4, "Ceil 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 7), 3, "Ceil 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 7), -3, "Ceil -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 7), -3, "Ceil -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 7), -4, "Ceil -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 8), 4, "Floor 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 8), 3, "Floor 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 8), 3, "Floor 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 8), -3, "Floor -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 8), -4, "Floor -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 8), -4, "Floor -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 6), 4, "ToEven 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 6), 4, "ToEven 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 6), 3, "ToEven 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 6), -3, "ToEven -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 6), -4, "ToEven -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 6), -4, "ToEven -3.8m");
    },
    subtractWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(7.0).sub(Bridge.Decimal(3.0)), 4);
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.getHashCode(((Bridge.Decimal.lift(0)))), Bridge.getHashCode(((Bridge.Decimal.lift(0)))));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.getHashCode(((Bridge.Decimal.lift(1)))), Bridge.getHashCode(((Bridge.Decimal.lift(1)))));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(((Bridge.Decimal.lift(0)))), Bridge.getHashCode(((Bridge.Decimal.lift(1)))));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(((Bridge.Decimal.lift(0)))), Bridge.getHashCode(((Bridge.Decimal.lift(0.5)))));
    },
    objectEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.Decimal.lift(0))), Bridge.Decimal.lift(0)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.Decimal.lift(1))), Bridge.Decimal.lift(0)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.Decimal.lift(0))), Bridge.Decimal.lift(0.5)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.Decimal.lift(1))), Bridge.Decimal.lift(1)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.Decimal.lift(0))), Bridge.Decimal.MaxValue));
    },
    decimalEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(((Bridge.Decimal.lift(0))).equalsT(Bridge.Decimal.lift(0)));
        Bridge.get(Bridge.Test.Assert).$false(((Bridge.Decimal.lift(1))).equalsT(Bridge.Decimal.lift(0)));
        Bridge.get(Bridge.Test.Assert).$false(((Bridge.Decimal.lift(0))).equalsT(Bridge.Decimal.lift(0.5)));
        Bridge.get(Bridge.Test.Assert).$true(((Bridge.Decimal.lift(1))).equalsT(Bridge.Decimal.lift(1)));
        Bridge.get(Bridge.Test.Assert).$false(((Bridge.Decimal.lift(0))).equalsT(Bridge.Decimal.MaxValue));
    },
    compareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(((Bridge.Decimal.lift(0))).compareTo(Bridge.Decimal.lift(0)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(((Bridge.Decimal.lift(1))).compareTo(Bridge.Decimal.lift(0)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(((Bridge.Decimal.lift(0))).compareTo(Bridge.Decimal.lift(0.5)) < 0);
        Bridge.get(Bridge.Test.Assert).$true(((Bridge.Decimal.lift(1))).compareTo(Bridge.Decimal.lift(1)) === 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.Decimal.lift(0)), Bridge.IComparable$1(Bridge.Decimal))), Bridge.Decimal.lift(0)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.Decimal.lift(1)), Bridge.IComparable$1(Bridge.Decimal))), Bridge.Decimal.lift(0)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.Decimal.lift(0)), Bridge.IComparable$1(Bridge.Decimal))), Bridge.Decimal.lift(0.5)) < 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.Decimal.lift(1)), Bridge.IComparable$1(Bridge.Decimal))), Bridge.Decimal.lift(1)) === 0);
    },
    fullCoalesceWorks: function () {
        var a = Bridge.Decimal(1.0);
        var b = a.equalsT(Bridge.Decimal(1.0)) ? Bridge.Decimal(2.0) : Bridge.Decimal(3.0);

        this.assertIsDecimalAndEqualTo(b, 2);
    },
    shortCoalesceWorks: function () {
        var $t, $t1;
        var c = Bridge.Decimal(1.0);
        var d = ($t = c, Bridge.hasValue($t) ? $t : Bridge.Decimal(2.0));

        this.assertIsDecimalAndEqualTo(d, 1);

        var e = Bridge.Decimal(3);
        var f = ($t1 = e, Bridge.hasValue($t1) ? $t1 : Bridge.Decimal(0));

        this.assertIsDecimalAndEqualTo(f, 3);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.DoubleTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(0.5, Number));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Number), "Number");
        var d = Bridge.cast(0, Number);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(d, Number));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(d, Bridge.IFormattable));
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(this.getDefaultValue(Number)(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(new Number(), 0);
    },
    constantsWork: function () {
        var zero = 0;
        Bridge.get(Bridge.Test.Assert).true$1(Number.MAX_VALUE > Bridge.cast(1.7E+308, Number), "MaxValue should be correct");
        Bridge.get(Bridge.Test.Assert).areEqual$1(4.94065645841247E-324, 4.94065645841247E-324, "MinValue should be correct");
        Bridge.get(Bridge.Test.Assert).true$1(isNaN(Number.NaN), "NaN should be correct");
        Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Number.POSITIVE_INFINITY, 1 / zero, "PositiveInfinity should be correct");
        Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Number.NEGATIVE_INFINITY, -1 / zero, "NegativeInfinity should be correct");
    },
    defaultConstructorReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Number(), 0);
    },
    formatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((291.0)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format((291.0), "x"), "123");
    },
    toStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((123.0)), 'G'), "123");
    },
    toExponentialWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((123.0)).toExponential(), "1.23e+2");
    },
    toExponentialWithFractionalDigitsWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((123.0)).toExponential(1), "1.2e+2");
    },
    toFixed: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((123.0)).toFixed(), "123");
    },
    toFixedWithFractionalDigitsWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((123.0)).toFixed(1), "123.0");
    },
    toPrecisionWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((12345.0)).toPrecision(), "12345");
    },
    toPrecisionWithPrecisionWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((12345.0)).toPrecision(2), "1.2e+4");
    },
    isPositiveInfinityWorks: function () {
        var inf = "Infinity";
        Bridge.get(Bridge.Test.Assert).false$1((-inf === Number.POSITIVE_INFINITY), "-inf");
        Bridge.get(Bridge.Test.Assert).false$1((0.0 === Number.POSITIVE_INFINITY), "0.0");
        Bridge.get(Bridge.Test.Assert).false$1((Number.NaN === Number.POSITIVE_INFINITY), "Double.NaN");
    },
    isNegativeInfinityWorks: function () {
        var inf = "Infinity";
        Bridge.get(Bridge.Test.Assert).$false((inf === Number.NEGATIVE_INFINITY));
        Bridge.get(Bridge.Test.Assert).$true((-inf === Number.NEGATIVE_INFINITY));
        Bridge.get(Bridge.Test.Assert).$false((0.0 === Number.NEGATIVE_INFINITY));
        Bridge.get(Bridge.Test.Assert).$false((Number.NaN === Number.NEGATIVE_INFINITY));
    },
    isInfinityWorks: function () {
        var inf = "Infinity";
        Bridge.get(Bridge.Test.Assert).$true((Math.abs(inf) === Number.POSITIVE_INFINITY));
        Bridge.get(Bridge.Test.Assert).$true((Math.abs(-inf) === Number.POSITIVE_INFINITY));
        Bridge.get(Bridge.Test.Assert).$false((Math.abs(0.0) === Number.POSITIVE_INFINITY));
        Bridge.get(Bridge.Test.Assert).$false((Math.abs(Number.NaN) === Number.POSITIVE_INFINITY));
    },
    isFiniteWorks: function () {
        var zero = 0, one = 1;
        Bridge.get(Bridge.Test.Assert).$true(isFinite(one));
        Bridge.get(Bridge.Test.Assert).$false(isFinite(one / zero));
        Bridge.get(Bridge.Test.Assert).$false(isFinite(zero / zero));
    },
    isNaNWorks: function () {
        var zero = 0, one = 1;
        Bridge.get(Bridge.Test.Assert).$false(isNaN(one));
        Bridge.get(Bridge.Test.Assert).$false(isNaN(one / zero));
        Bridge.get(Bridge.Test.Assert).$true(isNaN(zero / zero));
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(0, Number)))), Bridge.getHashCode(((Bridge.cast(0, Number)))));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(1, Number)))), Bridge.getHashCode(((Bridge.cast(1, Number)))));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(((Bridge.cast(0, Number)))), Bridge.getHashCode(((Bridge.cast(1, Number)))));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(((Bridge.cast(0, Number)))), Bridge.getHashCode(((0.5))));
    },
    objectEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(0, Number))), Bridge.cast(0, Number)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(1, Number))), Bridge.cast(0, Number)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(0, Number))), 0.5));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(1, Number))), Bridge.cast(1, Number)));
    },
    doubleEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(0, Number))), Bridge.cast(0, Number)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(1, Number))), Bridge.cast(0, Number)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(0, Number))), 0.5));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(1, Number))), Bridge.cast(1, Number)));
    },
    compareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Number))), Bridge.cast(0, Number)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(1, Number))), Bridge.cast(0, Number)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Number))), 0.5) < 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(1, Number))), Bridge.cast(1, Number)) === 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Number)), Bridge.IComparable$1(Number))), Bridge.cast(0, Number)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Number)), Bridge.IComparable$1(Number))), Bridge.cast(0, Number)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Number)), Bridge.IComparable$1(Number))), 0.5) < 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Number)), Bridge.IComparable$1(Number))), Bridge.cast(1, Number)) === 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.EnumTests', {
    typePropertiesAreCorrect: function () {
        //Assert.AreEqual(typeof(Enum).GetClassName(), "Bridge.Enum");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum), "Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum");
        Bridge.get(Bridge.Test.Assert).$true(Bridge.hasValue(Bridge.get(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum).firstValue));
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueOfEnumClassIsNull: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(this.getDefaultValue(Bridge.Enum)(), null);
    },
    defaultValueOfEnumTypeIsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(this.getDefaultValue(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum)(), 0);
    },
    defaultConstructorOfEnumTypeReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(new Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum().valueOf(), 0);
    },
    firstValueOfEnumIsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.get(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum).firstValue, 0);
    },
    creatingInstanceOfEnumTypeReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(new Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum(), 0);
    },
    defaultExpressionWithEnumReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.getDefaultValue(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum), 0);
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(Bridge.get(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum).firstValue), Bridge.getHashCode(Bridge.get(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum).firstValue));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(Bridge.get(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum).firstValue), Bridge.getHashCode(Bridge.get(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum).secondValue));
    },
    equalsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(Bridge.get(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum).firstValue, Bridge.get(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum).firstValue));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(Bridge.get(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum).firstValue, Bridge.get(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum).secondValue));
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.Int16Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(Bridge.cast(0, Bridge.Int), Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.is(0.5, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(-32769, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(32768, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");

        var s = Bridge.cast(0, Bridge.Int);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(s, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(s, Bridge.IComparable$1(Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(s, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(s, Bridge.IFormattable));

    },
    castsWork: function () {
        var i1 = -32769, i2 = -32768, i3 = 5754, i4 = 32767, i5 = 32768;
        var ni1 = -32769, ni2 = -32768, ni3 = 5754, ni4 = 32767, ni5 = 32768, ni6 = null;

        // TODO unchecked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -32769, "-32769 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i2, Bridge.Int), -32768, "-32768 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 5754, "5754 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 32767, "32767 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 32768, "32768 unchecked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni1), Bridge.Int, true), -32769, "nullable -32769 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), -32768, "nullable -32768 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 5754, "nullable 5754 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 32767, "nullable 32767 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni5), Bridge.Int, true), 32768, "nullable 32768 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i2, Bridge.Int), -32768, "-32768 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 5754, "5754 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 32767, "32767 checked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), -32768, "nullable -32768 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 5754, "nullable 5754 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 32767, "nullable 32767 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(-32768, -32768);
        Bridge.get(Bridge.Test.Assert).areEqual(32767, 32767);
    },
    formatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(291, Bridge.Int))), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(291, Bridge.Int))), "x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("234", numberResult, -32768, 32767);
        Bridge.get(Bridge.Test.Assert).$true(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 234);

        result = Bridge.Int.tryParseInt("", numberResult, -32768, 32767);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, -32768, 32767);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, -32768, 32767);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("54768", numberResult, -32768, 32767);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 54768);

        result = Bridge.Int.tryParseInt("-55678", numberResult, -32768, 32767);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, -55678);

        result = Bridge.Int.tryParseInt("2.5", numberResult, -32768, 32767);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.parseInt("234", -32768, 32767), 234);
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("", -32768, 32767);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt(null, -32768, 32767);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("notanumber", -32768, 32767);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("54768", -32768, 32767);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("-55678", -32768, 32767);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("2.5", -32768, 32767);
        });
    },
    toStringWithoutRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123, Bridge.Int))).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123, Bridge.Int))).toString(10), "123");
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(291, Bridge.Int))).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))));
    },
    equalsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(1, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(1, Bridge.Int))), Bridge.cast(1, Bridge.Int)));

        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.Int32Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(0, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.is(0.5, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(-2147483649, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(2147483648, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");

        var i = 0;
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(i, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(i, Bridge.IComparable$1(Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(i, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(i, Bridge.IFormattable));
    },
    castsWork: function () {
        var i1 = -2147483649, i2 = -2147483648, i3 = 5754, i4 = 2147483647, i5 = 2147483648;
        var ni1 = -2147483649, ni2 = -2147483648, ni3 = 5754, ni4 = 2147483647, ni5 = 2147483648, ni6 = null;

        //unchecked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(Bridge.Nullable.lift(i1)), Bridge.Int), -2147483649, "-2147483649 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(Bridge.Nullable.lift(i2)), Bridge.Int), -2147483648, "-2147483648 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(Bridge.Nullable.lift(i3)), Bridge.Int), 5754, "5754 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(Bridge.Nullable.lift(i4)), Bridge.Int), 2147483647, "2147483647 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(Bridge.Nullable.lift(i5)), Bridge.Int), 2147483648, "2147483648 unchecked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni1), Bridge.Int, true), -2147483649, "nullable -2147483649 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), -2147483648, "nullable -2147483648 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 5754, "nullable 5754 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 2147483647, "nullable 2147483647 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni5), Bridge.Int, true), 2147483648, "nullable 2147483648 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(Bridge.Nullable.lift(i2)), Bridge.Int), -2147483648, "-2147483648 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(Bridge.Nullable.lift(i3)), Bridge.Int), 5754, "5754 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(Bridge.Nullable.lift(i4)), Bridge.Int), 2147483647, "2147483647 checked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), -2147483648, "nullable -2147483648 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 5754, "nullable 5754 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 2147483647, "nullable 2147483647 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null checked");
        }
    },
    typeIsWorksForInt32: function () {
        Bridge.get(Bridge.Test.Assert).$false(Bridge.is(null, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.is(1.5, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.is({ }, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(1, Bridge.Int));
    },
    typeAsWorksForInt32: function () {
        Bridge.get(Bridge.Test.Assert).$false(Bridge.hasValue((Bridge.as(null, Bridge.Int, true))));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.hasValue((Bridge.as({ }, Bridge.Int, true))));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.hasValue((Bridge.as(1.5, Bridge.Int, true))));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.hasValue((Bridge.as(1, Bridge.Int, true))));
    },
    unboxingWorksForInt32: function () {
        var _null = null;
        var o = { };
        var d = 1.5;
        var i = 1;
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(_null, Bridge.Int, true), null);
        Bridge.get(Bridge.Test.Assert).throws$5(function () {
            var _ = Bridge.cast(o, Bridge.Int, true);
        }, "Cannot cast object to int?");
        Bridge.get(Bridge.Test.Assert).throws$5(function () {
            var _ = Bridge.cast(d, Bridge.Int, true);
        }, "Cannot cast decimal to int?");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(i, Bridge.Int, true), 1);
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(-2147483648, -2147483648);
        Bridge.get(Bridge.Test.Assert).areEqual(2147483647, 2147483647);
    },
    formatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((291)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((291)), "x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("57574", numberResult, -2147483648, 2147483647);
        Bridge.get(Bridge.Test.Assert).$true(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 57574);

        result = Bridge.Int.tryParseInt("-14", numberResult, -2147483648, 2147483647);
        Bridge.get(Bridge.Test.Assert).$true(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, -14);

        result = Bridge.Int.tryParseInt("", numberResult, -2147483648, 2147483647);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, -2147483648, 2147483647);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, -2147483648, 2147483647);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("2.5", numberResult, -2147483648, 2147483647);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.parseInt("57574", -2147483648, 2147483647), 57574);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.parseInt("-14", -2147483648, 2147483647), -14);

        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("", -2147483648, 2147483647);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt(null, -2147483648, 2147483647);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("notanumber", -2147483648, 2147483647);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("2147483648", -2147483648, 2147483647);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("-2147483649", -2147483648, 2147483647);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("2.5", -2147483648, 2147483647);
        });
    },
    toStringWithoutRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((123)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((123)).toString(10), "123");
        Bridge.get(Bridge.Test.Assert).areEqual(((291)).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((0))), Bridge.getHashCode(((0))));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((1))), Bridge.getHashCode(((1))));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(((0))), Bridge.getHashCode(((1))));
    },
    equalsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((0)), 0));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((1)), 0));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((0)), 1));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((1)), 1));
    },
    iEquatableEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((0)), 0));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((1)), 0));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((0)), 1));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((1)), 1));

        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((0), Bridge.IEquatable$1(Bridge.Int))), 0));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((1), Bridge.IEquatable$1(Bridge.Int))), 0));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((0), Bridge.IEquatable$1(Bridge.Int))), 1));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((1), Bridge.IEquatable$1(Bridge.Int))), 1));
    },
    compareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((0)), 0) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((1)), 0) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((0)), 1) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((0), Bridge.IComparable$1(Bridge.Int))), 0) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((1), Bridge.IComparable$1(Bridge.Int))), 0) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((0), Bridge.IComparable$1(Bridge.Int))), 1) < 0);
    },
    integerDivisionWorks: function () {
        var a = 17, b = 4, c = 0;
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.div(a, b), 4);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.div(-a, b), -4);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.div(a, -b), -4);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.div(-a, -b), 4);
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            var x = Bridge.Int.div(a, c);
        });
    },
    integerModuloWorks: function () {
        var a = 17, b = 4, c = 0;
        Bridge.get(Bridge.Test.Assert).areEqual(a % b, 1);
        Bridge.get(Bridge.Test.Assert).areEqual(-a % b, -1);
        Bridge.get(Bridge.Test.Assert).areEqual(a % -b, 1);
        Bridge.get(Bridge.Test.Assert).areEqual(-a % -b, -1);
        //Assert.Throws(() => { var x = a % c; });
    },
    integerDivisionByZeroThrowsDivideByZeroException: function () {
        var a = 17, b = 0;
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            var x = Bridge.Int.div(a, b);
        });
    },
    doublesAreTruncatedWhenConvertedToIntegers: function () {
        var d1 = 4.5;
        var d2 = null;
        var d3 = 8.5;
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.trunc(d1), 4);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.trunc(-d1), -4);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.trunc(Bridge.Nullable.lift(d2)), null);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.trunc(Bridge.Nullable.getValue(Bridge.Nullable.lift(d3))), 8);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.trunc(Bridge.Nullable.getValue(Bridge.Nullable.lift(Bridge.Nullable.neg(d3)))), -8);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.trunc(Bridge.Nullable.lift(d3)), 8);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.trunc(Bridge.Nullable.lift(Bridge.Nullable.neg(d3))), -8);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.Int64Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(Bridge.cast(0, Bridge.Int), Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.is(0.5, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(1E+100, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");

        var l = Bridge.cast(0, Bridge.Int);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(l, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(l, Bridge.IComparable$1(Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(l, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(l, Bridge.IFormattable));
    },
    castsWork: function () {
        var i3 = 5754, i4 = 9223372036854775000, i5 = 16223372036854776000;
        var ni3 = 5754, ni4 = 9223372036854775000, ni5 = 16223372036854776000, ni6 = null;

        // TODO unchecked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 5754, "5754 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 9223372036854775000, "9223372036854775000 unchecked");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.cast(i5, Bridge.Int) < 0, "16223372036854776000 unchecked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 5754, "nullable 5754 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 9223372036854775000, "nullable 9223372036854775000 unchecked");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Nullable.lt(Bridge.cast(Bridge.Nullable.lift(ni5), Bridge.Int, true), 0), "nullable 16223372036854776000 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 5754, "5754 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 9223372036854775000, "9223372036854775000 checked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 5754, "nullable 5754 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 9223372036854775000, "nullable 9223372036854775000 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(new Bridge.Int(), 0);
    },
    formatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(291, Bridge.Int))), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(291, Bridge.Int))), "x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("57574", numberResult, -9007199254740991, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$true(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 57574);

        result = Bridge.Int.tryParseInt("-14", numberResult, -9007199254740991, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$true(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, -14);

        result = Bridge.Int.tryParseInt("", numberResult, -9007199254740991, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, -9007199254740991, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, -9007199254740991, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("2.5", numberResult, -9007199254740991, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("-10000000000000000000", numberResult, -9007199254740991, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$false(result);
        //Assert.AreEqual(numberResult, 0);

        result = Bridge.Int.tryParseInt("10000000000000000000", numberResult, -9007199254740991, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$false(result);
        //Assert.AreEqual(numberResult, 0);
    },
    parseWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.parseInt("13453634535", -9007199254740991, 9007199254740991), 13453634535);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.parseInt("-234253069384953", -9007199254740991, 9007199254740991), -234253069384953);
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("", -9007199254740991, 9007199254740991);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt(null, -9007199254740991, 9007199254740991);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("notanumber", -9007199254740991, 9007199254740991);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("2.5", -9007199254740991, 9007199254740991);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("-10000000000000000000", -9007199254740991, 9007199254740991);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("10000000000000000000", -9007199254740991, 9007199254740991);
        });
    },
    castingOfLargeDoublesToInt64Works: function () {
        var d1 = 5000000000.5, d2 = -d1;
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Int.trunc(d1), 5000000000, "Positive");
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Int.trunc(d2), -5000000000, "Negative");
    },
    divisionOfLargeInt64Works: function () {
        var v1 = 50000000000, v2 = -v1, v3 = 3;
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Int.div(v1, v3), 16666666666, "Positive");
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Int.div(v2, v3), -16666666666, "Negative");
    },
    toStringWithoutRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123, Bridge.Int))).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123, Bridge.Int))).toString(10), "123");
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(291, Bridge.Int))).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.cast(Bridge.getHashCode((4294967296)), Bridge.Int) <= 4294967295);
    },
    equalsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(1, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(1, Bridge.Int))), Bridge.cast(1, Bridge.Int)));

        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.JsDateTimeTests', {
    statics: {
        dateTimes: function () {
            // TEST
            // [#83] by C#
            var str = "2015-03-24T10:48:09.1500225+03:00";
            var bridgeDate = Bridge.Date.parse(str);
            var bridgeDate1 = new Date(str);

            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(bridgeDate, bridgeDate1, "[#83] C# bridgeDate = bridgeDate1");

            // TEST
            // [#83] by JavaScript code. This is to check the same issue as above and just to check another way of calling QUnit from JavaScript
            //Script.Write<dynamic>("var str = \"2015-03-24T10:48:09.1500225+03:00\";");
            //Script.Write<dynamic>("var bridgeDate2 = Bridge.Date.parse(str);");
            //Script.Write<dynamic>("var jsDate = new Date(Date.parse(str));");
            //Script.Write<dynamic>("var format = \"yyyy-MM-dd hh:mm:ss\";");

            //Script.Write<dynamic>("assert.deepEqual(Bridge.Date.format(bridgeDate2, format), Bridge.Date.format(jsDate, format), \"[#83] js\");");
        }
    },
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Date), "Date");
        var o = new Date();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(o, Date), "o is DateTime");
    },
    defaultConstructorReturnsTodaysDate: function () {
        var dt = new Date();
        Bridge.get(Bridge.Test.Assert).$true(dt.getFullYear() > 2011);
    },
    creatingInstanceReturnsTodaysDate: function () {
        Bridge.get(Bridge.Test.Assert).$true(new Date().getFullYear() > 2011);
    },
    millisecondSinceEpochConstructorWorks: function () {
        var dt = new Date(43200000000);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getFullYear(), 1971);
    },
    stringConstructorWorks: function () {
        var dt = new Date("Aug 12, 2012");
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getFullYear(), 2012);
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getMonth() + 1), 8);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getDate(), 12);
    },
    yMDConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getFullYear(), 2011);
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getMonth() + 1), 7);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getDate(), 12);
    },
    yMDHConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getFullYear(), 2011);
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getMonth() + 1), 7);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getDate(), 12);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getHours(), 13);
    },
    yMDHNConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getFullYear(), 2011);
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getMonth() + 1), 7);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getDate(), 12);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getHours(), 13);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getMinutes(), 42);
    },
    yMDHNSConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getFullYear(), 2011);
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getMonth() + 1), 7);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getDate(), 12);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getHours(), 13);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getMinutes(), 42);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getSeconds(), 56);
    },
    yMDHNSUConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getFullYear(), 2011);
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getMonth() + 1), 7);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getDate(), 12);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getHours(), 13);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getMinutes(), 42);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getSeconds(), 56);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getMilliseconds(), 345);
    },
    nowWorks: function () {
        var dt = new Date();
        Bridge.get(Bridge.Test.Assert).$true(dt.getFullYear() > 2011);
    },
    uTCNowWorks: function () {
        var UTC = Bridge.Date.utcNow();
        var local = new Date();
        Bridge.get(Bridge.Test.Assert).$true(Math.abs((new Bridge.TimeSpan((new Date(local.getUTCFullYear(), (local.getUTCMonth() + 1) - 1, local.getUTCDate(), local.getUTCHours(), local.getUTCMinutes(), local.getUTCSeconds(), local.getUTCMilliseconds()) - UTC) * 10000)).getTotalMinutes()) < 1000);
    },
    toUniversalWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        var UTC = Bridge.Date.toUTC(dt);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCFullYear(), UTC.getFullYear());
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getUTCMonth() + 1), (UTC.getMonth() + 1));
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCDate(), UTC.getDate());
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCHours(), UTC.getHours());
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCMinutes(), UTC.getMinutes());
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCSeconds(), UTC.getSeconds());
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCMilliseconds(), UTC.getMilliseconds());
    },
    toLocalWorks: function () {
        var UTC = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        var dt = Bridge.Date.toLocal(UTC);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCFullYear(), UTC.getFullYear());
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getUTCMonth() + 1), (UTC.getMonth() + 1));
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCDate(), UTC.getDate());
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCHours(), UTC.getHours());
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCMinutes(), UTC.getMinutes());
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCSeconds(), UTC.getSeconds());
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCMilliseconds(), UTC.getMilliseconds());
    },
    todayWorks: function () {
        var dt = Bridge.Date.today();
        Bridge.get(Bridge.Test.Assert).$true(dt.getFullYear() > 2011);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getHours(), 0);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getMinutes(), 0);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getSeconds(), 0);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getMilliseconds(), 0);
    },
    formatWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Date.format(dt, "yyyy-MM-dd"), "2011-07-12");
    },
    localeFormatWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Date.format(dt, "yyyy-MM-dd"), "2011-07-12");
    },
    getFullYearWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getFullYear(), 2011);
    },
    getMonthWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getMonth() + 1), 7);
    },
    getDateWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getDate(), 12);
    },
    getHoursWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getHours(), 13);
    },
    getMinutesWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getMinutes(), 42);
    },
    getSecondsWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getSeconds(), 56);
    },
    getMillisecondsWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getMilliseconds(), 345);
    },
    getDayWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getDay(), 2);
    },
    getTimeWorks: function () {
        var dt = new Date(Date.UTC(1970, 1 - 1, 2));
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getTime(), 86400000);
    },
    valueOfWorks: function () {
        var dt = new Date(Date.UTC(1970, 1 - 1, 2));
        Bridge.get(Bridge.Test.Assert).areEqual(dt.valueOf(), 86400000);
    },
    getTimezoneOffsetWorks: function () {
        var dt = new Date(0);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getTimezoneOffset(), Bridge.Int.div(Bridge.cast((new Date(1970, 1 - 1, 1).valueOf()), Bridge.Int), 60000));
    },
    getUTCFullYearWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCFullYear(), 2011);
    },
    getUtcMonthWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getUTCMonth() + 1), 7);
    },
    getUTCDateWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCDate(), 12);
    },
    getUTCHoursWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCHours(), 13);
    },
    getUTCMinutesWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCMinutes(), 42);
    },
    getUTCSecondsWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCSeconds(), 56);
    },
    getUTCMillisecondsWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCMilliseconds(), 345);
    },
    getUTCDayWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCDay(), 2);
    },
    parseWorks: function () {
        var dt = Bridge.Date.parse("Aug 12, 2012");
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getFullYear(), 2012);
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getMonth() + 1), 8);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getDate(), 12);
    },
    parseExactWorks: function () {
        var dt = Bridge.Date.parseExact("2012-12-08", "yyyy-dd-MM");
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getFullYear(), 2012);
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getMonth() + 1), 8);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getDate(), 12);
    },
    parseExactWithCultureWorks: function () {
        var dt = Bridge.Date.parseExact("2012-12-08", "yyyy-dd-MM", Bridge.get(Bridge.CultureInfo).invariantCulture);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getFullYear(), 2012);
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getMonth() + 1), 8);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getDate(), 12);
    },
    parseExactUTCWorks: function () {
        //var dt = DateTime.ParseExactUTC("2012-12-08", "yyyy-dd-MM");
        var dt = Bridge.Date.parseExact("2012-12-08", "yyyy-dd-MM", null, true);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCFullYear(), 2012);
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getUTCMonth() + 1), 8);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCDate(), 12);
    },
    parseExactUTCWithCultureWorks: function () {
        var dt = Bridge.Date.parseExact("2012-12-08", "yyyy-dd-MM", Bridge.get(Bridge.CultureInfo).invariantCulture, true);
        //var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", CultureInfo.InvariantCulture);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCFullYear(), 2012);
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getUTCMonth() + 1), 8);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCDate(), 12);
    },
    toDateStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toDateString();
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.indexOf(s, "2011") >= 0 && Bridge.String.indexOf(s, "42") < 0);
    },
    toTimeStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toTimeString();
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.indexOf(s, "2011") < 0 && Bridge.String.indexOf(s, "42") >= 0);
    },
    toUTCStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toUTCString();
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.indexOf(s, "2011") >= 0 && Bridge.String.indexOf(s, "42") >= 0);
    },
    toLocaleDateStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toLocaleDateString();
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.indexOf(s, "2011") >= 0 && Bridge.String.indexOf(s, "42") < 0);
    },
    toLocaleTimeStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toLocaleTimeString();
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.indexOf(s, "2011") < 0 && Bridge.String.indexOf(s, "42") >= 0);
    },
    assertDateUTC: function (dt, year, month, day, hours, minutes, seconds, milliseconds) {
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCFullYear(), year);
        Bridge.get(Bridge.Test.Assert).areEqual((dt.getUTCMonth() + 1), month);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCDate(), day);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCHours(), hours);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCMinutes(), minutes);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCSeconds(), seconds);
        Bridge.get(Bridge.Test.Assert).areEqual(dt.getUTCMilliseconds(), milliseconds);
    },
    subtractingDatesWorks: function () {
        var ts = new Bridge.TimeSpan((new Date(2011, 7 - 1, 12) - new Date(2011, 7 - 1, 11)) * 10000);
        Bridge.get(Bridge.Test.Assert).areEqual(ts.getTotalMilliseconds(), 86400000);
    },
    subtractMethodReturningTimeSpanWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(new Bridge.TimeSpan((new Date(2011, 6 - 1, 12) - new Date(2011, 6 - 1, 11)) * 10000), new Bridge.TimeSpan(1, 0, 0, 0));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(new Bridge.TimeSpan((new Date(2011, 6 - 1, 12, 15, 0, 0) - new Date(2011, 6 - 1, 11, 13, 0, 0)) * 10000), new Bridge.TimeSpan(1, 2, 0, 0));
    },
    dateEqualityWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(new Date(2011, 7 - 1, 12), new Date(2011, 7 - 1, 12)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(new Date(2011, 7 - 1, 12), new Date(2011, 7 - 1, 13)));
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.equals(new Date(2011, 7 - 1, 12), null), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.equals(null, new Date(2011, 7 - 1, 12)), false);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Bridge.equals(null, null), true);
    },
    dateInequalityWorks: function () {
        Bridge.get(Bridge.Test.Assert).$false(!Bridge.equals(new Date(2011, 7 - 1, 12), new Date(2011, 7 - 1, 12)));
        Bridge.get(Bridge.Test.Assert).$true(!Bridge.equals(new Date(2011, 7 - 1, 12), new Date(2011, 7 - 1, 13)));
        Bridge.get(Bridge.Test.Assert).areStrictEqual(!Bridge.equals(new Date(2011, 7 - 1, 12), null), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(!Bridge.equals(null, new Date(2011, 7 - 1, 12)), true);
        Bridge.get(Bridge.Test.Assert).areStrictEqual(!Bridge.equals(null, null), false);
    },
    dateLessThanWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(new Date(2011, 7 - 1, 11) < new Date(2011, 7 - 1, 12));
        Bridge.get(Bridge.Test.Assert).$false(new Date(2011, 7 - 1, 12) < new Date(2011, 7 - 1, 12));
        Bridge.get(Bridge.Test.Assert).$false(new Date(2011, 7 - 1, 13) < new Date(2011, 7 - 1, 12));
    },
    dateLessEqualWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(new Date(2011, 7 - 1, 11) <= new Date(2011, 7 - 1, 12));
        Bridge.get(Bridge.Test.Assert).$true(new Date(2011, 7 - 1, 12) <= new Date(2011, 7 - 1, 12));
        Bridge.get(Bridge.Test.Assert).$false(new Date(2011, 7 - 1, 13) <= new Date(2011, 7 - 1, 12));
    },
    dateGreaterThanWorks: function () {
        Bridge.get(Bridge.Test.Assert).$false(new Date(2011, 7 - 1, 11) > new Date(2011, 7 - 1, 12));
        Bridge.get(Bridge.Test.Assert).$false(new Date(2011, 7 - 1, 12) > new Date(2011, 7 - 1, 12));
        Bridge.get(Bridge.Test.Assert).$true(new Date(2011, 7 - 1, 13) > new Date(2011, 7 - 1, 12));
    },
    dateGreaterEqualWorks: function () {
        Bridge.get(Bridge.Test.Assert).$false(new Date(2011, 7 - 1, 11) >= new Date(2011, 7 - 1, 12));
        Bridge.get(Bridge.Test.Assert).$true(new Date(2011, 7 - 1, 12) >= new Date(2011, 7 - 1, 12));
        Bridge.get(Bridge.Test.Assert).$true(new Date(2011, 7 - 1, 13) >= new Date(2011, 7 - 1, 12));
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(new Date(0)), Bridge.getHashCode(new Date(0)));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(new Date(1)), Bridge.getHashCode(new Date(1)));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(new Date(0)), Bridge.getHashCode(new Date(1)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.cast(Bridge.getHashCode(new Date(3000, 1 - 1, 1)), Bridge.Int) < 4294967295);
    },
    equalsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(new Date(0), new Date(0)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(new Date(1), new Date(0)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(new Date(0), new Date(1)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(new Date(1), new Date(1)));
    },
    dateTimeEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(new Date(0), new Date(0)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(new Date(1), new Date(0)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(new Date(0), new Date(1)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(new Date(1), new Date(1)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast(new Date(0), Bridge.IEquatable$1(Date))), new Date(0)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast(new Date(1), Bridge.IEquatable$1(Date))), new Date(0)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast(new Date(0), Bridge.IEquatable$1(Date))), new Date(1)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast(new Date(1), Bridge.IEquatable$1(Date))), new Date(1)));
    },
    compareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(new Date(0), new Date(0)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(new Date(1), new Date(0)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(new Date(0), new Date(1)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast(new Date(0), Bridge.IComparable$1(Date))), new Date(0)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast(new Date(1), Bridge.IComparable$1(Date))), new Date(0)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast(new Date(0), Bridge.IComparable$1(Date))), new Date(1)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.ObjectTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).$true(true);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Object), "Object");
    },
    canGetHashCodeForObject: function () {
        var o = { };
        var c = Bridge.getHashCode(o);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(c, Bridge.Int));
    },
    repeatedCallsToGetHashCodeReturnsSameValue: function () {
        var o = { };
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(o), Bridge.getHashCode(o));
    },
    objectIsEqualToItself: function () {
        var o = { };
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(o, o));
    },
    objectIsNotEqualToOtherObject: function () {
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals({ }, { }));
    },
    staticEqualsWorks: function () {
        var o1 = { }, o2 = { };
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(null, null));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(null, o1));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(o1, null));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(o1, o1));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(o1, o2));
    },
    referenceEqualsWorks: function () {
        var o1 = { }, o2 = { }, n = null;
        Bridge.get(Bridge.Test.Assert).true$1(n === n, "n, n");
        Bridge.get(Bridge.Test.Assert).false$1(n === undefined, "n, Script.Undefined");
        Bridge.get(Bridge.Test.Assert).false$1(o1 === o2, "o1, o2");
        Bridge.get(Bridge.Test.Assert).false$1(o1 === n, "o1, n");
        Bridge.get(Bridge.Test.Assert).false$1(o1 === undefined, "o1, Script.Undefined");
        Bridge.get(Bridge.Test.Assert).true$1(o1 === o1, "o1, o1");
    },
    toStringOverride: function () {
        var c1 = new Bridge.ClientTest.SimpleTypes.ObjectTests.C1(), c2 = new Bridge.ClientTest.SimpleTypes.ObjectTests.C2();
        Bridge.get(Bridge.Test.Assert).areEqual$1(c1.toString(), "test", "#1");
        Bridge.get(Bridge.Test.Assert).areEqual$1(c2.toString(), "test", "#1");
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.SByteTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(Bridge.cast(0, Bridge.Int), Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.is(0.5, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(-129, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(128, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");

        var b = Bridge.cast(0, Bridge.Int);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(b, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(b, Bridge.IFormattable));
    },
    castsWork: function () {
        var i1 = -129, i2 = -128, i3 = 80, i4 = 127, i5 = 128;
        var ni1 = -129, ni2 = -128, ni3 = 80, ni4 = 127, ni5 = 128, ni6 = null;

        // TODO unchecked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -129, "-129 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i2, Bridge.Int), -128, "-128 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 80, "80 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 127, "127 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 128, "128 unchecked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni1), Bridge.Int, true), -129, "nullable -129 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), -128, "nullable -128 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 80, "nullable 80 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 127, "nullable 127 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni5), Bridge.Int, true), 128, "nullable 128 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i2, Bridge.Int), -128, "-128 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 80, "80 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 127, "127 checked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), -128, "nullable -128 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 80, "nullable 80 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 127, "nullable 127 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(-128, -128);
        Bridge.get(Bridge.Test.Assert).areEqual(127, 127);
    },
    formatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(18, Bridge.Int))), "x"), "12");
    },
    iFormattableToStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(18, Bridge.Int))), "x"), "12");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("124", numberResult, -128, 127);
        Bridge.get(Bridge.Test.Assert).$true(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 124);

        result = Bridge.Int.tryParseInt("-123", numberResult, -128, 127);
        Bridge.get(Bridge.Test.Assert).$true(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, -123);

        result = Bridge.Int.tryParseInt("", numberResult, -128, 127);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, -128, 127);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, -128, 127);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("54768", numberResult, -128, 127);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 54768);

        result = Bridge.Int.tryParseInt("2.5", numberResult, -128, 127);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.parseInt("124", -128, 127), 124);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.parseInt("-123", -128, 127), -123);
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("", -128, 127);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt(null, -128, 127);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("notanumber", -128, 127);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("54768", -128, 127);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("2.5", -128, 127);
        });
    },
    toStringWithoutRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123, Bridge.Int))).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123, Bridge.Int))).toString(10), "123");
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(18, Bridge.Int))).toString(16), "12");
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))));
    },
    equalsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(1, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(1, Bridge.Int))), Bridge.cast(1, Bridge.Int)));

        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.SingleTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(Bridge.cast(0.5, Number), Number));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Number), "Number");

        var f = Bridge.cast(0, Number);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(f, Number));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(f, Bridge.IFormattable));
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(this.getDefaultValue(Number)(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(new Number(), 0);
    },
    constantsWork: function () {
        var zero = 0;
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.cast(-3.40282347E+38, Number) < -3.4E+38 && Bridge.cast(-3.40282347E+38, Number) > -3.5E+38, "MinValue should be correct");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.cast(3.40282347E+38, Number) > 3.4E+38 && Bridge.cast(3.40282347E+38, Number) < 3.5E+38, "MaxValue should be correct");
        Bridge.get(Bridge.Test.Assert).areEqual$1(1.401298E-45, 1.401298E-45, "Epsilon should be correct");
        Bridge.get(Bridge.Test.Assert).true$1(isNaN(Number.NaN), "NaN should be correct");
        Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Number.POSITIVE_INFINITY, 1 / zero, "PositiveInfinity should be correct");
        Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Number.NEGATIVE_INFINITY, -1 / zero, "NegativeInfinity should be correct");
    },
    defaultConstructorReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Number(), 0);
    },
    formatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(291.0, Number))), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(291.0, Number))), "x"), "123");
    },
    toStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(123.0, Number))), 'G'), "123");
    },
    toExponentialWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123.0, Number))).toExponential(), "1.23e+2");
    },
    toExponentialWithFractionalDigitsWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123.0, Number))).toExponential(1), "1.2e+2");
    },
    toFixed: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123.0, Number))).toFixed(), "123");
    },
    toFixedWithFractionalDigitsWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123.0, Number))).toFixed(1), "123.0");
    },
    toPrecisionWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(12345.0, Number))).toPrecision(), "12345");
    },
    toPrecisionWithPrecisionWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(12345.0, Number))).toPrecision(2), "1.2e+4");
    },
    isPositiveInfinityWorks: function () {
        var inf = "Infinity";
        // TODO Bug
        //Assert.True (float.IsPositiveInfinity(inf));
        Bridge.get(Bridge.Test.Assert).$false((-inf === Number.POSITIVE_INFINITY));
        Bridge.get(Bridge.Test.Assert).$false((0.0 === Number.POSITIVE_INFINITY));
        Bridge.get(Bridge.Test.Assert).$false((Number.NaN === Number.POSITIVE_INFINITY));
    },
    isNegativeInfinityWorks: function () {
        var inf = "Infinity";
        Bridge.get(Bridge.Test.Assert).$false((inf === Number.NEGATIVE_INFINITY));
        Bridge.get(Bridge.Test.Assert).$true((-inf === Number.NEGATIVE_INFINITY));
        Bridge.get(Bridge.Test.Assert).$false((0.0 === Number.NEGATIVE_INFINITY));
        Bridge.get(Bridge.Test.Assert).$false((Number.NaN === Number.NEGATIVE_INFINITY));
    },
    isInfinityWorks: function () {
        var inf = "Infinity";
        Bridge.get(Bridge.Test.Assert).$true((Math.abs(inf) === Number.POSITIVE_INFINITY));
        Bridge.get(Bridge.Test.Assert).$true((Math.abs(-inf) === Number.POSITIVE_INFINITY));
        Bridge.get(Bridge.Test.Assert).$false((Math.abs(0.0) === Number.POSITIVE_INFINITY));
        Bridge.get(Bridge.Test.Assert).$false((Math.abs(Number.NaN) === Number.POSITIVE_INFINITY));
    },
    isFiniteWorks: function () {
        var zero = 0, one = 1;
        Bridge.get(Bridge.Test.Assert).$true(isFinite(one));
        Bridge.get(Bridge.Test.Assert).$false(isFinite(one / zero));
        Bridge.get(Bridge.Test.Assert).$false(isFinite(zero / zero));
    },
    isNaNWorks: function () {
        var zero = 0, one = 1;
        Bridge.get(Bridge.Test.Assert).$false(isNaN(one));
        Bridge.get(Bridge.Test.Assert).$false(isNaN(one / zero));
        Bridge.get(Bridge.Test.Assert).$true(isNaN(zero / zero));
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(0, Number)))), Bridge.getHashCode(((Bridge.cast(0, Number)))));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(1, Number)))), Bridge.getHashCode(((Bridge.cast(1, Number)))));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(((Bridge.cast(0, Number)))), Bridge.getHashCode(((Bridge.cast(1, Number)))));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(((Bridge.cast(0, Number)))), Bridge.getHashCode(((Bridge.cast(0.5, Number)))));
    },
    equalsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(0, Number))), Bridge.cast(0, Number)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(1, Number))), Bridge.cast(0, Number)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(0, Number))), Bridge.cast(0.5, Number)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(1, Number))), Bridge.cast(1, Number)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(0, Number))), Bridge.cast(0, Number)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(1, Number))), Bridge.cast(0, Number)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(0, Number))), Bridge.cast(0.5, Number)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(1, Number))), Bridge.cast(1, Number)));

        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Number)), Bridge.IEquatable$1(Number))), Bridge.cast(0, Number)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Number)), Bridge.IEquatable$1(Number))), Bridge.cast(0, Number)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Number)), Bridge.IEquatable$1(Number))), Bridge.cast(0.5, Number)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Number)), Bridge.IEquatable$1(Number))), Bridge.cast(1, Number)));
    },
    compareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Number))), Bridge.cast(0, Number)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(1, Number))), Bridge.cast(0, Number)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Number))), Bridge.cast(0.5, Number)) < 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(1, Number))), Bridge.cast(1, Number)) === 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Number)), Bridge.IComparable$1(Number))), Bridge.cast(0, Number)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Number)), Bridge.IComparable$1(Number))), Bridge.cast(0, Number)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Number)), Bridge.IComparable$1(Number))), Bridge.cast(0.5, Number)) < 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Number)), Bridge.IComparable$1(Number))), Bridge.cast(1, Number)) === 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.StringTests', {
    statics: {
        strings: function () {
            var $t;
            // In PhantomJS some correct tests failed. We will skip them in this environment.
            var isPhantomJs = Bridge.get(Bridge.ClientTest.Utilities.BrowserHelper).isPhantomJs();

            //var expectedCount = isPhantomJs ? 28 : 48;
            //assert.Expect(expectedCount);

            // TEST ToLower, ToLowerCase, ToLocaleLowerCase
            var s = ("HELLO").toLowerCase();
            Bridge.get(Bridge.Test.Assert).areEqual$1(s, "hello", "'HELLO'.ToLower()");

            s = "HELLO".toLowerCase();
            Bridge.get(Bridge.Test.Assert).areEqual$1(s, "hello", "'HELLO'.ToLowerCase()");

            s = "HELLO".toLocaleLowerCase();
            Bridge.get(Bridge.Test.Assert).areEqual$1(s, "hello", "'HELLO'.ToLocaleLowerCase()");

            // TEST ToUpper, ToUpperCase, ToLocaleUpperCase
            s = ("hello").toUpperCase();
            Bridge.get(Bridge.Test.Assert).areEqual$1(s, "HELLO", "'hello'.ToUpper()");

            s = "hello".toUpperCase();
            Bridge.get(Bridge.Test.Assert).areEqual$1(s, "HELLO", "'hello'.ToUpperCase()");

            s = "HELLO".toLocaleUpperCase();
            Bridge.get(Bridge.Test.Assert).areEqual$1(s, "HELLO", "'hello'.ToLocaleUpperCase()");

            s = "Hello Bridge.NET";
            // TEST String(string) constructor
            Bridge.get(Bridge.Test.Assert).areEqual$1(String(s), s, "new String('" + s + "')");

            // TEST String(char, count) constructor
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.fromCharCount(45, 4), "----", "new String('-',4)");

            // TEST IndexOfAny
            var anyOf = [120, 98, 105];
            var sAnyOf = "['x','b','i']";

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.indexOfAny(s, anyOf), 8, "'" + s + "'.IndexOfAny(" + sAnyOf + ")");
            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                Bridge.String.indexOfAny(s, anyOf, 18, 8);
            }, "'" + s + "'.IndexOfAny(" + sAnyOf + ")");
            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                Bridge.String.indexOfAny(s, null);
            }, "'" + s + "'.IndexOfAny(null)");

            s = "";
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.indexOfAny(s, anyOf), -1, "String.Empty.IndexOfAny(" + sAnyOf + ")");

            s = null;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.indexOfAny(s, anyOf), -1, "null.IndexOfAny(" + sAnyOf + ")");

            // TEST IndexOf
            s = "Hello Bridge.NET";

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.indexOf(s, String.fromCharCode(101)), 1, "'" + s + "'.IndexOf('e')");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.indexOf(s, "e."), 11, "'" + s + "'.IndexOf('e.')");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.indexOf(s, String.fromCharCode(101), 6, 8), 11, "'" + s + "'.IndexOf('e', 6, 8)");
            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                Bridge.String.indexOf(s, null);
            }, "'" + s + "'.IndexOf(null)");

            if (!isPhantomJs) {
                Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.indexOf(s, "E", 6, 8, 1), 11, "'" + s + "'.IndexOf('E', 6, 8, StringComparison.CurrentCultureIgnoreCase)");
            }

            s = "";
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.indexOf(s, String.fromCharCode(101)), -1, "String.Empty.IndexOf('e')");

            s = null;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.indexOf(s, String.fromCharCode(101)), -1, "null.IndexOf('e')");

            // TEST Compare
            var s1 = "Animal";
            var s2 = "animal";

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.compare(s1, s2, true), 0, "String.Compare('" + s1 + "', '" + s2 + "', true)");

            if (!isPhantomJs) {
                Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.compare(s1, s2, false), 1, "String.Compare('" + s1 + "', '" + s2 + "', false)");
            }

            if (!isPhantomJs) {
                var threeIs = Bridge.Array.init(3, null);
                threeIs[0] = "i";
                threeIs[1] = "ı";
                threeIs[2] = "I";

                var scValues = [0, 1, 2, 3, 4, 5];

                var expected = [-1, -1, 1, -1, 0, 1, -1, -1, 1, -1, 0, 1, -1, 1, 1, 0, 0, 0];
                var expectedIndex = 0;

                $t = Bridge.getEnumerator(scValues);
                while ($t.moveNext()) {
                    var sc = $t.getCurrent();
                    Bridge.get(Bridge.ClientTest.SimpleTypes.StringTests).test(0, 1, sc, threeIs, expected, expectedIndex++);
                    Bridge.get(Bridge.ClientTest.SimpleTypes.StringTests).test(0, 2, sc, threeIs, expected, expectedIndex++);
                    Bridge.get(Bridge.ClientTest.SimpleTypes.StringTests).test(1, 2, sc, threeIs, expected, expectedIndex++);
                }
            }

            // TEST Contains
            s = "Hello Bridge.NET";

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.contains(s,"Bridge"), true, "'" + s + "'.Contains('Bridge')");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.contains(s,""), true, "'" + s + "'.Contains(String.Empty)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.String.contains("","Bridge"), false, "String.Empty.Contains('Bridge')");
            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                Bridge.String.contains(s,null);
            }, "null.Contains('Bridge')");

            // TEST Concat
            s = [s, "2", "3", "4"].join('');
            Bridge.get(Bridge.Test.Assert).areEqual$1(s, "Hello Bridge.NET234", "string.Concat()");

            s = [null, true, 3, false].join('');
            Bridge.get(Bridge.Test.Assert).areEqual$1(s, "true3false", "string.Concat()");

            s = ["1", "2", "3", "4", "5"].toString().split(',').join('');
            Bridge.get(Bridge.Test.Assert).areEqual$1(s, "12345", "string.Concat()");

            s = [1, null, 2, null, 3].toString().split(',').join('');
            Bridge.get(Bridge.Test.Assert).areEqual$1(s, "123", "string.Concat()");
        },
        test: function (x, y, comparison, testI, expected, expectedIndex) {
            var cmpValue = 0;
            cmpValue = Bridge.String.compare(testI[x], testI[y], comparison);
            Bridge.get(Bridge.Test.Assert).areEqual$1(cmpValue, expected[expectedIndex], "String.Compare('" + testI[x] + "', '" + testI[y] + "'," + comparison + ")");
        },
        enumerable: function () {
            var $t;
            var a;
            var i = 0;
            var result = Bridge.Array.init(5, function (){
                return new Bridge.Int();
            });
            $t = Bridge.getEnumerator("danny");
            while ($t.moveNext()) {
                var c = $t.getCurrent();
                a = c;
                result[i] = a;

                i++;
            }

            Bridge.get(Bridge.Test.Assert).areEqual(result[0], 100);
            Bridge.get(Bridge.Test.Assert).areEqual(result[1], 97);
            Bridge.get(Bridge.Test.Assert).areEqual(result[2], 110);
            Bridge.get(Bridge.Test.Assert).areEqual(result[3], 110);
            Bridge.get(Bridge.Test.Assert).areEqual(result[4], 121);
        }
    },
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(String), "String");
        var s = "X";
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(s, String));
    },
    stringInterfaces: function () {
        var s = "X";
        Bridge.get(Bridge.Test.Assert).true$1(true, "string is object");
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(s, Bridge.IComparable$1(String)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(s, Bridge.IEquatable$1(String)));
    },
    defaultConstructorWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(String(), "");
    },
    copyConstructorWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(String("abcd"), "abcd");
    },
    charAndCountConstructorWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.fromCharCount(120, 5), "xxxxx");
    },
    charArrayConstructorWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(String.fromCharCode.apply(null, [97, 98, 67]), "abC");
    },
    emptyFieldWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual("", "");
    },
    lengthPropertyWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("abcd").length, 4);
    },
    charAtWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("abcd").charAt(2), "c");
    },
    charCodeAtWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("abcd").charCodeAt(2), Bridge.cast(99, Bridge.Int));
    },
    compareWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.compare("abcd", "abcd") === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.compare("abcd", "abcb") > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.compare("abcd", "abce") < 0);
    },
    compareWithIgnoreCaseArgWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.compare("abcd", "abcd", false) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.compare("abcd", "abcb", false) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.compare("abcd", "abce", false) < 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.compare("abcd", "ABCD", true) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.compare("abcd", "ABCB", true) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.compare("abcd", "ABCE", true) < 0);
    },
    concatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(["a", "b"].join(''), "ab");
        Bridge.get(Bridge.Test.Assert).areEqual(["a", "b", "c"].join(''), "abc");
        Bridge.get(Bridge.Test.Assert).areEqual(["a", "b", "c", "d"].join(''), "abcd");
        Bridge.get(Bridge.Test.Assert).areEqual(["a", "b", "c", "d", "e"].toString().split(',').join(''), "abcde");
        Bridge.get(Bridge.Test.Assert).areEqual(["a", "b", "c", "d", "e", "f"].toString().split(',').join(''), "abcdef");
        Bridge.get(Bridge.Test.Assert).areEqual(["a", "b", "c", "d", "e", "f", "g"].toString().split(',').join(''), "abcdefg");
        Bridge.get(Bridge.Test.Assert).areEqual(["a", "b", "c", "d", "e", "f", "g", "h"].toString().split(',').join(''), "abcdefgh");
        Bridge.get(Bridge.Test.Assert).areEqual(["a", "b", "c", "d", "e", "f", "g", "h", "i"].toString().split(',').join(''), "abcdefghi");
    },
    concatWithObjectsWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual([1].toString().split(',').join(''), "1");
        Bridge.get(Bridge.Test.Assert).areEqual([1, 2].join(''), "12");
        Bridge.get(Bridge.Test.Assert).areEqual([1, 2, 3].join(''), "123");
        Bridge.get(Bridge.Test.Assert).areEqual([1, 2, 3, 4].join(''), "1234");
        Bridge.get(Bridge.Test.Assert).areEqual([1, 2, 3, 4, 5].toString().split(',').join(''), "12345");
        Bridge.get(Bridge.Test.Assert).areEqual([1, 2, 3, 4, 5, 6].toString().split(',').join(''), "123456");
        Bridge.get(Bridge.Test.Assert).areEqual([1, 2, 3, 4, 5, 6, 7].toString().split(',').join(''), "1234567");
        Bridge.get(Bridge.Test.Assert).areEqual([1, 2, 3, 4, 5, 6, 7, 8].toString().split(',').join(''), "12345678");
        Bridge.get(Bridge.Test.Assert).areEqual([1, 2, 3, 4, 5, 6, 7, 8, 9].toString().split(',').join(''), "123456789");
    },
    endsWithCharWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.endsWith(("abcd"), "d"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.endsWith(("abcd"), "e"));
    },
    endsWithStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.endsWith(("abcd"), "d"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.endsWith(("abcd"), "e"));
    },
    staticEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.equals("abcd", "abcd"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.equals("abcd", "abce"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.equals("abcd", "ABCD"));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.equals("abcd", "abcd"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.equals("abcd", "abce"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.equals("abcd", "ABCD"));
    },
    formatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.format("x", null), "x");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.format("x{0}", "a"), "xa");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.format("x{0}{1}", "a", "b"), "xab");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.format("x{0}{1}{2}", "a", "b", "c"), "xabc");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.format("x{0}{1}{2}{3}", "a", "b", "c", "d"), "xabcd");

        var arr1 = ["a"];
        var arr2 = ["a", "b"];
        var arr3 = ["a", "b", "c"];
        var arr4 = ["a", "b", "c", "d"];
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.format("x{0}", arr1), "xa");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.format("x{0}{1}", arr2[0], arr2[1]), "xab");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.format("x{0}{1}{2}", arr3[0], arr3[1], arr3[2]), "xabc");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.format("x{0}{1}{2}{3}", arr4[0], arr4[1], arr4[2], arr4[3]), "xabcd");
    },
    formatWorksExtended: function () {
        var arr2 = ["a", "b"];
        var arr3 = ["a", "b", "c"];
        var arr4 = ["a", "b", "c", "d"];

        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.format("x{0}{1}", arr2), "xab");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.format("x{0}{1}{2}", arr3), "xabc");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.format("x{0}{1}{2}{3}", arr4), "xabcd");
    },
    formatWorksWithIFormattable: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.format("{0:F2}", 3.1428571428571428), "3.14");
    },
    formatCanUseEscapedBraces: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.format("{{0}}", null), "{0}");
    },
    fromCharCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(String.fromCharCode(), "");
        Bridge.get(Bridge.Test.Assert).areEqual(String.fromCharCode(97), "a");
        Bridge.get(Bridge.Test.Assert).areEqual(String.fromCharCode(97, 98), "ab");
        Bridge.get(Bridge.Test.Assert).areEqual(String.fromCharCode(97, 98, 99), "abc");
    },
    indexOfCharWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOf(("abc"), String.fromCharCode(98)), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOf(("abc"), String.fromCharCode(100)), -1);
    },
    indexOfStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOf(("abc"), "bc"), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOf(("abc"), "bd"), -1);
    },
    indexOfCharWithStartIndexWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOf(("abcabc"), String.fromCharCode(98), 3), 4);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOf(("abcabc"), String.fromCharCode(100), 3), -1);
    },
    indexOfCharWithStartIndexAndCountWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOf(("xxxxxabcxxx"), String.fromCharCode(99), 3, 8), 7);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOf(("xxxxxabcxxx"), String.fromCharCode(99), 3, 5), 7);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOf(("xxxxxabcxxx"), String.fromCharCode(99), 3, 4), -1);
    },
    indexOfStringWithStartIndexWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOf(("abcabc"), "bc", 3), 4);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOf(("abcabc"), "bd", 3), -1);
    },
    indexOfStringWithStartIndexAndCountWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOf(("xxxxxabcxxx"), "abc", 3, 8), 5);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOf(("xxxxxabcxxx"), "abc", 3, 5), 5);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOf(("xxxxxabcxxx"), "abc", 3, 4), -1);
    },
    indexOfAnyWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOfAny(("abcd"), [98]), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOfAny(("abcd"), [98, 120]), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOfAny(("abcd"), [98, 120, 121]), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOfAny(("abcd"), [120, 121]), -1);
    },
    indexOfAnyWithStartIndexWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOfAny(("abcdabcd"), [98], 4), 5);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOfAny(("abcdabcd"), [98, 120], 4), 5);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOfAny(("abcdabcd"), [98, 120, 121], 4), 5);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOfAny(("abcdabcd"), [120, 121], 4), -1);
    },
    indexOfAnyWithStartIndexAndCountWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOfAny(("abcdabcd"), [98], 4, 2), 5);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOfAny(("abcdabcd"), [98, 120], 4, 2), 5);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOfAny(("abcdabcd"), [98, 120, 121], 4, 2), 5);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOfAny(("abcdabcd"), [120, 121], 4, 2), -1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.indexOfAny(("abcdabcd"), [99], 4, 2), -1);
    },
    insertWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.insert(2, ("abcd"), "xyz"), "abxyzcd");
    },
    isNullOrEmptyWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.isNullOrEmpty(null));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.isNullOrEmpty(""));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.isNullOrEmpty(" "));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.isNullOrEmpty("0"));
    },
    lastIndexOfCharWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("abc").lastIndexOf("b"), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(("abc").lastIndexOf("d"), -1);
    },
    lastIndexOfStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("abc").lastIndexOf("bc"), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(("abc").lastIndexOf("bd"), -1);
    },
    lastIndexOfCharWithStartIndexWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("abcabc").lastIndexOf("b", 3), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(("abcabc").lastIndexOf("d", 3), -1);
    },
    lastIndexOfStringWithStartIndexWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("abcabc").lastIndexOf("bc", 3), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(("abcabc").lastIndexOf("bd", 3), -1);
    },
    lastIndexOfCharWithStartIndexAndCountWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOf(("abcabc"), String.fromCharCode(98), 3, 3), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOf(("abcabc"), String.fromCharCode(98), 3, 2), -1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOf(("abcabc"), String.fromCharCode(100), 3, 3), -1);
    },
    lastIndexOfStringWithStartIndexAndCountWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOf(("xbcxxxbc"), "bc", 3, 3), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOf(("xbcxxxbc"), "bc", 3, 2), -1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOf(("xbcxxxbc"), "bd", 3, 3), -1);
    },
    lastIndexOfAnyWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOfAny(("abcd"), [98]), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOfAny(("abcd"), [98, 120]), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOfAny(("abcd"), [98, 120, 121]), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOfAny(("abcd"), [120, 121]), -1);
    },
    lastIndexOfAnyWithStartIndexWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOfAny(("abcdabcd"), [98], 4), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOfAny(("abcdabcd"), [98, 120], 4), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOfAny(("abcdabcd"), [98, 120, 121], 4), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOfAny(("abcdabcd"), [120, 121], 4), -1);
    },
    lastIndexOfAnyWithStartIndexAndCountWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOfAny(("abcdabcd"), [98], 4, 4), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOfAny(("abcdabcd"), [98, 120], 4, 4), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOfAny(("abcdabcd"), [98, 120, 121], 4, 4), 1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOfAny(("abcdabcd"), [120, 121], 4, 4), -1);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.lastIndexOfAny(("abcdabcd"), [98], 4, 2), -1);
    },
    localeCompareWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(("abcd").localeCompare("abcd") === 0);
        Bridge.get(Bridge.Test.Assert).$true(("abcd").localeCompare("abcb") > 0);
        Bridge.get(Bridge.Test.Assert).$true(("abcd").localeCompare("abce") < 0);
    },
    matchWorks: function () {
        var result = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").match(new RegExp("[A-E]", "gi"));
        Bridge.get(Bridge.Test.Assert).areDeepEqual(result, ["A", "B", "C", "D", "E", "a", "b", "c", "d", "e"]);
    },
    padLeftWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.alignString(("abc"), 5), "  abc");
    },
    padLeftWithCharWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.alignString(("abc"), 5, 48), "00abc");
    },
    padRightWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.alignString(("abc"), -5), "abc  ");
    },
    padRightWithCharWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.alignString(("abc"), -5, 48), "abc00");
    },
    removeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.remove(("abcde"), 2), "ab");
    },
    removeWithCountWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.remove(("abcde"), 2, 2), "abe");
    },
    replaceWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.replaceAll(("abcabcabc"), "a", "x"), "xbcxbcxbc");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.replaceAll(("abcabcabc"), "ab", "x"), "xcxcxc");
    },
    replaceCharWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.replaceAll(("abcabcabc"), "a", "x"), "xbcxbcxbc");
    },
    replaceRegexWithReplaceTextWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("abcabcabc").replace(new RegExp("a|b", "g"), "x"), "xxcxxcxxc");
    },
    replaceRegexWithReplaceCallbackWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("abcabcabc").replace(new RegExp("a|b", "g"), function (s) {
            return s === "a" ? "x" : "y";
        }), "xycxycxyc");
    },
    searchWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("abcabcabc").search(new RegExp("ca")), 2);
        Bridge.get(Bridge.Test.Assert).areEqual(("abcabcabc").search(new RegExp("x")), -1);
    },
    sliceWorks: function () {
        var numbers = "0123456789";

        // Let's start by using both begin and end.
        Bridge.get(Bridge.Test.Assert).areEqual("3456", numbers.slice(3, 7));

        // What happens when we start with a negative number.
        Bridge.get(Bridge.Test.Assert).areEqual("3456", numbers.slice(-7, 7));

        // What happens when we use two negative numbers.
        Bridge.get(Bridge.Test.Assert).areEqual("3456", numbers.slice(-7, -3));

        // What happens when we omit the last argument.
        Bridge.get(Bridge.Test.Assert).areEqual("3456789", numbers.slice(3));

        // And with the negative, end-relevant index.
        Bridge.get(Bridge.Test.Assert).areEqual("3456789", numbers.slice(-7));

        // If the index is out of range, it returns the empty string.
        Bridge.get(Bridge.Test.Assert).areEqual("", numbers.slice(100, 101));
    },
    splitWithStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(("abcabcabc").split("b"), ["a", "ca", "ca", "c"]);
    },
    splitWithCharWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(("abcabcabc").split(String.fromCharCode(98)), ["a", "ca", "ca", "c"]);
    },
    jsSplitWithStringAndLimitWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(("abcaxbcabce").split("bc", 2), ["a", "ax"]);
    },
    jsSplitWithCharAndLimitWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(("abcabcabc").split(String.fromCharCode(98), 2), ["a", "ca"]);
    },
    splitWithCharsAndLimitWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("abcabcabc"), [98].map(function(i) {{ return String.fromCharCode(i); }}), 2), ["a", "cabcabc"]);
    },
    splitWithCharsAndStringSplitOptionsAndLimitWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("abxcabcabc"), [98, 120].map(function(i) {{ return String.fromCharCode(i); }}), 2, 1), ["a", "cabcabc"]);
    },
    splitWithRegexWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(("abcaxcaxc").split(new RegExp("b|x", "g")), ["a", "ca", "ca", "c"]);
    },
    someNetSplitTests: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("axybcxzde"), ["xy", "xz"], null, 0), ["a", "bc", "de"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("axybcxzdexz"), ["xy", "xz"], null, 0), ["a", "bc", "de", ""]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("xzaxybcxzdexz"), ["xy", "xz"], null, 0), ["", "a", "bc", "de", ""]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("xzaxyxzbcxzdexz"), ["xy", "xz"], null, 0), ["", "a", "", "bc", "de", ""]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("xzaxyxzxybcxzdexz"), ["xy", "xz"], null, 0), ["", "a", "", "", "bc", "de", ""]);

        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("axybcxzde"), ["xy", "xz"], null, 1), ["a", "bc", "de"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("axybcxzdexz"), ["xy", "xz"], null, 1), ["a", "bc", "de"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("xzaxybcxzdexz"), ["xy", "xz"], null, 1), ["a", "bc", "de"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("xzaxyxzbcxzdexz"), ["xy", "xz"], null, 1), ["a", "bc", "de"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("xzaxyxzxybcxzdexz"), ["xy", "xz"], null, 1), ["a", "bc", "de"]);

        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("axybcxzde"), ["xy", "xz"], 100, 0), ["a", "bc", "de"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("axybcxzdexz"), ["xy", "xz"], 100, 0), ["a", "bc", "de", ""]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("xzaxybcxzdexz"), ["xy", "xz"], 100, 0), ["", "a", "bc", "de", ""]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("xzaxyxzbcxzdexz"), ["xy", "xz"], 100, 0), ["", "a", "", "bc", "de", ""]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("xzaxyxzxybcxzdexz"), ["xy", "xz"], 100, 0), ["", "a", "", "", "bc", "de", ""]);

        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("axybcxzde"), ["xy", "xz"], 2, 0), ["a", "bcxzde"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("axybcxzdexz"), ["xy", "xz"], 2, 0), ["a", "bcxzdexz"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("axyxzbcxzdexz"), ["xy", "xz"], 2, 0), ["a", "xzbcxzdexz"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("xzaxybcxzdexz"), ["xy", "xz"], 2, 0), ["", "axybcxzdexz"]);

        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("axybcxzde"), ["xy", "xz"], 2, 1), ["a", "bcxzde"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("axybcxzdexz"), ["xy", "xz"], 2, 1), ["a", "bcxzdexz"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("axyxzbcxzdexz"), ["xy", "xz"], 2, 1), ["a", "bcxzdexz"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("xzaxyxzbcxzdexz"), ["xy", "xz"], 2, 1), ["a", "bcxzdexz"]);
    },
    splitWithCharsWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("Lorem Ipsum, dolor[sit amet"), [44, 32, 91].map(function(i) {{ return String.fromCharCode(i); }})), ["Lorem", "Ipsum", "", "dolor", "sit", "amet"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("Lorem Ipsum, dolor[sit amet"), [44, 32, 91].map(function(i) {{ return String.fromCharCode(i); }}), null, 0), ["Lorem", "Ipsum", "", "dolor", "sit", "amet"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("Lorem Ipsum, dolor[sit amet"), [44, 32, 91].map(function(i) {{ return String.fromCharCode(i); }}), null, 1), ["Lorem", "Ipsum", "dolor", "sit", "amet"]);
    },
    splitWithStringsWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("a is b if b is c and c isifis d if d is e"), ["is", "if"], null, 0), ["a ", " b ", " b ", " c and c ", "", "", " d ", " d ", " e"]);
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("a is b if b is c and c isifis d if d is e"), ["is", "if"], null, 1), ["a ", " b ", " b ", " c and c ", " d ", " d ", " e"]);
    },
    splitWithStringsAndLimitWorks: function () {
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.split(("abcbcabcabc"), ["bc"], 2, 1), ["a", "abcabc"]);
    },
    startsWithCharWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.startsWith(("abc"), "a"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.startsWith(("abc"), "b"));
    },
    startsWithStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.startsWith(("abc"), "ab"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.startsWith(("abc"), "bc"));
    },
    substrWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("abcde").substr(2), "cde");
        Bridge.get(Bridge.Test.Assert).areEqual(("abcde").substr(2, 2), "cd");

        var numbers = "0123456789";

        // Let's start by using both start and length
        Bridge.get(Bridge.Test.Assert).areEqual("3456", numbers.substr(3, 4));

        // What happens when we start with a negative number.
        Bridge.get(Bridge.Test.Assert).areEqual("3456", numbers.substr(-7, 4));

        // What happens when we omit the last argument.
        Bridge.get(Bridge.Test.Assert).areEqual("3456789", numbers.substr(3));

        // And with the negative, end-relevant index.
        Bridge.get(Bridge.Test.Assert).areEqual("3456789", numbers.substr(-7));

        // If the index is out of range, it returns the empty string.
        Bridge.get(Bridge.Test.Assert).areEqual("", numbers.substr(100, 1));

        Bridge.get(Bridge.Test.Assert).areEqual("2345", numbers.substr(2, 4));
    },
    substringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("abcde").substr(2), "cde");
        Bridge.get(Bridge.Test.Assert).areEqual(("abcde").substr(2, 2), "cd");

        var numbers = "0123456789";
        // Let's start by using both begin and end.
        Bridge.get(Bridge.Test.Assert).areEqual("3456789", numbers.substr(3, 7));

        // What happens when we start with a negative number.
        Bridge.get(Bridge.Test.Assert).areEqual("3456789", numbers.substr(-7, 7));

        // What happens when we use two negative numbers.
        Bridge.get(Bridge.Test.Assert).areEqual("", numbers.substr(-7, -3));

        // What happens when we omit the last argument.
        Bridge.get(Bridge.Test.Assert).areEqual("3456789", numbers.substr(3));

        // And with the negative, end-relevant index.
        Bridge.get(Bridge.Test.Assert).areEqual("3456789", numbers.substr(-7));

        // If the index is out of range, it returns the empty string.
        Bridge.get(Bridge.Test.Assert).areEqual("", numbers.substr(100, 101));

        Bridge.get(Bridge.Test.Assert).areEqual("2345", numbers.substr(2, 4));
    },
    jsSubstringWorks: function () {
        var numbers = "0123456789";

        // Let's start by using both begin and end.
        Bridge.get(Bridge.Test.Assert).areEqual("3456", numbers.substring(3, 7));

        // What happens when we start with a negative number.
        Bridge.get(Bridge.Test.Assert).areEqual("0123456", numbers.substring(-7, 7));

        // What happens when we use two negative numbers.
        Bridge.get(Bridge.Test.Assert).areEqual("", numbers.substring(-7, -3));

        // What happens when we omit the last argument.
        Bridge.get(Bridge.Test.Assert).areEqual("3456789", numbers.substring(3));

        // And with the negative, end-relevant index.
        Bridge.get(Bridge.Test.Assert).areEqual("0123456789", numbers.substring(-7));

        // If the index is out of range, it returns the empty string.
        Bridge.get(Bridge.Test.Assert).areEqual("", numbers.substring(100, 101));

        Bridge.get(Bridge.Test.Assert).areEqual("23", numbers.substring(2, 4));
    },
    toLowerCaseWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("ABcd").toLowerCase(), "abcd");
    },
    toUpperCaseWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("ABcd").toUpperCase(), "ABCD");
    },
    toLowerWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("ABcd").toLowerCase(), "abcd");
    },
    toUpperWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("ABcd").toUpperCase(), "ABCD");
    },
    trimWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(("  abc  ").trim(), "abc");
    },
    trimCharsWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.trim((",., aa, aa,... "), [44, 46, 32]), "aa, aa");
    },
    trimStartCharsWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.trimStart((",., aa, aa,... "), [44, 46, 32]), "aa, aa,... ");
    },
    trimEndCharsWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.trimEnd((",., aa, aa,... "), [44, 46, 32]), ",., aa, aa");
    },
    trimStartWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.trimStart(("  abc  ")), "abc  ");
    },
    trimEndWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.String.trimEnd(("  abc  ")), "  abc");
    },
    stringEqualityWorks: function () {
        var s1 = "abc", s2 = null, s3 = null;
        Bridge.get(Bridge.Test.Assert).$true(s1 === "abc");
        Bridge.get(Bridge.Test.Assert).$false(s1 === "aBc");
        Bridge.get(Bridge.Test.Assert).$false(s1 === s2);
        Bridge.get(Bridge.Test.Assert).$true(s2 === s3);
    },
    stringInequalityWorks: function () {
        var s1 = "abc", s2 = null, s3 = null;
        Bridge.get(Bridge.Test.Assert).$false(s1 !== "abc");
        Bridge.get(Bridge.Test.Assert).$true(s1 !== "aBc");
        Bridge.get(Bridge.Test.Assert).$true(s1 !== s2);
        Bridge.get(Bridge.Test.Assert).$false(s2 !== s3);
    },
    stringIndexingWorks: function () {
        var s = "abcd";
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(s.charCodeAt(0), Bridge.Int), Bridge.cast(97, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(s.charCodeAt(1), Bridge.Int), Bridge.cast(98, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(s.charCodeAt(2), Bridge.Int), Bridge.cast(99, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.cast(s.charCodeAt(3), Bridge.Int), Bridge.cast(100, Bridge.Int));
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(("a")), Bridge.getHashCode(("a")));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(("b")), Bridge.getHashCode(("b")));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(("a")), Bridge.getHashCode(("b")));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(("a")), Bridge.getHashCode(("ab")));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.cast(Bridge.getHashCode(("abcdefghijklmnopq")), Bridge.Int) < 4294967295);
    },
    instanceEqualsWorks: function () {
        var r = "a";
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(("a"), r));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(("b"), r));
        r = "b";
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(("a"), r));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(("b"), r));
        r = "A";
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(("a"), r));
        r = "ab";
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(("a"), r));
    },
    iEquatableEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.equals(("a"), "a"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.equals(("b"), "a"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.equals(("a"), "b"));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.equals(("b"), "b"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.equals(("a"), "A"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.equals(("a"), "ab"));

        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast("a", Bridge.IEquatable$1(String))), "a"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast("b", Bridge.IEquatable$1(String))), "a"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast("a", Bridge.IEquatable$1(String))), "b"));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast("b", Bridge.IEquatable$1(String))), "b"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast("a", Bridge.IEquatable$1(String))), "A"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast("a", Bridge.IEquatable$1(String))), "ab"));
    },
    stringEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.equals(("a"), "a"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.equals(("b"), "a"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.equals(("a"), "b"));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.equals(("b"), "b"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.equals(("a"), "A"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.equals(("a"), "ab"));
    },
    compareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.compare("abcd", "abcd") === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.compare("abcd", "abcD") !== 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.compare("abcd", "abcb") > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.compare("abcd", "abce") < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast("abcd", Bridge.IComparable$1(String))), "abcd") === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast("abcd", Bridge.IComparable$1(String))), "abcD") !== 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast("abcd", Bridge.IComparable$1(String))), "abcb") > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast("abcd", Bridge.IComparable$1(String))), "abce") < 0);

        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast("", Bridge.IComparable$1(String))), null) > 0);
    },
    joinWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(["a", "ab", "abc", "abcd"].join(", "), "a, ab, abc, abcd");
        Bridge.get(Bridge.Test.Assert).areEqual(["a", "ab", "abc", "abcd"].slice(1, 1 + 2).join(", "), "ab, abc");

        var intValues = new Bridge.ClientTest.SimpleTypes.StringTests.MyEnumerable$1(Bridge.Int)([1, 5, 6]);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.toArray(intValues).join(", "), "1, 5, 6");
        var stringValues = new Bridge.ClientTest.SimpleTypes.StringTests.MyEnumerable$1(String)(["a", "ab", "abc", "abcd"]);
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.toArray(stringValues).join(", "), "a, ab, abc, abcd");

        // TODO: c# makes it False but js false
        Bridge.get(Bridge.Test.Assert).areEqual(["a", 1, "abc", false].join(", "), "a, 1, abc, false"); // False");
    },
    containsWorks: function () {
        var text = "Lorem ipsum dolor sit amet";
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.contains(text,"Lorem"));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.String.contains(text,"lorem"));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.String.contains(text,text));
    },
    toCharArrayWorks: function () {
        var text = "Lorem sit dolor";
        Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.String.toCharArray(text, 0, text.length), [76, 111, 114, 101, 109, 32, 115, 105, 116, 32, 100, 111, 108, 111, 114]);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.TestVersion', {
    statics: {
        testConstructors: function () {
            var v1 = new Bridge.Version("constructor");

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v1), "v1 created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.getMajor(), 0, "v1.Major 0");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.getMinor(), 0, "v1.Minor 0");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.getBuild(), -1, "v1.Build -1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.getRevision(), -1, "v1.Revision -1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.getMajorRevision(), -1, "v1.MajorRevision -1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.getMinorRevision(), -1, "v1.MinorRevision -1");

            var v2 = new Bridge.Version("constructor$4", "2.4.1128.2");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v2), "v2 created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.getMajor(), 2, "v2.Major 2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.getMinor(), 4, "v2.Minor 4");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.getBuild(), 1128, "v2.Build 1128");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.getRevision(), 2, "v2.Revision 2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.getMajorRevision(), 0, "v2.MajorRevision 0");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.getMinorRevision(), 2, "v2.MinorRevision 2");

            var v3 = new Bridge.Version("constructor$4", "2.4.1128.65537");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v3), "v3 created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3.getMajor(), 2, "v3.Major 2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3.getMinor(), 4, "v3.Minor 4");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3.getBuild(), 1128, "v3.Build 1128");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3.getRevision(), 65537, "v3.Revision 65537");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3.getMajorRevision(), 1, "v3.MajorRevision 1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3.getMinorRevision(), 1, "v3.MinorRevision 1");

            var v4 = new Bridge.Version("constructor$1", 20, 10);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v4), "v4 created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v4.getMajor(), 20, "v4.Major 20");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v4.getMinor(), 10, "v4.Minor 10");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v4.getBuild(), -1, "v4.Build -1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v4.getRevision(), -1, "v4.Revision -1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v4.getMajorRevision(), -1, "v4.MajorRevision -1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v4.getMinorRevision(), -1, "v4.MinorRevision -1");

            var v5 = new Bridge.Version("constructor$2", 200, 100, 300);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v5), "v5 created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v5.getMajor(), 200, "v5.Major 200");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v5.getMinor(), 100, "v5.Minor 100");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v5.getBuild(), 300, "v5.Build 300");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v5.getRevision(), -1, "v5.Revision -1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v5.getMajorRevision(), -1, "v5.MajorRevision -1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v5.getMinorRevision(), -1, "v5.MinorRevision -1");

            var v6 = new Bridge.Version("constructor$3", 2000, 1000, 3000, 22613920);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v6), "v6 created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v6.getMajor(), 2000, "v6.Major 2000");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v6.getMinor(), 1000, "v6.Minor 1000");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v6.getBuild(), 3000, "v6.Build 3000");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v6.getRevision(), 22613920, "v6.Revision (345 << 16) + 4000 = 22613920");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v6.getMajorRevision(), 345, "v6.MajorRevision 345");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v6.getMinorRevision(), 4000, "v6.MinorRevision 4");
        },
        testCloneCompare: function () {
            var v1 = new Bridge.Version("constructor$3", 1, 2, 3, 262149);

            var o = v1.clone();
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(o), "v1 Cloned");

            var v2 = Bridge.as(o, Bridge.Version);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v2), "v1 Cloned as Version");

            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.getMajor(), 1, "v2.Major 1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.getMinor(), 2, "v2.Minor 2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.getBuild(), 3, "v2.Build 3");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.getRevision(), 262149, "v2.Revision  (4 << 16) + 5 = 262149");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.getMajorRevision(), 4, "v2.MajorRevision 4");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.getMinorRevision(), 5, "v2.MinorRevision 5");

            var v3 = new Bridge.Version("constructor$3", 1, 2, 2, 262149);
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.compareTo(v3), 1, "v1.CompareTo(v3)");

            var v4 = new Bridge.Version("constructor$3", 1, 3, 3, 262149);
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.compareTo(v4), -1, "v1.CompareTo(v4)");

            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.compareTo$1(o), 0, "v1.CompareTo(o)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.compareTo(v2), 0, "v1.CompareTo(v2)");
            Bridge.get(Bridge.Test.Assert).areNotEqual$1(v1.compareTo(null), 0, "v1.CompareTo(null)");
        },
        testEqualsGetHashCode: function () {
            var v1 = new Bridge.Version("constructor$3", 100, 200, 300, 26214900);
            var v2 = new Bridge.Version("constructor$3", 100, 200, 300, 26214900);
            var v3 = new Bridge.Version("constructor$3", 101, 200, 300, 26214900);
            var o = { };
            var o2 = v2;

            Bridge.get(Bridge.Test.Assert).true$1(v1.equalsT(v2), "v1.Equals(v2)");
            Bridge.get(Bridge.Test.Assert).false$1(v1.equalsT(v3), "v1.Equals(v3)");
            Bridge.get(Bridge.Test.Assert).false$1(v1.equals(o), "v1.Equals(o)");
            Bridge.get(Bridge.Test.Assert).false$1(v1.equalsT(null), "v1.Equals(null)");
            Bridge.get(Bridge.Test.Assert).false$1(v1.equals(100), "v1.Equals(100)");
            Bridge.get(Bridge.Test.Assert).true$1(v1.equals(o2), "v1.Equals(o2)");

            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.getHashCode(), 1283637748, "v1.GetHashCode()");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.getHashCode(), 1283637748, "v2.GetHashCode()");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3.getHashCode(), 1552073204, "v3.GetHashCode()");
        },
        testToString: function () {
            var v1 = new Bridge.Version("constructor$4", "2.4.1128.65537");
            var v2 = new Bridge.Version("constructor$3", 100, 200, 300, 26214900);
            var v3 = new Bridge.Version("constructor$2", 100, 200, 300);
            var v4 = new Bridge.Version("constructor$1", 100, 200);
            var v5 = new Bridge.Version("constructor");

            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.toString(), "2.4.1128.65537", "c1.ToString()");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v2.toString(), "100.200.300.26214900", "c2.ToString()");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v3.toString(), "100.200.300", "c3.ToString()");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v4.toString(), "100.200", "c4.ToString()");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v5.toString(), "0.0", "c5.ToString()");

            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.toString$1(1), "2", "c1.ToString(1)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.toString$1(2), "2.4", "c1.ToString(2)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.toString$1(3), "2.4.1128", "c1.ToString(3)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v1.toString$1(4), "2.4.1128.65537", "c1.ToString(4)");
            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                v1.toString$1(5);
            }, "c1.ToString(5)");
        },
        testParse: function () {
            var s1 = "105.1.1128.65547";
            var v1 = new Bridge.Version("constructor$4", s1);

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.Version).parse(s1).toString(), v1.toString(), "Version.Parse(s1)");

            var s2 = "105.1";
            var v2 = new Bridge.Version("constructor$4", s2);

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.Version).parse(s2).toString(), v2.toString(), "Version.Parse(s2)");

            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                Bridge.get(Bridge.Version).parse("12,123.23.12");
            }, "Version.Parse(\"12,123.23.12\")");

            var vp1 = { };
            var b1 = Bridge.get(Bridge.Version).tryParse("12,123.23.12", vp1);
            Bridge.get(Bridge.Test.Assert).areEqual$1(b1, false, "b1");

            var vp2 = { };
            var b2 = Bridge.get(Bridge.Version).tryParse("12.3.2.1", vp2);
            Bridge.get(Bridge.Test.Assert).areEqual$1(b2, true, "b2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(vp2.v.toString(), "12.3.2.1", "vp2.ToString()");
        },
        testOperators: function () {
            var v1 = new Bridge.Version("constructor$3", 1, 2, 3, 262149);
            var v2 = new Bridge.Version("constructor$3", 1, 2, 3, 262149);
            var v3 = new Bridge.Version("constructor$3", 1, 3, 3, 262149);

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Version.op_Equality(v1, v2), "v1 == v2");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_Inequality(v1, v2), "v1 != v2");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_GreaterThan(v1, v2), "v1 > v2");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Version.op_GreaterThanOrEqual(v1, v2), "v1 >= v2");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_LessThan(v1, v2), "v1 < v2");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Version.op_LessThanOrEqual(v1, v2), "v1 <= v2");

            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_Equality(v1, v3), "v1 == v3");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Version.op_Inequality(v1, v3), "v1 != v3");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_GreaterThan(v1, v3), "v1 > v3");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_GreaterThanOrEqual(v1, v3), "v1 >= v3");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Version.op_LessThan(v1, v3), "v1 < v3");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Version.op_LessThanOrEqual(v1, v3), "v1 <= v3");

            Bridge.get(Bridge.Test.Assert).false$1(!Bridge.hasValue(v1), "v1 == null");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v1), "v1 != null");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Version.op_GreaterThan(v1, null), "v1 > null");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Version.op_GreaterThanOrEqual(v1, null), "v1 >= null");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_LessThan(v1, null), "v1 < null");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_LessThanOrEqual(v1, null), "v1 <= null");

            Bridge.get(Bridge.Test.Assert).false$1(!Bridge.hasValue(v3), "null == v3");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(v3), "null != v3");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_GreaterThan(null, v3), "null > v3");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_GreaterThanOrEqual(null, v3), "null >= v3");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Version.op_LessThan(null, v3), "null < v3");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Version.op_LessThanOrEqual(null, v3), "null <= v3");

            var v4 = null;
            var v5 = null;

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.Version.op_Equality(v4, v5), "v4 == v5");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_Inequality(v4, v5), "v4 != v5");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_GreaterThan(v4, v5), "v4 > v5");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_GreaterThanOrEqual(v4, v5), "v4 >= v5");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_LessThan(v4, v5), "v4 < v5");
            Bridge.get(Bridge.Test.Assert).false$1(Bridge.Version.op_LessThanOrEqual(v4, v5), "v4 <= v5");
        }
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.TimeSpanTests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.TimeSpan), "Bridge.TimeSpan");
        var d = new Bridge.TimeSpan();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.TimeSpan), "d is TimeSpan");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.IComparable$1(Bridge.TimeSpan)), "d is IComparable<TimeSpan>");
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(d, Bridge.IEquatable$1(Bridge.TimeSpan)), "d is IEquatable<TimeSpan>");
    },
    defaultConstructorWorks: function () {
        var time = new Bridge.TimeSpan();
        Bridge.get(Bridge.Test.Assert).areEqual(time.getTicks(), 0);
    },
    defaultValueWorks: function () {
        var ts = Bridge.getDefaultValue(Bridge.TimeSpan);
        Bridge.get(Bridge.Test.Assert).areEqual(ts.getTicks(), 0);
    },
    zeroWorks: function () {
        var ts = Bridge.TimeSpan.zero;
        Bridge.get(Bridge.Test.Assert).areEqual(ts.getTicks(), 0);
    },
    creatingInstanceReturnsTimeSpanWithZeroValue: function () {
        var ts = new Bridge.TimeSpan();
        Bridge.get(Bridge.Test.Assert).areEqual(ts.getTicks(), 0);
    },
    parameterConstructorsWorks: function () {
        var time = new Bridge.TimeSpan(34567);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(time, Bridge.TimeSpan), "ticks type");
        Bridge.get(Bridge.Test.Assert).areEqual$1(time.getTicks(), 34567, "ticks value");

        time = new Bridge.TimeSpan(10, 20, 5);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(time, Bridge.TimeSpan), "h, m, s type");
        Bridge.get(Bridge.Test.Assert).areEqual$1(time.getTicks(), 372050000000, "h, m, s value");

        time = new Bridge.TimeSpan(15, 10, 20, 5);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(time, Bridge.TimeSpan), "d, h, m, s type");
        Bridge.get(Bridge.Test.Assert).areEqual$1(time.getTicks(), 13332050000000, "d, h, m, s value");

        time = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(time, Bridge.TimeSpan), "full type");
        Bridge.get(Bridge.Test.Assert).areEqual$1(time.getTicks(), 13332050140000, "full value");
    },
    factoryMethodsWork: function () {
        var time = Bridge.TimeSpan.fromDays(3);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(time, Bridge.TimeSpan), "FromDays type");
        Bridge.get(Bridge.Test.Assert).areEqual$1(time.getTicks(), 2592000000000, "FromDays value");

        time = Bridge.TimeSpan.fromHours(3);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(time, Bridge.TimeSpan), "FromHours type");
        Bridge.get(Bridge.Test.Assert).areEqual$1(time.getTicks(), 108000000000, "FromHours value");

        time = Bridge.TimeSpan.fromMinutes(3);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(time, Bridge.TimeSpan), "FromMinutes type");
        Bridge.get(Bridge.Test.Assert).areEqual$1(time.getTicks(), 1800000000, "FromMinutes value");

        time = Bridge.TimeSpan.fromSeconds(3);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(time, Bridge.TimeSpan), "FromSeconds type");
        Bridge.get(Bridge.Test.Assert).areEqual$1(time.getTicks(), 30000000, "FromSeconds value");

        time = Bridge.TimeSpan.fromMilliseconds(3);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(time, Bridge.TimeSpan), "FromMilliseconds type");
        Bridge.get(Bridge.Test.Assert).areEqual$1(time.getTicks(), 30000, "FromMilliseconds value");

        time = Bridge.TimeSpan.fromTicks(3);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(time, Bridge.TimeSpan), "FromTicks type");
        Bridge.get(Bridge.Test.Assert).areEqual$1(time.getTicks(), 3, "FromTicks value");
    },
    propertiesWork: function () {
        var time = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        Bridge.get(Bridge.Test.Assert).areEqual(time.getDays(), 15);
        Bridge.get(Bridge.Test.Assert).areEqual(time.getHours(), 10);
        Bridge.get(Bridge.Test.Assert).areEqual(time.getMinutes(), 20);
        Bridge.get(Bridge.Test.Assert).areEqual(time.getSeconds(), 5);
        Bridge.get(Bridge.Test.Assert).areEqual(time.getMilliseconds(), 14);
        this.assertAlmostEqual(time.getTotalDays(), 15.430613587962963);
        this.assertAlmostEqual(time.getTotalHours(), 370.33472611111108);
        this.assertAlmostEqual(time.getTotalMinutes(), 22220.083566666668);
        this.assertAlmostEqual(time.getTotalSeconds(), 1333205.014);
        this.assertAlmostEqual(time.getTotalMilliseconds(), 1333205014.0);
        Bridge.get(Bridge.Test.Assert).areEqual(time.getTicks(), 13332050140000);
    },
    compareToWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time4 = new Bridge.TimeSpan(15, 11, 20, 5, 14);
        Bridge.get(Bridge.Test.Assert).areEqual(0, time1.compareTo(time1));
        Bridge.get(Bridge.Test.Assert).areEqual(0, time1.compareTo(time2));
        Bridge.get(Bridge.Test.Assert).areEqual(1, time1.compareTo(time3));
        Bridge.get(Bridge.Test.Assert).areEqual(-1, time1.compareTo(time4));
    },
    compareWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time4 = new Bridge.TimeSpan(15, 11, 20, 5, 14);
        Bridge.get(Bridge.Test.Assert).areEqual(0, time1.compareTo(time1));
        Bridge.get(Bridge.Test.Assert).areEqual(0, time1.compareTo(time2));
        Bridge.get(Bridge.Test.Assert).areEqual(1, time1.compareTo(time3));
        Bridge.get(Bridge.Test.Assert).areEqual(-1, time1.compareTo(time4));
    },
    staticEqualsWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(15, 10, 20, 5, 14);

        Bridge.get(Bridge.Test.Assert).$false(time1.ticks === time2.ticks);
        Bridge.get(Bridge.Test.Assert).$true(time1.ticks === time3.ticks);
    },
    equalsWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(15, 10, 20, 5, 14);

        Bridge.get(Bridge.Test.Assert).$false(time1.equalsT(time2));
        Bridge.get(Bridge.Test.Assert).$true(time1.equalsT(time3));
    },
    iEquatableEqualsWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(15, 10, 20, 5, 14);

        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast(time1, Bridge.IEquatable$1(Bridge.TimeSpan))), time2));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast(time1, Bridge.IEquatable$1(Bridge.TimeSpan))), time3));
    },
    toStringWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(14, 10, 20, 5, 2);
        var time3 = new Bridge.TimeSpan(15, 11, 20, 6, 14);
        var time4 = new Bridge.TimeSpan(1, 2, 3);
        Bridge.get(Bridge.Test.Assert).areEqual(time1.toString(), "15.10:20:05.0140000");
        Bridge.get(Bridge.Test.Assert).areEqual(time2.toString(), "14.10:20:05.0020000");
        Bridge.get(Bridge.Test.Assert).areEqual(time3.toString(), "15.11:20:06.0140000");
        Bridge.get(Bridge.Test.Assert).areEqual(time4.toString(), "01:02:03");
    },
    addWorks: function () {
        var time1 = new Bridge.TimeSpan(2, 3, 4, 5, 6);
        var time2 = new Bridge.TimeSpan(3, 4, 5, 6, 7);
        var actual = time1.add(time2);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(actual, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.get(Bridge.Test.Assert).areEqual$1(actual.getTotalMilliseconds(), 457751013, "TotalMilliseconds should be correct");
    },
    subtractWorks: function () {
        var time1 = new Bridge.TimeSpan(4, 3, 7, 2, 6);
        var time2 = new Bridge.TimeSpan(3, 4, 5, 6, 7);
        var actual = time1.subtract(time2);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(actual, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.get(Bridge.Test.Assert).areEqual$1(actual.getTotalMilliseconds(), 82915999, "TotalMilliseconds should be correct");
    },
    durationWorks: function () {
        var time1 = new Bridge.TimeSpan(-3, -2, -1, -5, -4);
        var time2 = new Bridge.TimeSpan(2, 1, 5, 4, 3);
        var actual1 = time1.duration();
        var actual2 = time2.duration();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(time1, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.get(Bridge.Test.Assert).areEqual$1(actual1.getTotalMilliseconds(), 266465004, "Negative should be negated");
        Bridge.get(Bridge.Test.Assert).areEqual$1(actual2.getTotalMilliseconds(), 176704003, "Positive should be preserved");
    },
    negateWorks: function () {
        var time = new Bridge.TimeSpan(-3, 2, -1, 5, -4);
        var actual = time.negate();
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(actual, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.get(Bridge.Test.Assert).areEqual$1(actual.getTotalMilliseconds(), 252055004, "Ticks should be correct");
    },
    assertAlmostEqual: function (d1, d2) {
        var diff = d2 - d1;
        if (diff < 0) {
            diff = -diff;
        }
        Bridge.get(Bridge.Test.Assert).$true(diff < 1E-08);
    },
    comparisonOperatorsWork: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time4 = new Bridge.TimeSpan(15, 11, 20, 5, 14);

        Bridge.get(Bridge.Test.Assert).false$1(time1.ticks > time2.ticks, "> 1");
        Bridge.get(Bridge.Test.Assert).true$1(time1.ticks > time3.ticks, "> 2");
        Bridge.get(Bridge.Test.Assert).false$1(time1.ticks > time4.ticks, "> 3");

        Bridge.get(Bridge.Test.Assert).true$1(time1.ticks >= time2.ticks, ">= 1");
        Bridge.get(Bridge.Test.Assert).true$1(time1.ticks >= time3.ticks, ">= 2");
        Bridge.get(Bridge.Test.Assert).false$1(time1.ticks >= time4.ticks, ">= 3");

        Bridge.get(Bridge.Test.Assert).false$1(time1.ticks < time2.ticks, "< 1");
        Bridge.get(Bridge.Test.Assert).false$1(time1.ticks < time3.ticks, "< 2");
        Bridge.get(Bridge.Test.Assert).true$1(time1.ticks < time4.ticks, "< 3");

        Bridge.get(Bridge.Test.Assert).true$1(time1.ticks <= time2.ticks, "<= 1");
        Bridge.get(Bridge.Test.Assert).false$1(time1.ticks <= time3.ticks, "<= 2");
        Bridge.get(Bridge.Test.Assert).true$1(time1.ticks <= time4.ticks, "<= 3");

        Bridge.get(Bridge.Test.Assert).true$1(time1.ticks === time1.ticks, "== 1");
        Bridge.get(Bridge.Test.Assert).true$1(time1.ticks === time2.ticks, "== 2");
        Bridge.get(Bridge.Test.Assert).false$1(time1.ticks === time3.ticks, "== 3");
        Bridge.get(Bridge.Test.Assert).false$1(time1.ticks === time4.ticks, "== 4");

        Bridge.get(Bridge.Test.Assert).false$1(time1.ticks !== time1.ticks, "!= 1");
        Bridge.get(Bridge.Test.Assert).false$1(time1.ticks !== time2.ticks, "!= 2");
        Bridge.get(Bridge.Test.Assert).true$1(time1.ticks !== time3.ticks, "!= 3");
        Bridge.get(Bridge.Test.Assert).true$1(time1.ticks !== time4.ticks, "!= 4");
    },
    additionOperatorWorks: function () {
        var time1 = new Bridge.TimeSpan(2, 3, 4, 5, 6);
        var time2 = new Bridge.TimeSpan(3, 4, 5, 6, 7);
        var actual = new Bridge.TimeSpan(time1.ticks + time2.ticks);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(actual, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.get(Bridge.Test.Assert).areEqual$1(actual.getTotalMilliseconds(), 457751013, "TotalMilliseconds should be correct");
    },
    subtractionOperatorWorks: function () {
        var time1 = new Bridge.TimeSpan(4, 3, 7, 2, 6);
        var time2 = new Bridge.TimeSpan(3, 4, 5, 6, 7);
        var actual = new Bridge.TimeSpan(time1.ticks - time2.ticks);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(actual, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.get(Bridge.Test.Assert).areEqual$1(actual.getTotalMilliseconds(), 82915999, "TotalMilliseconds should be correct");
    },
    unaryPlusWorks: function () {
        var time = new Bridge.TimeSpan(-3, 2, -1, 5, -4);
        var actual = new Bridge.TimeSpan(time.ticks);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(actual, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.get(Bridge.Test.Assert).areEqual$1(actual.getTotalMilliseconds(), -252055004, "Ticks should be correct");
    },
    unaryMinusWorks: function () {
        var time = new Bridge.TimeSpan(-3, 2, -1, 5, -4);
        var actual = new Bridge.TimeSpan(-time.ticks);
        Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(actual, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.get(Bridge.Test.Assert).areEqual$1(actual.getTotalMilliseconds(), 252055004, "Ticks should be correct");
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.TupleTests', {
    tuple1Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a" } : { item1: "a" };
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item1, "a");
        }
    },
    tuple2Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b" } : { item1: "a", item2: "b" };
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item1, "a");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item2, "b");
        }
    },
    tuple3Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c" } : { item1: "a", item2: "b", item3: "c" };
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item1, "a");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item2, "b");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item3, "c");
        }
    },
    tuple4Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d" } : { item1: "a", item2: "b", item3: "c", item4: "d" };
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item1, "a");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item2, "b");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item3, "c");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item4, "d");
        }
    },
    tuple5Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e" };
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item1, "a");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item2, "b");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item3, "c");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item4, "d");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item5, "e");
        }
    },
    tuple6Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f" };
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item1, "a");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item2, "b");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item3, "c");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item4, "d");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item5, "e");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item6, "f");
        }
    },
    tuple7Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g" };
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item1, "a");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item2, "b");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item3, "c");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item4, "d");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item5, "e");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item6, "f");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item7, "g");
        }
    },
    tuple8Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g", rest: "h" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g", rest: "h" };
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item1, "a");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item2, "b");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item3, "c");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item4, "d");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item5, "e");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item6, "f");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.item7, "g");
            Bridge.get(Bridge.Test.Assert).areStrictEqual(t.rest, "h");
        }
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.UInt16Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(Bridge.cast(0, Bridge.Int), Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.is(0.5, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(-1, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(65536, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");

        var s = Bridge.cast(0, Bridge.Int);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(s, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(s, Bridge.IComparable$1(Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(s, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(s, Bridge.IFormattable));
    },
    castsWork: function () {
        var i1 = -1, i2 = 0, i3 = 234, i4 = 65535, i5 = 65536;
        var ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 65535, ni5 = 65536, ni6 = null;

        // TODO unchecked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -1, "-1 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 65535, "65535 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 65536, "65536 unchecked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni1), Bridge.Int, true), -1, "nullable -1 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), 0, "nullable 0 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 234, "nullable 234 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 65535, "nullable 65535 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni5), Bridge.Int, true), 65536, "nullable 65536 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 65535, "65535 checked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), 0, "nullable 0 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 234, "nullable 234 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 65535, "nullable 65535 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(0, 0);
        Bridge.get(Bridge.Test.Assert).areEqual(65535, 65535);
    },
    formatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(291, Bridge.Int))), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(291, Bridge.Int))), "x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("23445", numberResult, 0, 65535);
        Bridge.get(Bridge.Test.Assert).$true(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 23445);

        result = Bridge.Int.tryParseInt("", numberResult, 0, 65535);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, 0, 65535);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, 0, 65535);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("32768", numberResult, 0, 65535);
        Bridge.get(Bridge.Test.Assert).$true(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 32768);

        result = Bridge.Int.tryParseInt("-1", numberResult, 0, 65535);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, -1);

        result = Bridge.Int.tryParseInt("2.5", numberResult, 0, 65535);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.parseInt("23445", 0, 65535), 23445);
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("", 0, 65535);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt(null, 0, 65535);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("notanumber", 0, 65535);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("65536", 0, 65535);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("-1", 0, 65535);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("2.5", 0, 65535);
        });
    },
    toStringWithoutRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123, Bridge.Int))).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123, Bridge.Int))).toString(10), "123");
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(291, Bridge.Int))).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))));
    },
    equalsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(1, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(1, Bridge.Int))), Bridge.cast(1, Bridge.Int)));

        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.UInt32Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(0, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.is(0.5, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(-1, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(4294967296, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        var i = Bridge.cast(0, Bridge.Int);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(i, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(i, Bridge.IComparable$1(Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(i, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(i, Bridge.IFormattable));
    },
    castsWork: function () {
        var i1 = -1, i2 = 0, i3 = 234, i4 = 4294967295, i5 = 4294967296;
        var ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 4294967295, ni5 = 4294967296, ni6 = null;

        // TODO unchecked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -1, "-1 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 4294967295, "4294967295 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 4294967296, "4294967296 unchecked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni1), Bridge.Int, true), -1, "nullable -1 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), 0, "nullable 0 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 234, "nullable 234 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 4294967295, "nullable 4294967295 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni5), Bridge.Int, true), 4294967296, "nullable 4294967296 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 4294967295, "4294967295 checked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), 0, "nullable 0 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 234, "nullable 234 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 4294967295, "nullable 4294967295 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(0, 0);
        Bridge.get(Bridge.Test.Assert).areEqual(4294967295, 4294967295);
    },
    formatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(291, Bridge.Int))), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(291, Bridge.Int))), "x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("23445", numberResult, 0, 4294967295);
        Bridge.get(Bridge.Test.Assert).$true(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 23445);

        result = Bridge.Int.tryParseInt("", numberResult, 0, 4294967295);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, 0, 4294967295);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, 0, 4294967295);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("-1", numberResult, 0, 4294967295);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, -1);

        result = Bridge.Int.tryParseInt("2.5", numberResult, 0, 4294967295);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.parseInt("23445", 0, 4294967295), 23445);
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("", 0, 4294967295);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt(null, 0, 4294967295);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("notanumber", 0, 4294967295);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("4294967296", 0, 4294967295);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("-1", 0, 4294967295);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("2.5", 0, 4294967295);
        });
    },
    toStringWithoutRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123, Bridge.Int))).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123, Bridge.Int))).toString(10), "123");
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(291, Bridge.Int))).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))));
    },
    equalsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(1, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(1, Bridge.Int))), Bridge.cast(1, Bridge.Int)));

        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.UInt64Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(Bridge.cast(0, Bridge.Int), Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.is(0.5, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        var l = Bridge.cast(0, Bridge.Int);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(l, Bridge.Int));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(l, Bridge.IComparable$1(Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(l, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.is(l, Bridge.IFormattable));
    },
    castsWork: function () {
        var i2 = 0, i3 = 234, i4 = 9223372036854775000;
        var ni2 = 0, ni3 = 234, ni4 = 9223372036854775000, ni6 = null;

        // TODO unchecked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 9223372036854775000, "9223372036854775000 unchecked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), 0, "nullable 0 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 234, "nullable 234 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 9223372036854775000, "nullable 9223372036854775000 unchecked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 9223372036854775000, "9223372036854775000 checked");

            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni2), Bridge.Int, true), 0, "nullable 0 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni3), Bridge.Int, true), 234, "nullable 234 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni4), Bridge.Int, true), 9223372036854775000, "nullable 9223372036854775000 checked");
            Bridge.get(Bridge.Test.Assert).areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(ni6), Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.get(Bridge.Test.Assert).areStrictEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(0, 0);
    },
    formatWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(291, Bridge.Int))), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.format(((Bridge.cast(291, Bridge.Int))), "x"), "123");
    },
    castingOfLargeValuesToUInt64Works: function () {
        var d1 = 5000000000.5, d2 = -d1;
        Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Int.trunc(d1), 5000000000, "Positive");
        Bridge.get(Bridge.Test.Assert).false$1(Bridge.Int.trunc(d2) > 2147483647, "Negative");
    },
    divisionOfLargeUInt64Works: function () {
        var v1 = 50000000000, v2 = 3;
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.div(v1, v2), 16666666666);
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("23445", numberResult, 0, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$true(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 23445);

        result = Bridge.Int.tryParseInt("", numberResult, 0, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, 0, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, 0, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("-1", numberResult, 0, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, -1);

        result = Bridge.Int.tryParseInt("2.5", numberResult, 0, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$false(result);
        Bridge.get(Bridge.Test.Assert).areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("100000000000000000000", numberResult, 0, 9007199254740991);
        Bridge.get(Bridge.Test.Assert).$false(result);
        //Assert.AreEqual(numberResult, 100000000000000000000);
    },
    parseWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.Int.parseInt("23445", 0, 9007199254740991), 23445);
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("", 0, 9007199254740991);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt(null, 0, 9007199254740991);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("notanumber", 0, 9007199254740991);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("-1", 0, 9007199254740991);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("2.5", 0, 9007199254740991);
        });
        Bridge.get(Bridge.Test.Assert).$throws(function () {
            Bridge.Int.parseInt("100000000000000000000", 0, 9007199254740991);
        });
    },
    toStringWithoutRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123, Bridge.Int))).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(123, Bridge.Int))).toString(10), "123");
        Bridge.get(Bridge.Test.Assert).areEqual(((Bridge.cast(291, Bridge.Int))).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))));
        Bridge.get(Bridge.Test.Assert).areNotEqual(Bridge.getHashCode(((Bridge.cast(0, Bridge.Int)))), Bridge.getHashCode(((Bridge.cast(1, Bridge.Int)))));
    },
    equalsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equals(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equals(((Bridge.cast(1, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT(((Bridge.cast(1, Bridge.Int))), Bridge.cast(1, Bridge.Int)));

        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.get(Bridge.Test.Assert).$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(1, Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare(((Bridge.cast(0, Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.get(Bridge.Test.Assert).$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.Text.RegularExpressions.RegexTests', {
    statics: {
        escapeWorks: function () {
            var escaped = Bridge.regexpEscape("[-/\\^$*+?.()|[]{}]");
            Bridge.get(Bridge.Test.Assert).areEqual(escaped, "\\[\\-\\/\\\\\\^\\$\\*\\+\\?\\.\\(\\)\\|\\[\\]\\{\\}\\]");
        }
    },
    typePropertiesAreCorrect: function () {
        var re = new RegExp("");
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(RegExp), "RegExp");
        Bridge.get(Bridge.Test.Assert).$true(true);
    },
    stringOnlyConstructorWorks: function () {
        var re = new RegExp("test123");
        Bridge.get(Bridge.Test.Assert).areEqual(re.source, "test123");
        Bridge.get(Bridge.Test.Assert).$false(re.global);
    },
    constructorWithFlagsWorks: function () {
        var re = new RegExp("test123", "g");
        Bridge.get(Bridge.Test.Assert).areEqual(re.source, "test123");
        Bridge.get(Bridge.Test.Assert).$true(re.global);
    },
    globalFlagWorks: function () {
        Bridge.get(Bridge.Test.Assert).$false(new RegExp("x", "").global);
        Bridge.get(Bridge.Test.Assert).$true(new RegExp("x", "g").global);
    },
    ignoreCaseFlagWorks: function () {
        Bridge.get(Bridge.Test.Assert).$false(new RegExp("x", "").ignoreCase);
        Bridge.get(Bridge.Test.Assert).$true(new RegExp("x", "i").ignoreCase);
    },
    multilineFlagWorks: function () {
        Bridge.get(Bridge.Test.Assert).$false(new RegExp("x", "").multiline);
        Bridge.get(Bridge.Test.Assert).$true(new RegExp("x", "m").multiline);
    },
    patternPropertyWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(new RegExp("test123", "").source, "test123");
    },
    sourcePropertyWorks: function () {
        Bridge.get(Bridge.Test.Assert).areEqual(new RegExp("test123", "").source, "test123");
    },
    execWorks: function () {
        var re = new RegExp("a|b", "g");
        var m = re.exec("xaybz");
        //Assert.AreEqual(m.Index, 1);
        Bridge.get(Bridge.Test.Assert).areEqual(m.length, 1);
        Bridge.get(Bridge.Test.Assert).areEqual(m[0], "a");
    },
    lastIndexWorks: function () {
        var re = new RegExp("a|b", "g");
        re.exec("xaybz");
        Bridge.get(Bridge.Test.Assert).areEqual(re.lastIndex, 2);
    },
    testWorks: function () {
        Bridge.get(Bridge.Test.Assert).$true(new RegExp("a|b").test("xaybz"));
        Bridge.get(Bridge.Test.Assert).$false(new RegExp("c").test("xaybz"));
    }
});

Bridge.define('Bridge.ClientTest.Text.StringBuilderTests', {
    statics: {
        stringBuilders: function () {
            // TEST constructors
            var sb = new Bridge.Text.StringBuilder();
            var sb1 = new Bridge.Text.StringBuilder("", 128);
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "", "StringBuilder() .ctor");
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), sb1.toString(), "StringBuilder(capacity) .ctor");

            sb = new Bridge.Text.StringBuilder("foo");
            sb1 = new Bridge.Text.StringBuilder("foo", 2);
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "foo", "StringBuilder(string) .ctor");
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), sb1.toString(), "StringBuilder(string, capacity) .ctor");

            sb = new Bridge.Text.StringBuilder("foo bar", 4, 3);
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "bar", "StringBuilder(string) .ctor");

            // TEST properties

            // Capacity
            sb = new Bridge.Text.StringBuilder("", 128);
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getCapacity(), 128, ".Capacity");
            sb = new Bridge.Text.StringBuilder("foo", 2);
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getCapacity(), 16, ".Capacity");
            sb.setCapacity(10);
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getCapacity(), 10, ".Capacity");

            // Length
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), ("foo").length, ".Length");

            // TEST methods

            // Clear
            sb.clear();
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 0, ".Clear()");
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "", ".Clear()");

            // Append
            sb.append("foo");
            sb.append("foo bar", 3, 4);
            sb.append(true);
            sb.append(String.fromCharCode(61));
            sb.append(123);
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "foo bartrue=123", ".Append()");

            // AppendLine
            sb.appendLine();
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "foo bartrue=123\r\n", ".AppendLine()");
            sb.appendLine("foo bar");
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "foo bartrue=123\r\nfoo bar\r\n", ".AppendLine(string)");

            // AppendFormat
            sb.appendFormat("({0}, {1})", "foo", false);
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "foo bartrue=123\r\nfoo bar\r\n(foo, false)", ".AppendFormat(format, args)");

            // Insert
            sb.insert(0, 56.7);
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "56.7foo bartrue=123\r\nfoo bar\r\n(foo, false)", ".Insert()");

            // Remove
            sb.remove(4, 7);
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "56.7true=123\r\nfoo bar\r\n(foo, false)", ".Remove(start, length)");

            // Replace
            sb.replace("foo bar", "bar foo");
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "56.7true=123\r\nbar foo\r\n(foo, false)", ".Replace(string, string)");
            sb.replace(String.fromCharCode(13), String.fromCharCode(10));
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "56.7true=123\n\nbar foo\n\n(foo, false)", ".Replace(char, char)");
            sb.replace(String.fromCharCode(102), String.fromCharCode(70), 23, 6);
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "56.7true=123\n\nbar foo\n\n(Foo, false)", ".Replace(char, char, start, length)");
            sb.replace("Foo", "foo", 23, 6);
            Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "56.7true=123\n\nbar foo\n\n(foo, false)", ".Replace(string, string, start, length)");
        }
    },
    typePropertiesAreCorrect: function () {
        var sb = new Bridge.Text.StringBuilder();
        Bridge.get(Bridge.Test.Assert).areEqual(Bridge.getTypeName(Bridge.Text.StringBuilder), "Bridge.Text.StringBuilder");
        Bridge.get(Bridge.Test.Assert).$true(true);
    },
    defaultConstructorWorks: function () {
        var sb = new Bridge.Text.StringBuilder();
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "", "Text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 0, "Length");
    },
    constructorWithCapacityWorks: function () {
        var sb = new Bridge.Text.StringBuilder("", 55);
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "", "Text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 0, "Length");
    },
    initialTextConstructorWorks: function () {
        var sb = new Bridge.Text.StringBuilder("some text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "some text", "Text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 9, "Length");
    },
    initialTextConstructorWithCapacityWorks: function () {
        var sb = new Bridge.Text.StringBuilder("some text", 55);
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "some text", "Text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 9, "Length");
    },
    substringConstructorWorks: function () {
        var sb = new Bridge.Text.StringBuilder("some text", 5, 3);
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "tex", "Text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 3, "Length");
    },
    appendBoolWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.get(Bridge.Test.Assert).$true(sb.append(true) === sb);
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "|true", "Text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 5, "Length");
    },
    appendCharWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.get(Bridge.Test.Assert).$true(sb.append(String.fromCharCode(99)) === sb);
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "|c", "Text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 2, "Length");
    },
    appendIntWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.get(Bridge.Test.Assert).$true(sb.append(123) === sb);
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "|123", "Text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 4, "Length");
    },
    appendDoubleWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.get(Bridge.Test.Assert).$true(sb.append(123.0) === sb);
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "|123", "Text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 4, "Length");
    },
    appendObjectWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.get(Bridge.Test.Assert).$true(sb.append(new Bridge.ClientTest.Text.StringBuilderTests.SomeClass()) === sb);
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "|some text", "Text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 10, "Length");
    },
    appendStringWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.get(Bridge.Test.Assert).$true(sb.append("some text") === sb);
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "|some text", "Text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 10, "Length");
    },
    appendLineWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.get(Bridge.Test.Assert).$true(sb.appendLine() === sb);
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "|\r\n", "Text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 3, "Length");
    },
    appendLineStringWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.get(Bridge.Test.Assert).$true(sb.appendLine("some text") === sb);
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "|some text\r\n", "Text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 12, "Length");
    },
    clearWorks: function () {
        var sb = new Bridge.Text.StringBuilder("some text");
        sb.clear();
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.toString(), "", "Text");
        Bridge.get(Bridge.Test.Assert).areEqual$1(sb.getLength(), 0, "Length");
    },
    toStringWorks: function () {
        // Yes, this is tested by every other test as well. Included for completeness only
        var sb = new Bridge.Text.StringBuilder("some text");
        Bridge.get(Bridge.Test.Assert).areEqual(sb.toString(), "some text");
    },
    lengthPropertyWorks: function () {
        // Yes, this is tested by every other test as well. Included for completeness only
        var sb = new Bridge.Text.StringBuilder("some text");
        Bridge.get(Bridge.Test.Assert).areEqual(sb.getLength(), 9);
    }
});

Bridge.define('Bridge.ClientTest.BasicCSharp.TestReferenceTypes', {
    statics: {
        testInstanceConstructorsAndMethods: function () {
            // Check parameterless constructor
            var a = new Bridge.ClientTest.BasicCSharp.ClassA("constructor");

            // TEST
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getNumberA(), 10, "NumberA 10");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getStringA(), "Str", "StringA Str");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getBoolA(), true, "BoolA true");
            Bridge.get(Bridge.Test.Assert).true$1(a.getDoubleA() === Number.POSITIVE_INFINITY, "DoubleA Double.PositiveInfinity");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(a.getDecimalA(), Bridge.Decimal(-1.0), "DecimalA Decimal.MinusOne");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(a.getData()), "Data not null");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getData().getNumber(), 700, "Data.Number 700");

            // TEST
            // Check constructor with parameter
            Bridge.get(Bridge.Test.Assert).throws$4(Bridge.get(Bridge.ClientTest.BasicCSharp.TestSet1FailureHelper).testConstructor1Failure, "Related should not be null", "Related should not be null");

            // TEST
            // Check constructor with parameter
            Bridge.get(Bridge.Test.Assert).throws$4(Bridge.get(Bridge.ClientTest.BasicCSharp.TestSet1FailureHelper).testConstructor2Failure, "Should pass six parameters", "Should pass six parameters");

            a = new Bridge.ClientTest.BasicCSharp.ClassA("constructor$2", [150, "151", true, 1.53, Bridge.Decimal(1.54), Bridge.merge(new Bridge.ClientTest.BasicCSharp.ClassA.Aux1(), {
                setNumber: 155
            } )]);

            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getNumberA(), 150, "NumberA 150");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getStringA(), "151", "StringA 151");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getBoolA(), true, "BoolA true");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getDoubleA(), 1.53, "DoubleA Double.PositiveInfinity");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(a.getDecimalA(), Bridge.Decimal(1.54), "DecimalA 154");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(a.getData()), "Data not null");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getData().getNumber(), 155, "Data.Number 155");

            // TEST
            // Check instance methods
            var b = a.method1();

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(b), "b not null");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getNumber(), 2, "b Number 2");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(b.getRelated()), "b.Related not null");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getRelated().getNumber(), 1, "b.Related Number 1");

            a.setData(b);
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.method3(), "2 Has related 1", "Method3 2 Has related 1");
            a.setData(null);
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.method3(), "no data", "Method3 no data");

            // TEST
            // Check [#68]
            var c68 = new Bridge.ClientTest.BasicCSharp.Class68();

            Bridge.get(Bridge.Test.Assert).areEqual$1(c68.x, 0, "c68.x 0");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c68.y, 1, "c68.y 1");

            // TEST
            // Check local vars do not get overridden by fields
            c68.test();

            Bridge.get(Bridge.Test.Assert).areEqual$1(c68.x, 0, "c68.x 0");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c68.y, 1, "c68.y 1");
        },
        testStaticConstructorsAndMethods: function () {
            // TEST
            // Check static fields initialization
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).statitIntNotInitialized, 0, "#74 StatitInt not initialized");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).statitStringNotInitialized, null, "#74 StatitString not initialized");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).CONST_CHAR, 81, "#74 CONST_CHAR Q");
            Bridge.get(Bridge.Test.Assert).areEqual$1(true, true, "#74 CONST_DECIMAL 3.123456789324324324m");

            // TEST
            // Check static constructor
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).staticInt, -340, "StatitInt initialized");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).staticString, "Defined string", "StatitString initialized");

            // TEST
            // Check static methods
            var a = Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).staticMethod1(678, "ASD", Number.NaN);

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).statitIntNotInitialized, 678, "StatitIntNotInitialized 678");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).statitStringNotInitialized, "ASD", "ClassA.StatitStringNotInitialized ASD");
            Bridge.get(Bridge.Test.Assert).areDeepEqual$1(a.getDoubleA(), Number.NaN, "DoubleA double.NaN");

            a = Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).staticMethod2([678, "QWE", 234]);
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).statitIntNotInitialized, 1678, "StatitIntNotInitialized 1678");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).statitStringNotInitialized, "QWE", "ClassA.StatitStringNotInitialized QWE");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getDoubleA(), 234, "DoubleA 234");

            Bridge.get(Bridge.Test.Assert).throws$4(Bridge.get(Bridge.ClientTest.BasicCSharp.TestSet1FailureHelper).staticMethod2Failure, "Unable to cast type String to type Bridge.Int", "Cast exception should occur");
        },
        testMethodParameters: function () {
            // Check default parameters
            var ra = new Bridge.ClientTest.BasicCSharp.ClassA("constructor");
            var r = ra.method5(5);

            Bridge.get(Bridge.Test.Assert).areEqual$1(r, 5, "r 5");
            r = ra.method5(15);
            Bridge.get(Bridge.Test.Assert).areEqual$1(r, 15, "r 15");
            r = ra.method5$1(5, 6);
            Bridge.get(Bridge.Test.Assert).areEqual$1(r, 11, "r 11");
            r = ra.method5$1(-50, 6);
            Bridge.get(Bridge.Test.Assert).areEqual$1(r, -44, "r -44");

            // Check referencing did not change data
            var a = new Bridge.ClientTest.BasicCSharp.ClassA("constructor");
            var b = a.method1();
            var c = b.getRelated();

            a.method2(b);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(b), "b not null");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getNumber(), 2, "b Number 2");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(b.getRelated()), "b.Related not null");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getRelated().getNumber(), 2, "b.Related Number 2");

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(c), "c not null");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getNumber(), 1, "c Number 1");
            Bridge.get(Bridge.Test.Assert).true$1(!Bridge.hasValue(c.getRelated()), "c.Related null");

            // Check value local parameter
            var input = 1;
            var result = a.method4(input, 4);

            Bridge.get(Bridge.Test.Assert).areEqual$1(input, 1, "input 1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(result, 5, "result 5");

            // TEST
            // [#86]
            var di = Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).getDefaultInt();
            Bridge.get(Bridge.Test.Assert).areEqual$1(di, 0, "di 0");

            // TEST
            // Check  "out parameter"
            // [#85]
            var i = { };
            var tryResult = Bridge.get(Bridge.ClientTest.BasicCSharp.ClassA).tryParse("", i);

            Bridge.get(Bridge.Test.Assert).true$1(tryResult, "tryResult");
            Bridge.get(Bridge.Test.Assert).areEqual$1(i.v, 3, "i 3");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge537', {
    statics: {
        testUseCase: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge537B).testB1(), 2, "Bridge537 TestB1");

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge537B).testB2(), 1, "Bridge537 TestB2");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge588C', {
    statics: {
        testUseCase2: function () {
            var c2 = new Bridge.ClientTest.BridgeIssues.Bridge588C.C2("C2 value");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(c2), "Bridge588 C2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c2.getName(), "C2 value", "Bridge588 C2.Name");

            var c1 = new Bridge.ClientTest.BridgeIssues.Bridge588C.C1(c2);
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(c1), "Bridge588 C1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c1.getValue().getName(), "C2 value", "Bridge588 C1.Value.Name");

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588C.C1).getDefault()), "Bridge588 C1.Default");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588C.C1).getDefault().getValue()), "Bridge588 C1.Default.Value");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588C.C1).getDefault().getValue().getName(), "default", "Bridge588 C1.Default.Value.Name");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588C.C2).getDefault()), "Bridge588 C2.Default");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588C.C2).getDefault().getName()), "Bridge588 C2.Default.Name");

        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge603', {
    statics: {
        testUseCase: function () {
            var c = Bridge.ClientTest.BridgeIssues.Bridge603A.op_Implicit(null);
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.value, "[Null]", "Bridge603A TestUseCase Null");

            c = Bridge.ClientTest.BridgeIssues.Bridge603A.op_Implicit("Test");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.value, "Test", "Bridge603A TestUseCase String");
        },
        testRelated: function () {
            var b = Bridge.ClientTest.BridgeIssues.Bridge603B.op_Implicit$1(12345);
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.intValue, 12345, "Bridge603B TestRelated Int");

            var c = Bridge.ClientTest.BridgeIssues.Bridge603B.op_Implicit$2(Bridge.cast(null, String));
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.value, "[Null]", "Bridge603B TestRelated String Null");

            c = Bridge.ClientTest.BridgeIssues.Bridge603B.op_Implicit$2("Test");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.value, "Test", "Bridge603B TestRelated String");

            var d = Bridge.ClientTest.BridgeIssues.Bridge603B.op_Implicit(Bridge.cast(null, Bridge.ClientTest.BridgeIssues.Bridge603Class));
            Bridge.get(Bridge.Test.Assert).areEqual$1(d.value, "[Null]", "Bridge603B TestRelated Bridge603Class Null");

            d = Bridge.ClientTest.BridgeIssues.Bridge603B.op_Implicit(Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge603Class(), {
                setData: "Test 603B"
            } ));
            Bridge.get(Bridge.Test.Assert).areEqual$1(d.value, "Test 603B", "Bridge603B TestRelated Bridge603Class");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge660', {
    statics: {
        testUseCase: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge660MessageStore)._initialEditState.getContent().getText(), "Message", "Bridge660 Initialize static members before first access to the class");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.TestBridgeIssues', {
    statics: {
        n169: function () {
            // TEST
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge169).m1();
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge169).number, 1, "M1()");

            // TEST
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge169).m2();
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge169).number, 2, "M2()");
        },
        n240: function () {
            // TEST
            var b = new Bridge.ClientTest.BridgeIssues.Bridge240B();
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(b), "Instance of B created");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getString(), "B", "b.GetString() = 'B'");
            Bridge.get(Bridge.Test.Assert).areEqual$1(b.getData(), 1, "b.Data = 1");
        },
        n264: function () {
            // TEST
            var oldHash = Bridge.global.location.hash;
            Bridge.global.location.hash = "#new-hash";
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.global.location.hash, "#new-hash", "Setting Location.Hash works");
            Bridge.global.location.hash = oldHash; // to clean up the url
        },
        n266: function () {
            // TEST
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge266A).test()), "new object() call transpiled");
        },
        n272: function () {
            // TEST
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge272).test(1), Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge272.MyEnum).abc, "Casted MyEnum.Abc");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge272).test(3), Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge272.MyEnum).ghi, "Casted MyEnum.Ghi");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge272).test(4), 4, "Casted MyEnum.Abc");
        },
        n273: function () {
            // TEST
            var items = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [0],
                [1],
                [2],
                [3],
                [4]
            ] );

            var r = items.slice(-1).toArray();
            Bridge.get(Bridge.Test.Assert).areEqual$1(r, [4], "Slices start = -1");

            r = items.slice(1).toArray();
            Bridge.get(Bridge.Test.Assert).areEqual$1(r, [1, 2, 3, 4], "Slices start = 1");

            r = items.slice(-3, 4).toArray();
            Bridge.get(Bridge.Test.Assert).areEqual$1(r, [2, 3], "Slices start = -3, end = 3");

            r = items.slice(1, 3).toArray();
            Bridge.get(Bridge.Test.Assert).areEqual$1(r, [1, 2], "Slices start = 1, end = 2");
        },
        n277: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge277).$int, 0, "Enum member with reserved name initialized");
        },
        n294: function () {
            var c = new Bridge.ClientTest.BridgeIssues.Bridge294("Vlad");

            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getName(), "Vlad", "Class method works");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getNameThroughGeneric(Bridge.Int)(), "Vlad", "Generic class method works");
        },
        n304: function () {
            var c = new Bridge.ClientTest.BridgeIssues.Bridge304();
            var i = c;

            i.f("1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getX(), "1", "Interface method works");

            c.f$1();
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getX(), "void F()", "Class method works");
        },
        n305: function () {
            var $t;
            var c = new Bridge.ClientTest.BridgeIssues.Bridge305(["1", "2", "3"]);

            var result = "";
            $t = Bridge.getEnumerator(c);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                result = result + item;
            }

            Bridge.get(Bridge.Test.Assert).areEqual$1(result, "123", "IEnumerator works");
        },
        n306: function () {
            var b = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge306B).$new(Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge306B.Props(), {
                name: "B"
            } ));
            Bridge.get(Bridge.Test.Assert).areEqual$1(b, "Bridge.ClientTest.BridgeIssues.Bridge306B.Props:B", "Bridge306B.New() works");

            var a = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge306A).$new(Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge306A.Props(), {
                name: "A"
            } ));
            Bridge.get(Bridge.Test.Assert).areEqual$1(a, "Bridge.ClientTest.BridgeIssues.Bridge306A.Props:A", "Bridge306A.New() works");
        },
        n329: function () {
            var d1 = { };
            var b1 = Bridge.Date.tryParse("2001-01-01", null, d1, true);
            Bridge.get(Bridge.Test.Assert).true$1(b1, "TryParse parsed '2001 - 01 - 01'");
            Bridge.get(Bridge.Test.Assert).areEqual$1(d1.v.getUTCFullYear(), 2001, "TryParse works Year");
            Bridge.get(Bridge.Test.Assert).areEqual$1((d1.v.getUTCMonth() + 1), 1, "TryParse works Month");
            Bridge.get(Bridge.Test.Assert).areEqual$1(d1.v.getUTCDay(), 1, "TryParse works Day");

            var d2 = Bridge.Date.parse("2001-01-01", null, true);
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Date.format(d2), Bridge.Date.format(d1.v), "TryParse And Parse give the same result");
        },
        n335: function () {
            var l = new Bridge.List$1(String)(["1", "2", "3", "1"]);
            Bridge.get(Bridge.Test.Assert).areEqual$1(l.indexOf("1", 2), 3, "IndexOf with startIndex used");
        },
        n336: function () {
            var l = new Bridge.List$1(String)(["4"]);

            l.insertRange(0, ["1", "2"]);
            Bridge.get(Bridge.Test.Assert).areEqual$1(l.toArray(), ["1", "2", "4"], "InsertRange works (1)");

            l.insertRange(2, ["3"]);
            Bridge.get(Bridge.Test.Assert).areEqual$1(l.toArray(), ["1", "2", "3", "4"], "InsertRange works (2)");
        },
        n337: function () {
            var l = new Bridge.List$1(String)(["1", "2"]);

            var b = l.remove("7");
            Bridge.get(Bridge.Test.Assert).false$1(b, "Remove() not existing element returns false");
            Bridge.get(Bridge.Test.Assert).areEqual$1(l.toArray(), ["1", "2"], "Remove() not existing does not change the List");

            b = l.remove("2");
            Bridge.get(Bridge.Test.Assert).true$1(b, "Remove() existing element returns true");
            Bridge.get(Bridge.Test.Assert).areEqual$1(l.toArray(), ["1"], "Remove() not existing changes the List");
        },
        n338: function () {
            var l = new Bridge.List$1(String)(1000);

            var b = Bridge.is(l, Bridge.IList$1(String));

            Bridge.get(Bridge.Test.Assert).true$1(b, "List<T> declares it implemets IList<T>");
        },
        n339: function () {
            var c = new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn);

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(c), "Comparer<int>.Default works");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(c, Bridge.IComparer$1(Bridge.Int)), "Comparer<T> declares it implemets IComparer<T>");
        },
        n340: function () {
            var c = new Bridge.EqualityComparer$1(Bridge.Int)();

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(c), "EqualityComparer<int>.Default works");
            Bridge.get(Bridge.Test.Assert).true$1(c.equals(10, 10), "EqualityComparer<int>.Default.Equals(10, 10) works");
            Bridge.get(Bridge.Test.Assert).false$1(c.equals(10, 11), "EqualityComparer<int>.Default.Equals(10, 11) works");

            var s = new Bridge.EqualityComparer$1(String)();
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(s), "EqualityComparer<string>.Default works");
            Bridge.get(Bridge.Test.Assert).true$1(s.equals("a", "a"), "EqualityComparer<string>.Default.Equals(\"a\", \"a\") works");
            Bridge.get(Bridge.Test.Assert).false$1(s.equals("a", "b"), "EqualityComparer<string>.Default.Equals(\"a\", \"b\") works");
        },
        n341: function () {
            var o11 = { };
            var o12 = { };
            var b1 = new Bridge.EqualityComparer$1(Object)().equals(o11, o12);
            Bridge.get(Bridge.Test.Assert).false$1(b1, "EqualityComparer<object>.Default.Equals(o11, o12) works");

            var o21 = { i: 7 };
            var o22 = { i: 7 };
            var b2 = new Bridge.EqualityComparer$1(Object)().equals(o21, o22);
            Bridge.get(Bridge.Test.Assert).true$1(b2, "EqualityComparer<object>.Default.Equals(o21, o22) works");

            var o31 = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge341A(), {
                setStr: "String"
            } );
            var o32 = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge341A(), {
                setStr: "String"
            } );
            var b3 = new Bridge.EqualityComparer$1(Object)().equals(o31, o32);
            Bridge.get(Bridge.Test.Assert).false$1(b3, "EqualityComparer<object>.Default.Equals(o31, o32) works");

            var o41 = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge341B(), {
                setStr: "String"
            } );
            var o42 = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge341B(), {
                setStr: "String"
            } );
            var b4 = new Bridge.EqualityComparer$1(Object)().equals(o41, o42);
            Bridge.get(Bridge.Test.Assert).true$1(b4, "EqualityComparer<object>.Default.Equals(o41, o42) works");
        },
        n342: function () {
            var dictionary = new Bridge.ClientTest.BridgeIssues.Bridge342("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
                [3, "b"],
                [6, "z"],
                [9, "x"]
            ] ));

            var interfacedDictionary = Bridge.cast(dictionary, Bridge.IDictionary$2(Bridge.Int,String));

            Bridge.get(Bridge.Test.Assert).areEqual$1(interfacedDictionary.getItem(6), "z", "IDictionary getter works");
            Bridge.get(Bridge.Test.Assert).throws$5(function () {
                var r = interfacedDictionary.getItem(1);
            }, "IDictionary getter throws exception when incorrect key used");
        },
        n349: function () {
            var date = { };
            var culture = new Bridge.CultureInfo("ru-RU");

            Bridge.get(Bridge.Test.Assert).true$1(Bridge.hasValue(culture), "Created CultureInfo(\"ru-RU\")");

            var parsed = Bridge.Date.tryParse("22.08.2015", culture, date);
            Bridge.get(Bridge.Test.Assert).true$1(parsed, "Parsed \"22.08.2015\"");
            Bridge.get(Bridge.Test.Assert).areEqual$1(date.v.getFullYear(), 2015, "TryParse works Year");
            Bridge.get(Bridge.Test.Assert).areEqual$1((date.v.getMonth() + 1), 8, "TryParse works Month");
            Bridge.get(Bridge.Test.Assert).areEqual$1(date.v.getDate(), 22, "TryParse works Day");
        },
        n377: function () {
            var objectLiteralInstance = { field1: "field1 value", field3: 7 };

            Bridge.get(Bridge.Test.Assert).areEqual$1(objectLiteralInstance.hasOwnProperty("field1"), true, "ObjectLiteral's field with an explicit value is emitted");
            Bridge.get(Bridge.Test.Assert).areEqual$1(objectLiteralInstance.field1, "field1 value", "ObjectLiteral's field with an explicit value is emitted correctly");

            Bridge.get(Bridge.Test.Assert).areEqual$1(objectLiteralInstance.hasOwnProperty("field3"), true, "ObjectLiteral's field with an explicit value is emitted");
            Bridge.get(Bridge.Test.Assert).areEqual$1(objectLiteralInstance.field3, 7, "ObjectLiteral's field with an explicit value is emitted correctly");

            Bridge.get(Bridge.Test.Assert).areEqual$1(objectLiteralInstance.hasOwnProperty("field2"), false, "ObjectLiteral's field without an explicit value is not emitted");
            Bridge.get(Bridge.Test.Assert).areEqual$1(objectLiteralInstance.hasOwnProperty("field4"), false, "ObjectLiteral's field without an explicit value is not emitted");
        },
        n383: function () {
            var person1 = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Person383(), {
                setName: "Johnny"
            } );
            var msg1 = Bridge.ClientTest.BridgeIssues.Bridge383.doSomething(person1);

            Bridge.get(Bridge.Test.Assert).areEqual$1(msg1, "Johnny", "Instance extention Johnny");

            var person2 = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Person383(), {
                setName: "Madison"
            } );
            var msg2 = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge383).doSomething(person2);

            Bridge.get(Bridge.Test.Assert).areEqual$1(msg2, "Madison", "Static extention Madison");
        },
        n393: function () {
            var a = "testa";
            var b = "testa";

            var result = Bridge.String.equals(a, b, 3);

            Bridge.get(Bridge.Test.Assert).true$1(result, "testa testa StringComparison.InvariantCultureIgnoreCase");

            var a1 = "testa";
            var b1 = "testb";

            var result1 = Bridge.String.equals(a1, b1, 3);

            Bridge.get(Bridge.Test.Assert).false$1(result1, "testa testb StringComparison.InvariantCultureIgnoreCase");
        },
        n395: function () {
            var $t;
            var _dictOfTests = new Bridge.Dictionary$2(String,Bridge.ClientTest.BridgeIssues.Bridge395)();

            var tests = [Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge395(), {
                setId: "a"
            } ), Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge395(), {
                setId: "b"
            } )];

            $t = Bridge.getEnumerator(tests);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                if (!_dictOfTests.containsKey(item.getId())) {
                    _dictOfTests.set(item.getId(), item);
                }
            }

            Bridge.get(Bridge.Test.Assert).areEqual$1(_dictOfTests.getCount(), 2, "All items added");
            Bridge.get(Bridge.Test.Assert).areEqual$1(_dictOfTests.get("a").getId(), "a", "First element is a");
            Bridge.get(Bridge.Test.Assert).areEqual$1(_dictOfTests.get("b").getId(), "b", "Second element is b");
        },
        n406: function () {
            var TESTA = "TESTA";
            var TESTB = "TESTB";
            var TESTC = "TESTC";
            var TESTD = "TESTD";
            var TESTE = "TESTE";
            var TESTF = "TESTF";
            var TESTG = "TESTG";

            var test = TESTD;
            var result = null;
            switch (test) {
                case TESTA: 
                    result = TESTA;
                    break;
                case TESTB: 
                    result = TESTB;
                    break;
                case TESTC: 
                    result = TESTC;
                    break;
                case TESTD: 
                    result = TESTD;
                    break;
                case TESTE: 
                    result = TESTE;
                    break;
                case TESTF: 
                    result = TESTF;
                    break;
                case TESTG: 
                    result = TESTG;
                    break;
            }

            Bridge.get(Bridge.Test.Assert).areEqual$1(result, "TESTD", "TESTD");
        },
        n407: function () {
            var vec = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge407(), {
                setA: 1
            } );
            vec = Bridge.ClientTest.BridgeIssues.Bridge407.op_Addition(vec.$clone(), Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge407(), {
                setA: 2
            } ));

            Bridge.get(Bridge.Test.Assert).areEqual$1(vec.getA(), 3, "Vec.A = 3");

            var a = 2;
            a += 5;
            Bridge.get(Bridge.Test.Assert).areEqual$1(a, 7, "a = 7");
        },
        n409: function () {
            var a = Bridge.Decimal.round(Bridge.Decimal(3.5), 6);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(a, "4", "Math.Round(3.5M)");

            var b = Bridge.Decimal.round(Bridge.Decimal(4.5), 6);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(b, "4", "Math.Round(4.5M)");
        },
        ensureNumber: function (actual, expected, message) {
            Bridge.get(Bridge.Test.Assert).areEqual$1(actual.toString(), expected, message);
        },
        assertAlmostEqual: function (actual, expected, message) {
            var diff = expected - actual;
            if (diff < 0) {
                diff = -diff;
            }

            Bridge.get(Bridge.Test.Assert).true$1(diff < 1E-08, message + "actual: " + actual + "expeted:" + expected);
        },
        n410: function () {
            // Decimal consts
            var DecimalZero = Bridge.Decimal.Zero;
            var DecimalOne = Bridge.Decimal.One;
            var DecimalMinusOne = Bridge.Decimal.MinusOne;
            var DecimalMaxValue = Bridge.Decimal.MaxValue;
            var DecimalMinValue = Bridge.Decimal.MinValue;

            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DecimalZero, "0", "DecimalZero");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DecimalOne, "1", "DecimalOne");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DecimalMinusOne, "-1", "DecimalMinusOne");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DecimalMaxValue, "7.9228162514264337593543950335e+28", "DecimalMaxValue");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DecimalMinValue, "-7.9228162514264337593543950335e+28", "DecimalMinValue");

            // Decimal consts in expressions
            DecimalZero  = Bridge.Decimal.Zero.add(Bridge.Decimal(0));
            DecimalOne  = Bridge.Decimal.One.add(Bridge.Decimal(0));
            ;
            DecimalMinusOne  = Bridge.Decimal.MinusOne.add(Bridge.Decimal(0));
            ;
            DecimalMaxValue  = Bridge.Decimal.MaxValue.add(Bridge.Decimal(0));
            ;
            DecimalMinValue  = Bridge.Decimal.MinValue.add(Bridge.Decimal(0));
            ;

            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DecimalZero, "0", "DecimalZeroin expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DecimalOne, "1", "DecimalOnein expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DecimalMinusOne, "-1", "DecimalMinusOnein expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DecimalMaxValue, "7.9228162514264337593543950335e+28", "DecimalMaxValuein expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DecimalMinValue, "-7.9228162514264337593543950335e+28", "DecimalMinValuein expression");

            // Double consts
            var DoubleMaxValue = Number.MAX_VALUE;
            var DoubleMinValue = Number.MIN_VALUE;
            var DoubleEpsilon = 4.94065645841247E-324;
            var DoubleNegativeInfinity = Number.NEGATIVE_INFINITY;
            var DoublePositiveInfinity = Number.POSITIVE_INFINITY;
            var DoubleNaN = Number.NaN;

            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DoubleMaxValue, "1.7976931348623157e+308", "DoubleMaxValue");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DoubleMinValue, "5e-324", "DoubleMinValue");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DoubleEpsilon, "5e-324", "DoubleEpsilon");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DoubleNegativeInfinity, "-Infinity", "DoubleNegativeInfinity");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DoublePositiveInfinity, "Infinity", "DoublePositiveInfinity");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DoubleNaN, "NaN", "DoubleNaN");

            // Double consts in expressions
            DoubleMaxValue = Number.MAX_VALUE + 0;
            DoubleMinValue = Number.MIN_VALUE + 0;
            DoubleEpsilon = 4.94065645841247E-324;
            DoubleNegativeInfinity = Number.NEGATIVE_INFINITY + 0;
            DoublePositiveInfinity = Number.POSITIVE_INFINITY + 0;
            DoubleNaN = Number.NaN + 0;

            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DoubleMaxValue, "1.7976931348623157e+308", "DoubleMaxValuein expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DoubleMinValue, "5e-324", "DoubleMinValuein expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DoubleEpsilon, "5e-324", "DoubleEpsilonin expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DoubleNegativeInfinity, "-Infinity", "DoubleNegativeInfinityin expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DoublePositiveInfinity, "Infinity", "DoublePositiveInfinityin expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(DoubleNaN, "NaN", "DoubleNaNin expression");

            // Math consts
            var MathE = Math.E;
            var MathLN10 = Math.LN10;
            var MathLN2 = Math.LN2;
            var MathLOG2E = Math.LOG2E;
            var MathLOG10E = Math.LOG10E;
            var MathPI = Math.PI;
            var MathSQRT1_2 = Math.SQRT1_2;
            var MathSQRT2 = Math.SQRT2;

            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(MathE, "2.718281828459045", "MathE");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(MathLN10, "2.302585092994046", "MathLN10");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(MathLN2, "0.6931471805599453", "MathLN2");
            //IE has Math.LOG2E defined as 1.4426950408889633 instead of standard 1.4426950408889634
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).assertAlmostEqual(MathLOG2E, 1.4426950408889634, "MathLOG2E");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(MathLOG10E, "0.4342944819032518", "MathLOG10E");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(MathPI, "3.141592653589793", "MathPI");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(MathSQRT1_2, "0.7071067811865476", "MathSQRT1_2");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(MathSQRT2, "1.4142135623730951", "MathSQRT2");

            // Math consts in expression
            MathE = Math.E + 0;
            MathLN10 = Math.LN10 + 0;
            MathLN2 = Math.LN2 + 0;
            MathLOG2E = Math.LOG2E + 0;
            MathLOG10E = Math.LOG10E + 0;
            MathPI = Math.PI + 0;
            MathSQRT1_2 = Math.SQRT1_2 + 0;
            MathSQRT2 = Math.SQRT2 + 0;

            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(MathE, "2.718281828459045", "MathEin expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(MathLN10, "2.302585092994046", "MathLN10in expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(MathLN2, "0.6931471805599453", "MathLN2in expression");
            //IE has Math.LOG2E defined as 1.4426950408889633 instead of standard 1.4426950408889634
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).assertAlmostEqual(MathLOG2E, 1.4426950408889634, "MathLOG2Ein expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(MathLOG10E, "0.4342944819032518", "MathLOG10Ein expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(MathPI, "3.141592653589793", "MathPIin expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(MathSQRT1_2, "0.7071067811865476", "MathSQRT1_2in expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(MathSQRT2, "1.4142135623730951", "MathSQRT2in expression");

            // Single consts
            var SingleMaxValue = 3.40282347E+38;
            var SingleMinValue = -3.40282347E+38;
            var SingleEpsilon = 1.401298E-45;
            var SingleNaN = Number.NaN;
            var SingleNegativeInfinity = Number.NEGATIVE_INFINITY;
            var SinglePositiveInfinity = Number.POSITIVE_INFINITY;

            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(SingleMaxValue, "3.40282347e+38", "SingleMaxValue");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(SingleMinValue, "-3.40282347e+38", "SingleMinValue");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(SingleEpsilon, "1.401298e-45", "SingleEpsilon");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(SingleNaN, "NaN", "SingleNaN");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(SingleNegativeInfinity, "-Infinity", "SingleNegativeInfinity");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(SinglePositiveInfinity, "Infinity", "SinglePositiveInfinity");

            // Single consts in expression
            SingleMaxValue = 3.40282347E+38;
            SingleMinValue = -3.40282347E+38;
            SingleEpsilon = 1.401298E-45;
            SingleNaN = Number.NaN + 0;
            SingleNegativeInfinity = Number.NEGATIVE_INFINITY + 0;
            SinglePositiveInfinity = Number.POSITIVE_INFINITY + 0;

            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(SingleMaxValue, "3.40282347e+38", "SingleMaxValuein expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(SingleMinValue, "-3.40282347e+38", "SingleMinValuein expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(SingleEpsilon, "1.401298e-45", "SingleEpsilonin expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(SingleNaN, "NaN", "SingleNaNin expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(SingleNegativeInfinity, "-Infinity", "SingleNegativeInfinityin expression");
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(SinglePositiveInfinity, "Infinity", "SinglePositiveInfinityin expression");
        },
        n418: function () {
            var t = new Bridge.ClientTest.BridgeIssues.Bridge418();
            t.setDelegate(Bridge.fn.combine(t.getDelegate(), function (i) {
                return i * 2;
            }));
            var r = t.callDelegate(10);

            Bridge.get(Bridge.Test.Assert).areEqual$1(r, 20, "Delegate added and called var r = t.CallDelegate(10);");
        },
        n422: function () {
            var v0 = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge422).first;
            var v100 = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge422).next;
            var v101 = Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge422).afterNext;

            Bridge.get(Bridge.Test.Assert).areEqual$1(v0, 0, "Bridge422.first");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v100, 100, "Bridge422.next");
            Bridge.get(Bridge.Test.Assert).areEqual$1(v101, 101, "Bridge422.afterNext");
        },
        n428: function () {
            var number2 = Bridge.Decimal(11.37);
            var sum = "0.13 + " + number2;

            Bridge.get(Bridge.Test.Assert).areEqual$1(sum, "0.13 + 11.37", "0.13 + 11.37");
        },
        n435: function () {
            var i = 0;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Int.format(i, "E"), "0E+000", "i.Format(\"E\")");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Int.format(i, "a"), "a", "Test custom formatting in \"use strict\" mode");
        },
        n436: function () {
            var b1 = new Bridge.ClientTest.BridgeIssues.Bridge436First();
            Bridge.get(Bridge.Test.Assert).areEqual$1(b1.toObject(), "1", "Bridge436First.ToObject()");

            var b2 = new Bridge.ClientTest.BridgeIssues.Bridge436Second();
            Bridge.get(Bridge.Test.Assert).areEqual$1(b2.toObject(), "12", "Bridge436Second.ToObject()");

            var b3 = new Bridge.ClientTest.BridgeIssues.Bridge436Third();
            Bridge.get(Bridge.Test.Assert).areEqual$1(b3.toObject(), "123", "Bridge436Third.ToObject()");
        },
        n438: function () {
            var magic = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [0],
                [1],
                [2],
                [3],
                [4]
            ] );
            var epic = magic.getRange(0, 3);
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(Bridge.getType(epic)), "Bridge.List$1$Bridge.Int", "epic.GetType().GetClassName()");
        },
        n439: function () {
            var b = new Bridge.ClientTest.BridgeIssues.Bridge439();
            var accumulator = "";
            b.register(function (s) {
                accumulator = accumulator + s;
            });

            b.callDispatcher("1");
            Bridge.get(Bridge.Test.Assert).areEqual$1(accumulator, "1", "accumulator 1");

            b.callDispatcher("2");
            Bridge.get(Bridge.Test.Assert).areEqual$1(accumulator, "12", "accumulator 12");
        },
        n442: function () {
            var a = Bridge.Decimal(3.5);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(a.round(), "4", "a.Round(3.5M)");

            var b = Bridge.Decimal(4.5);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).ensureNumber(b.round(), "4", "b.Round(4.5M)");
        },
        n460: function () {
            var number;

            number = -12345.6789;
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Int.format(number, "G", Bridge.get(Bridge.CultureInfo).invariantCulture), "-12345.6789", "ToString(\"G\") for negative numbers in InvariantCulture");
        },
        n467: function () {
            var a = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge467(), {
                setMyProperty: -1
            } );

            var b = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge467(), {
                setMyProperty: -1
            } );

            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getHashCode(), b.getHashCode(), "Call to base.GetHashCode() causes compilation to fail");
        },
        n469: function () {
            var $t;
            var testList = new Bridge.List$1(Bridge.Int)();
            testList.add(5);

            var count = 0;

            for (var i = 0; i < 10; i++) {
                var $t = (function () {
                    if (!Bridge.Linq.Enumerable.from(testList).any(function (x) {
                        return x === i;
                    })) {
                        return {jump:1};
                    }

                    count++;
                }).call(this) || {};
                if($t.jump == 1) continue;
            }

            Bridge.get(Bridge.Test.Assert).areEqual$1(count, 1, "\"continue\" generated correctly");
        },
        n470: function () {
            var a = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge470(), {
                setData: 1
            } );
            var b = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge470(), {
                setData: 2
            } );
            var c = Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge470(), {
                setData: 3
            } );

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.equals(a, b), false, "a.Equals(b)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.equals(a, Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge470(), {
                setData: 1
            } )), true, "a.Equals(new Bridge470 { Data = 1 })");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.equals(a, null), false, "a.Equals(null)");

            Bridge.get(Bridge.Test.Assert).areEqual$1(a.equals(b, b), true, "a.Equals(b, b)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.equals(a, Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge470(), {
                setData: 1
            } )), true, "a.Equals(a, new Bridge470 { Data = 1 })");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.equals(a, Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge470(), {
                setData: 2
            } )), false, "a.Equals(a, new Bridge470 { Data = 2 })");
            Bridge.get(Bridge.Test.Assert).areEqual$1(a.equals(Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge470(), {
                setData: 5
            } ), Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge470(), {
                setData: 5
            } )), true, "new Bridge470 { Data = 5 }, new Bridge470 { Data = 5 }");

            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getHashCode(a), 1, "a.GetHashCode()");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getHashCode(c), 3, "c.GetHashCode()");

            Bridge.get(Bridge.Test.Assert).areEqual$1(a.getHashCode(b), 2, "a.GetHashCode(b)");
            Bridge.get(Bridge.Test.Assert).areEqual$1(c.getHashCode(c), 3, "c.GetHashCode(c)");

            var test1 = new Bridge.List$1(Bridge.ClientTest.BridgeIssues.Bridge470)();
            test1.add(a);
            test1.add(b);
            test1.add(c);

            var comparer = new Bridge.ClientTest.BridgeIssues.Bridge470();

            // EqualityComparer's methods do not handle null values intentionally
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Linq.Enumerable.from(test1).contains(a, comparer), true, "test1 Contains a");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Linq.Enumerable.from(test1).contains(b, comparer), true, "test1 Contains b");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Linq.Enumerable.from(test1).contains(c, comparer), true, "test1 Contains c");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Linq.Enumerable.from(test1).contains(Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge470(), {
                setData: 4
            } ), comparer), false, "test1 Contains 4");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Linq.Enumerable.from(test1).contains(Bridge.merge(new Bridge.ClientTest.BridgeIssues.Bridge470(), {
                setData: 5
            } ), comparer), false, "test1 Contains 5");
        },
        n499: function () {
            var v1 = new Bridge.Version("constructor");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.getTypeName(v1), "Bridge.Version", "#499 Version type name");
        }
    }
});

Bridge.define('Bridge.ClientTest.BridgeIssues.Bridge588', {
    statics: {
        testUseCase1: function () {
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588A).valeur3, 3, "Bridge588 TestUseCase");
            Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588C.C1).getDefault().getValue().getName(), "default", "Bridge588_2 TestUseCase");
        }
    }
});

Bridge.init();