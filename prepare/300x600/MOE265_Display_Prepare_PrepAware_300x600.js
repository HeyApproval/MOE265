(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"MOE265_Display_Prepare_PrepAware_300x600_atlas_P_1", frames: [[0,0,1250,1043],[302,1045,100,47],[404,1045,100,34],[0,1045,300,169]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BkgdPrepare_300x250_DisplayPrepare = function() {
	this.initialize(ss["MOE265_Display_Prepare_PrepAware_300x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Cloud1 = function() {
	this.initialize(ss["MOE265_Display_Prepare_PrepAware_300x600_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Cloud2 = function() {
	this.initialize(ss["MOE265_Display_Prepare_PrepAware_300x600_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Sidewalk = function() {
	this.initialize(ss["MOE265_Display_Prepare_PrepAware_300x600_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.MOE_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// break apart
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACDFIgHgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBgBIgMgZIgGABIgEAUQAAACAGACQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIgaAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQADgBACgIQAEgYAEgPIACgJQAAAAAAgBQAAAAgBgBQAAAAgBAAQgBAAgBAAQgFAAAAgCQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAiAAQARAAAAANQAAAHgIAHQgFAFgIADIALAWQAEAHAEABIAFACQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAgAgTCHIgCAEIgFAbQALgBAHgHQAIgGAAgIQAAgKgNAAQgFAAgBABgAEbC+QgIgHAAgNQAAgSATgMQARgLATAAQAEAAAAADIgBAKQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIAAgFQAAgEgFAAQgMAAgNAMQgLAJAAAQQAAALAGAHQAFAGAIAAQAMAAAEgLIADgEIABABIAAACIgBALQgBAEgVAAQgNAAgIgHgADZDEIgCgDIgngxIgJAuQAAABAAAAQAAAAABABQAAAAABAAQAAABABAAQAFAAAAACQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgRAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQAFAAABgFIALg0QAAgCgIAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgCAGAAIAKAAQADAAACADIAjAtIAFgrQAAgCgGAAQgFAAAAgCQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAMABIAHgBQAAAAABAAQABAAAAABQAAAAABAAQAAAAAAABQAAABgGABQgCAAgCAIIgHA1QAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgCgBgAiZC0QAAgFACgGIAJgcIAAgEQAAgCgEgBQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAABAAIAZAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgBABgBAAQgEABgBAEIgJAhQgCAEAAAFQAAAMAOAAQAMAAAGgHQADgEADgLIAHgbIABgHQAAgDgGAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAGABIAKgBQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQgBABAAAAQgDABgDAIIgIAfQgDANgHAFQgGAFgNAAQgZAAAAgRgAj0DBIABgLQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQABAAAAAIQAAAHAMAAQANAAAAgMQAAgGgKgLQgJgLAAgHQAAgIAGgGQAGgEAIAAIAKABQAGACABABIABAMQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgCgFQgDgJgLAAQgKAAAAAKQAAADAKAMQAJAMAAAJQAAAJgHAFQgHAFgLAAQgOAAAAgEgAkpDEIgCgDIgogxIgJAuQAAABAAAAQABAAAAABQABAAAAAAQABABABAAQAFAAAAACQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAIgSAAIgBgBQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAEAAABgFIALg0QAAgCgIAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgCAFAAIAKAAQADAAACADIAjAtIAFgrQAAgCgFAAQgFAAAAgCQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAMABIAGgBQABAAABAAQAAAAABABQAAAAAAAAQAAAAAAABQAAABgGABQgCAAgBAIIgIA1QAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBgAF3DEQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAEgBABgJIALguQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgGgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAuAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAADIgBAHQAAABAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgGgCgBQgDgCgHAAIgHAAQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIgGAVIAAACIAFAAQALAAADgBQACgBACgFQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIgEATQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgEQAAgEgHgBIgLgBIgCABIgGAaQAAADAFAAIAFAAQANAAAFgDQADgCADgGIACgBQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIgCAMQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAgABZDEIgBgBQAAgBAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQAHgCAAgCIgBgEIgCgRIgTAAIgHAKQgHAKAAACQAAABAFABQABABABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgUAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIACgCQAEgBAEgFIAggvQAIgMACAAQABAAABAGIAEAdIAEAZQABAEADABQAFACAAABIgCABgABMCkIARAAIgDgVIgBAAgAmvDEIgCgBQAAgBAAAAQABAAAAAAQAAgBABAAQABAAAAAAQADgBABgEIAMgxIABgEQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgFgBAAgBQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIAXAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQgCAAgCAHIgKArIgBAGQAAABAAAAQABABAAAAQAAAAABABQABAAAAAAQAGAAAAACIgCABgABbBAQgVgUAAgeQAAgfAVgUQAVgVAhAAQAZAAAQAHQAOAHAAAIQAAAagFAAQgCAAgLgUQgLgVgZAAQgYAAgNATQgNARAAAaQAAAgANARQANASAZAAQAUAAAQgUQAJgJAGgKQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAAQQAAAKgQAIQgRAJgUAAQglAAgVgVgAmLAnIAAhCQAAgNgEgFQgEgEgPgCIAAgHIBPAAIAAAHQgSABgGAEQgFADAAAKIAABDQAAAWAKAJQAKAJAXAAQAvAAAAgsIAAg2QAAgQgGgFQgFgFgRgBIAAgHIA5AAIAAAHQgLABgFAGQgFAGAAAMIAAA7QAAAZgRAOQgQANgeAAQg+AAAAgugALbBJIgfhSIgoBSIgDAHQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBgBAAAAIgEgIIgwhuQgDgHgEgDQgEgDgIgBIAAgHIBDAAIAAAHQgUACAAAHQAAAIAIARIAcBCIAghHQgFgRgFgGQgFgFgKgBIAAgHIBGAAIAAAHQgOABgFADQgFADAAAGQAAAFAIASIAaBCIAag8QAJgUAAgIQAAgKgUgEIAAgHIA1AAIAAAJQgHABgFAEQgEAEgFAJIgvBoIgEAHQgCADgDAAQgFAAgEgKgAH3BSIAAgHQAQgBAAgIIgFgOIgJgaIgwAAIgIAYQgFANAAADQAAAJAOAAIAAAHIgqAAIAAgHQAOAAAFgOIAghPIANgdQAHgOAFAAQADAAACAFIAEALIAjBZQAHAUAFAFQAFAGAKAAIAAAHgAHNATIAqAAIgUg5IgBAAgAD5BSIAAgHQATgBAAgPIAAhiQAAgGgEgDQgDgCgMgBIAAgHIBBAAIAAAHQgMABgEADQgEACAAAGIAABeQAAALAFAEQAFADAQAAQAjAAANgPIANgPQADAAAAAEIgBAFIgHAegAg7BSIAAgHQATgBAGgFQAGgFAAgPIAAhVIgBAAIg5BpQgHALgCAAQgCAAgGgLIg5hpIgBAAIAABeQAAAIAFADQAGAEAPACIAAAHIhDAAIAAgHQATgDAGgFQAGgHAAgSIAAhHQAAgNgFgEQgFgEgQgBIAAgHIA2AAIA4BsIA7hsIAyAAIAAAHQgRABgFAGQgFAFAAARIAABOQAAAMAFADQAEADASABIAAAHgAn1BSIgJgKIg0g4QgiglgFgJIgBAAIAABYQAAAPAVACIAAAHIg0AAIAAgHQAMgBAEgEQAEgEAAgLIAAhUQAAgNgEgEQgFgEgPgCIAAgHQAWAAAUABQASAXAdAfIAyAyIAAg8QAAgYgEgGQgEgGgRgBIAAgHIA5AAIAAAHQgPABgFAFQgFAEAAAOIAABtgAswBSIAAgHQAQgBAFgCQAFgCAAgFIAAhmQAAgIgEgDQgFgCgRgBIAAgHIB1AAIAGAbIgGAAQgGgKgIgEQgKgGgTAAQgMAAgFADQgEACAAAGIAAAoQAAAHAHAAIATAAQAOAAAEgUIAIAAIAAAtIgIAAQgDgSgPAAIgSAAQgIAAAAAKIAAAoQAAAFADADQAEADAEAAIARAAQASAAALgGQALgHAHgPIAIAAIgHAjgAEJh+QgMgMAAgRQAAgSAMgMQANgMATAAQAUAAAMAMQAMAMAAASQAAARgLAMQgNANgUAAQgTAAgNgNgAESixQgJAIAAAOQAAANAJAJQAJAJAOAAQAOAAAJgJQAJgJAAgNQAAgOgJgIQgJgJgOAAQgOAAgJAJgAhTh5QgKgIAAgQIAAgzIAMAAIAAAwQAAAMAEAFQAHAHALAAQAOAAAFgHQAFgFAAgMIAAgwIAMAAIAAAyQAAAPgJAJQgJAJgSAAQgOAAgKgIgAkgh5QgKgIAAgQIAAgzIAMAAIAAAwQAAAMAEAFQAHAHALAAQAOAAAFgHQAFgFAAgMIAAgwIAMAAIAAAyQAAAPgJAJQgJAJgSAAQgOAAgKgIgAF8hyIAAhSIArAAIAAALIggAAIAAAWIAgAAIAAALIggAAIAAAmgAB1hyIAAhSIAMAAIAABHIAlAAIAAALgABIhyIgLgYIgiAAIgLAYIgMAAIAjhTIAJAAIAkBTgAAfiVIAZAAIgNgegAimhyIAAhHIgdAAIAAgLIBFAAIAAALIgdAAIAABHgAlehyIAAhAIAAAAIgZAgIgCAAIgZggIAABAIgMAAIAAhSIALAAIAbAhIAbghIALAAIAABSg");
	this.shape.setTransform(-99.875,-48.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// FlashAICB
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.3,0,1).p("AgBBiIAAgrIEWAAQgCgUgHgiQgJgogCgPIkCAAIAAguID9AAQgDhCAeguQhGAXgrgCQhegDhIhVQhHBVhfADQgqAChGgXQAqBAgYB9QgOBHgCAXQgDA0ARAlQAQAjApANQAYAIA3AEQA2ADAXAIQAlANAMAkQAMgkAmgNQAWgIA3gDQA3gEAZgIQAogNASgjQANgbABgig");
	this.shape_1.setTransform(-99.725,-107.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxDnQgXgIg2gDQg3gEgYgIQgpgNgQgjQgRglADg0QACgXAOhHQAYh9gqhAQBGAXAqgCQBfgDBHhVQBIBVBeADQArACBGgXQgeAuADBCIj9AAIAAAuIECAAIALA3QAHAiACAUIkWAAIAAArIEYABQgBAigNAbQgSAjgoANQgZAIg3AEQg3ADgWAIQgmANgMAkQgMgkglgNg");
	this.shape_2.setTransform(-99.725,-107.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVApIAAhRIArAAIAAALIgfAAIAAAWIAfAAIAAAKIgfAAIAAAmg");
	this.shape_3.setTransform(-59.725,-64.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAdQgMgMAAgRQAAgQAMgMQANgNASAAQAUAAAMANQAMAMAAAQQAAASgMALQgNANgTAAQgTAAgMgNgAgWgVQgJAJAAAMQAAAOAJAIQAJAJANAAQANAAAKgJQAJgIAAgOQAAgMgJgJQgKgJgNAAQgNAAgJAJg");
	this.shape_4.setTransform(-70.15,-64.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXApIAAhRIALAAIAABGIAkAAIAAALg");
	this.shape_5.setTransform(-85.75,-64.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcApIgLgYIghAAIgLAYIgMAAIAjhRIAHAAIAlBRgAgMAHIAYAAIgMgdg");
	this.shape_6.setTransform(-95.45,-64.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAiQgKgJAAgPIAAgyIAMAAIAAAvQAAAMAEAEQAHAIALAAQANgBAFgGQAFgFAAgNIAAguIAMAAIAAAwQAAAQgJAIQgJAKgRgBQgOAAgKgHg");
	this.shape_7.setTransform(-105.775,-64.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFApIAAhGIgcAAIAAgLIBDAAIAAALIgcAAIAABGg");
	this.shape_8.setTransform(-116.025,-64.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAiQgKgJAAgPIAAgyIAMAAIAAAvQAAAMAEAEQAHAIALAAQANgBAFgGQAFgFAAgNIAAguIAMAAIAAAwQAAAQgJAIQgJAKgRgBQgOAAgKgHg");
	this.shape_9.setTransform(-126.275,-64.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaApIAAg/IAAAAIgZAfIgBAAIgZgfIAAA/IgMAAIAAhRIALAAIAaAhIAbghIALAAIAABRg");
	this.shape_10.setTransform(-137.6,-64.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAhA9IgfhSIgnBSIgDAHQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAIgEgIIgwhuQgDgHgEgEQgEgCgIgBIAAgHIBDAAIAAAHQgUACAAAHQAAAHAIASIAcBBIAghGQgFgSgFgFQgFgFgKgBIAAgHIBFAAIAAAHQgOABgFACQgFAEAAAFQAAAGAIASIAaBCIAag8QAJgVAAgHQAAgKgUgEIAAgHIA1AAIAAAIQgHABgFAFQgEADgFAKIgvBoIgEAHQgCADgDAAQgFAAgEgKg");
	this.shape_11.setTransform(-30.075,-47.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOBIIAAgIQAQAAAAgJIgFgNIgKgaIguAAIgJAYQgEANAAACQAAAKAOgBIAAAIIgqAAIAAgIQANABAGgOIAghPIAMgdQAHgOAFAAQACAAACAFIAFALIAiBZQAIAUAFAFQAFAFAJAAIAAAIgAgcAJIApAAIgTg5IAAAAg");
	this.shape_12.setTransform(-50.925,-47.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhDBGIAAgHQAUgBAAgOIAAhjQAAgGgEgCQgEgDgMAAIAAgHIBCAAIAAAHQgMAAgEADQgEADAAAFIAABeQAAALAFAEQAFADAPAAQAiAAAOgOIAMgQQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAFIgHAeg");
	this.shape_13.setTransform(-68.25,-47.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsAzQgVgUAAgeQAAgfAVgUQAVgVAgAAQAZAAAQAHQAOAHAAAIQAAAagFAAQgCAAgLgUQgLgVgZAAQgXAAgNATQgNARAAAbQAAAfANARQANASAYAAQAUAAAQgUQAJgJAGgKQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAAQQAAAKgQAIQgRAJgUAAQgkAAgVgVg");
	this.shape_14.setTransform(-86.275,-47.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAeBGIAAgHQATgBAGgFQAGgEAAgQIAAhVIgBAAIg5BpQgFALgCAAQgDAAgGgLIg5hpIgBAAIAABeQABAIAFADQAFAEAPACIAAAHIhCAAIAAgHQASgCAGgGQAGgGAAgTIAAhHQAAgMgFgFQgFgDgQgBIAAgHIA2AAIA4BsIA6hsIA0AAIAAAHQgRAAgGAGQgGAGAAARIAABOQAAALAFADQAFADATABIAAAHg");
	this.shape_15.setTransform(-108.9,-47.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag9AaIAAhCQAAgNgDgFQgFgEgOgCIAAgHIBPAAIAAAHQgTABgFAEQgGADAAAKIAABDQAAAWAKAJQAKAJAWAAQAvAAAAgsIAAg2QAAgQgGgFQgFgFgRgBIAAgHIA6AAIAAAHQgMABgFAGQgEAGgBAMIAAA7QABAZgSAOQgQANgeAAQg8AAgBgug");
	this.shape_16.setTransform(-133.3,-47.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAyBHIgIgKIgzg4QgjglgEgJIgBAAIAABYQAAAPAUACIAAAHIgzAAIAAgHQALgBAFgEQAEgEAAgLIAAhUQAAgNgFgEQgEgEgPgCIAAgHQAWAAAUABQASAXAcAfIAyAyIAAg8QAAgYgEgGQgEgGgRgBIAAgHIA5AAIAAAHQgPABgFAFQgFAEAAAOIAABtg");
	this.shape_17.setTransform(-155.15,-47.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhDBGIAAgHQAQgBAGgCQAEgCAAgFIAAhmQABgIgFgCQgFgCgRgBIAAgHIB0AAIAGAaIgGAAQgFgKgIgEQgKgGgUABQgLAAgEACQgFACAAAGIAAAoQAAAIAHAAIASAAQAOAAAEgVIAIAAIAAAuIgIAAQgDgTgPAAIgRAAQgIAAAAAKIAAAoQAAAFAEADQADADAFAAIAQAAQARAAALgGQALgGAIgQIAHAAIgGAjg");
	this.shape_18.setTransform(-174.8,-47.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbAhQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAgBQAEAAACgJIALguQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgGgBQAAgBgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAIAuAAQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAIAAADIgBAHQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgGgCgBQgDgCgHAAIgHAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIgFAVIgBABIAFABQAKAAADgBQACgBADgFQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAABIgEASQAAABgBAAQAAABAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgEQAAgEgIgBIgKAAIgCAAIgGAaQABADAFgBIAEAAQANABAEgDQADgCAEgGIABgBQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgDANQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_19.setTransform(-59.65,-32.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVAbQgIgHAAgNQAAgRATgMQAQgLATAAQAFAAAAADIgCAKQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIAAgFQAAgEgGAAQgMAAgMAMQgKAJAAAPQAAALAFAHQAFAGAIAAQALAAAFgLIACgEIABABIAAACIgBALQgBAEgUAAQgNAAgIgHg");
	this.shape_20.setTransform(-69.425,-32.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVAgIgCgDIgmgwIgJAtQAAABAAAAQAAABABAAQAAAAABAAQABABAAAAQAGAAAAACQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgRAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAABAAQAEAAABgFIALgzQAAgCgIAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgCAGAAIAKABQADAAACACIAiAsIAFgqQAAgBgFgBQgGAAAAgCQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAIANAAIAGAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAACgGAAQgCABgBAHIgHA0QgBABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCgBg");
	this.shape_21.setTransform(-80.3,-32.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAHAiIgBgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAQAHgBAAgCIgBgEIgDgSIgSAAIgGAKQgHALAAABQAAABAEACQABAAABAAQABABABAAQAAAAAAABQABAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAIgTAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIACgCQAFgCAEgFIAfgtQAIgMACAAQABAAAAAFIAEAcIAFAaQABAEACABQAGACAAABIgCAAgAgFADIAQAAIgDgUIgBAAg");
	this.shape_22.setTransform(-91.65,-32.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAUAhIgIgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBIgMgZIgGABIgEAUQAAACAHACQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgaAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQADgBABgIQAFgXAEgPIACgJQAAAAAAgBQgBAAAAgBQgBAAgBAAQAAAAgBAAQgFAAAAgCQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAABAAIAhAAQASAAAAANQAAAHgIAHQgHAFgIACIANAWQADAHAFABIAFACQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAgAAAgcIgCAEIgGAaQAKgBAIgGQAHgGAAgIQAAgKgNAAQgEAAAAABg");
	this.shape_23.setTransform(-101.725,-32.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgiAQQAAgFACgGIAIgbIABgEQAAgCgFgBQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAZAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgEABgCAFIgJAfQgBAFAAAEQAAAMANABQALAAAGgHQAEgFADgLIAGgaIABgGQAAgEgGAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAHAAIAKAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAgBAAQgDABgCAIIgIAfQgEAMgGAFQgHAGgMgBQgYAAAAgRg");
	this.shape_24.setTransform(-111.725,-32.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXAeIABgLQAAAAAAgBQABgBAAAAQAAAAAAgBQABAAAAAAQACAAAAAIQgBAHAMAAQAMAAAAgMQAAgGgJgLQgJgKAAgHQAAgIAHgGQAFgEAHAAIALABQAGACAAABIABAMQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgCgFQgDgJgLAAQgJAAAAAKQAAADAJAMQAKALgBAJQAAAJgGAFQgIAFgJAAQgPAAAAgEg");
	this.shape_25.setTransform(-122,-32.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAWAgIgDgDIgmgwIgJAtQAAABAAAAQAAABABAAQAAAAABAAQABABAAAAQAGAAgBACQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgSAAIgBgBQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAFAAABgFIALgzQAAgCgIAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgCAGAAIAKABQADAAACACIAiAsIAFgqQAAgBgFgBQgGAAAAgCQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAIANAAIAGAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAACgGAAQgCABgBAHIgIA0QAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_26.setTransform(-131.85,-32.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQAhIgCgBQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQADgBABgEIALgwIABgEQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAgBAAQgFgBAAgBQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAWAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBABgBAAQgBAAgCAHIgKAqIgBAGQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQAGAAAAACIgCABg");
	this.shape_27.setTransform(-141.35,-32.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1C4A28").s().p("AwAMRIAA4hMAgBAAAIAAYhg");
	this.shape_28.setTransform(-102.5,-78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MOE_logo, new cjs.Rectangle(-205,-157,205,157), null);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#245E36").s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape.setTransform(2.125,91.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#245E36").s().p("AhZBYIAagpQAaAaAlAAQANAAAJgFQAJgGAAgKQAAgLgSgKIgmgRQg5gYAAgrQAAggAagTQAZgSAmAAQA1AAAZAbIgVArQgWgUgkAAQgdAAAAAVQAAALASAJIAmAQQA5AYAAArQAAAegYAUQgZAVgoAAQg6AAgggjg");
	this.shape_1.setTransform(-12.775,82.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#245E36").s().p("AhNBWQgigiAAg0QAAg1AigiQAhgjA0AAQAwAAAdAgQAbAfAAAxIgCAVIihAAQADAdAVASQATAPAbAAQAlAAAegaIAXAqQgkAig7AAQg3AAgkglgAA1gcQgBgXgNgNQgNgNgUAAQgVAAgPANQgPANgEAXIBmAAIAAAAg");
	this.shape_2.setTransform(-34.275,82.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#245E36").s().p("AhGB3IAAjpIA5AAIAAAoIgBAQIABAAQAIgZASgSQAVgRAaAAIALABIAAA5IgOAAQgVAAgQALQgTAOgHAYQgFAPAAAWIAABdg");
	this.shape_3.setTransform(-53.275,82.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#245E36").s().p("AgcCjIAAjpIA5AAIAADpgAgchuIAAg0IA5AAIAAA0g");
	this.shape_4.setTransform(-68.175,78.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#245E36").s().p("AgqCkIAAi3IgdAAIAAgvIAdAAIAAgKQAAgzAjgWQAYgOAjAAQANAAAHABIAAAyIgMgBQgtAAAAAmIAAAJIAyAAIAAAvIgyAAIAAC3g");
	this.shape_5.setTransform(-80,78.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#245E36").s().p("AhYCEQgcgiAAg3QAAg2AegiQAeghAvAAQAyAAAQAdIACAAIgBgNIAAhnIA6AAIAAFFIg3AAIAAgTIABgPIgBAAQgTAog1AAQgwAAgdgigAgngKQgRAUAAAhQAAAiAPATQARAVAZAAQAZgBAQgRQASgTAAglQAAgegPgTQgQgWgcgBQgYAAgQATg");
	this.shape_6.setTransform(-102.1,78.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#245E36").s().p("AgsBZIAAj8IA5AAIAADzQAAAhAYAAIAIgBIAAAzIgSABQhHAAAAhLg");
	this.shape_7.setTransform(-119.475,78.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#245E36").s().p("AgcCjIAAjpIA5AAIAADpgAgchuIAAg0IA5AAIAAA0g");
	this.shape_8.setTransform(-131.525,78.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#245E36").s().p("AAuB1IgoiFIgGgZIAAAAQgCANgDAMIgoCFIhBAAIhIjpIA+AAIApCZQADAMACANIAAAAIAGgZIAriZIAzAAIArCZIAGAZIABAAIAEgZIAqiZIA9AAIhIDpg");
	this.shape_9.setTransform(-155,82.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#245E36").s().p("AhGB3IAAjqIA5AAIAAApIgBARIABAAQAIgaASgRQAVgSAaAAIALABIAAA5IgOgBQgVAAgQAMQgTANgHAZQgFAPAAAWIAABdg");
	this.shape_10.setTransform(-8.275,33.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#245E36").s().p("AhaBZQgmgkAAg1QAAg0AmgjQAlgjA1AAQA2AAAlAjQAmAjAAA0QAAA1gmAkQgkAig3AAQg1AAglgigAgwg0QgVAVAAAfQAAAgAVAVQAUAUAcAAQAdAAAUgUQAVgVAAggQAAgfgVgVQgUgUgdAAQgcAAgUAUg");
	this.shape_11.setTransform(-31.425,33.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#245E36").s().p("AgrCkIAAi3IgcAAIAAgvIAcAAIAAgKQAAgzAkgWQAXgOAkAAQAMAAAIABIAAAyIgMgBQgtAAAAAmIAAAJIAyAAIAAAvIgyAAIAAC3g");
	this.shape_12.setTransform(-51.5,28.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#245E36").s().p("AhNBWQgigiAAg0QAAg1AigiQAhgjA0AAQAwAAAdAgQAbAfAAAxIgCAVIihAAQADAdAVASQATAPAbAAQAlAAAegaIAXAqQgkAig7AAQg3AAgkglgAA1gcQgBgXgNgNQgNgNgUAAQgVAAgPANQgPANgEAXIBmAAIAAAAg");
	this.shape_13.setTransform(-81.125,33.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#245E36").s().p("AhGB3IAAjqIA5AAIAAApIgBARIABAAQAIgaASgRQAVgSAaAAIALABIAAA5IgOgBQgVAAgQAMQgTANgHAZQgFAPAAAWIAABdg");
	this.shape_14.setTransform(-100.125,33.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#245E36").s().p("AhNBoQgYgVAAghQAAgxA3gSQAhgMAyAAIAHAAIAAgDQAAgqgsAAQghAAgfAXIgWgqQAkgdA3AAQAuAAAaAZQAZAYAAAtIAACRIg1AAIAAgTIAAgRIAAAAQgSAqg1AAQghAAgWgTgAgrAvQAAANAJAIQAKAJARAAQAVAAAQgUQAPgTAAgWIAAgGIgKAAQhOAAAAAlg");
	this.shape_15.setTransform(-121.975,33.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#245E36").s().p("Ah0CmIAAlGIA2AAIAAARIgBARIABAAQAUgnA3AAQAuAAAdAiQAdAhgBA4QAAA2geAiQgeAhgvABQgtAAgVghIgBAAIABAVIAABigAgohiQgTAVAAAkQAAAdAPAUQAQAWAbAAQAZAAAQgTQARgSABgjQAAghgQgUQgRgUgZAAQgYAAgQARg");
	this.shape_16.setTransform(-145.2,37.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#245E36").s().p("AhNBWQgigiAAg0QAAg1AigiQAhgjA0AAQAwAAAdAgQAbAfAAAxIgCAVIihAAQADAdAVASQATAPAbAAQAlAAAegaIAXAqQgkAig7AAQg3AAgkglgAA1gcQgBgXgNgNQgNgNgUAAQgVAAgPANQgPANgEAXIBmAAIAAAAg");
	this.shape_17.setTransform(-171.275,33.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#245E36").s().p("AhGB3IAAjqIA5AAIAAApIgBARIABAAQAIgaASgRQAVgSAaAAIALABIAAA5IgOgBQgVAAgQAMQgTANgHAZQgFAPAAAWIAABdg");
	this.shape_18.setTransform(-190.275,33.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#245E36").s().p("AhyCjIAAlFIB9AAQAuAAAdAdQAdAeAAAvQAAAwgdAdQgdAdguAAIhCAAIAABxgAg3AAIA3AAQAaAAAPgPQANgPAAgaQAAgZgNgPQgPgPgaAAIg3AAg");
	this.shape_19.setTransform(-211.6,28.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-269.9,0,269.9,108.4), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEEEE").s().p("AAoNTQhbBEhygMQh0gLhOhWQgwg0gThFQgShCAMhDQhOgHhGgjQhJgjg3g8Qh2iCAJiwQAIivCCh2IAFgEQgegXgYgbQh2iCAIiwQAJiwCCh2QCCh2CwAIQCvAJB3CCQAyA3AdBFQAaBDAEBIQCOg2CWAjQCYAjBqB1QBYBgAeB+QAdB6ggB4QAlAZAfAiQBoBygICaQgHCahyBnQgjAggqAWQgfBchHBAQhrBhiPAAQiPAAhqhfg");
	this.shape.setTransform(83.9468,94.5466);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,167.9,189.1), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// type
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAhIAJgQQAKAKANAAQAFAAADgCQADgCABgEQgBgEgGgEIgNgGQgWgIAAgQQAAgMAKgHQAJgGAOAAQATAAAJAJIgIAQQgHgHgNAAQgLAAAAAIQAAAEAHADIANAGQAWAIgBAQQAAALgJAIQgIAHgPAAQgVAAgMgMg");
	this.shape.setTransform(-21.95,13.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqA9IAAh3IATAAIAAAGIAAAGQAIgOATAAQASAAAKAMQALANAAAUQAAATgMANQgLAMgRAAQgQAAgIgMIAAAAIAAAIIAAAkgAgPgjQgGAHAAANQAAALAGAHQAFAIAKAAQAIAAAGgHQAHgGAAgNQAAgMgGgIQgGgHgJAAQgJAAgGAHg");
	this.shape_1.setTransform(-30.4,15.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKA8IAAhVIAVAAIAABVgAgKgoIAAgTIAVAAIAAATg");
	this.shape_2.setTransform(-37.925,11.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKA8IAAhlIgoAAIAAgSIBlAAIAAASIgoAAIAABlg");
	this.shape_3.setTransform(-45.125,11.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAgQgNgNAAgTQAAgTAMgNQAMgMATAAQASAAAKALQAKAMAAASIgBAHIg6AAQABALAIAGQAGAGAKAAQAOAAALgKIAIAQQgNAMgWAAQgTAAgNgNgAATgKQAAgIgFgFQgEgFgIAAQgHAAgFAFQgGAFgBAIIAkAAIAAAAg");
	this.shape_4.setTransform(-58.65,13.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAgQgMgNAAgTQAAgTAMgNQANgMASAAQASAAAKALQAKAMAAASIgBAHIg6AAQABALAHAGQAIAGAJAAQAOAAALgKIAIAQQgNAMgWAAQgTAAgOgNgAAUgKQgBgIgFgFQgFgFgGAAQgIAAgGAFQgFAFgBAIIAlAAIAAAAg");
	this.shape_5.setTransform(-67.85,13.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoAuIAMgQQANANAQgBQAIAAAFgDQAFgFAAgHQAAgGgJgGIgTgJQgNgGgGgFQgJgJAAgMQAAgPAMgKQALgLAQAAQAYAAAMAOIgJASQgMgLgPAAQgGAAgGAEQgFAEAAAGQAAAHAJAGIASAJQAOAFAGAGQAJAIAAANQAAAPgLAKQgLAKgSAAQgaAAgPgQg");
	this.shape_6.setTransform(-77.075,11.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bkgd
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#245E36").s().p("Am2B9Qg9AAAAg8IAAiBQAAg8A9AAINtAAQA9AAAAA8IAACBQAAA8g9AAg");
	this.shape_7.setTransform(-50,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-100,-0.1,100,25), null);


(lib.Smokepuff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path();
	this.instance.setTransform(0,0.05,0.423,0.423,0,0,0,83.9,94.5);
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Smokepuff, new cjs.Rectangle(-35.5,-39.9,71.1,80), null);


// stage content:
(lib.MOE265_Display_Prepare_PrepAware_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,143];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_143 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==2){
		this.stop();
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(143).call(this.frame_143).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,300.0216,1,2.4056);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(144));

	// HEAD1
	this.instance = new lib.HEAD1();
	this.instance.setTransform(370.9,137.5,1,1,0,0,0,90.2,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(144));

	// LOGO
	this.instance_1 = new lib.MOE_logo();
	this.instance_1.setTransform(290.1,602,0.4877,0.4877,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144));

	// CTA
	this.instance_2 = new lib.CTA();
	this.instance_2.setTransform(333.95,257.05,1.3,1.3,0,0,0,41.5,13.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},0).to({alpha:1},9).wait(64));

	// sidewalk
	this.instance_3 = new lib.Sidewalk();
	this.instance_3.setTransform(-61,455,0.9433,0.9433);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(144));

	// foregrass
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#597D5E").s().p("A3WIQIAAweMAutAAAIAAQeg");
	this.shape_1.setTransform(150,546.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(144));

	// smoke copy 3
	this.instance_4 = new lib.Smokepuff();
	this.instance_4.setTransform(229.75,347.15,0.683,0.6838,0,0,0,0.3,0.3);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0,regY:0,x:229.55,y:345.3977,alpha:0.0846},0).wait(1).to({y:343.8455,alpha:0.1702},0).wait(1).to({y:342.2932,alpha:0.255},0).wait(1).to({y:340.7409,alpha:0.3373},0).wait(1).to({y:339.1886,alpha:0.4159},0).wait(1).to({y:337.6364,alpha:0.4895},0).wait(1).to({y:336.0841,alpha:0.5576},0).wait(1).to({y:334.5318,alpha:0.6198},0).wait(1).to({y:332.9795,alpha:0.676},0).wait(1).to({y:331.4273,alpha:0.7264},0).wait(1).to({y:329.875,alpha:0.7713},0).wait(1).to({y:328.3227,alpha:0.8111},0).wait(1).to({y:326.7705,alpha:0.8461},0).wait(1).to({y:325.2182,alpha:0.8766},0).wait(1).to({y:323.6659,alpha:0.9032},0).wait(1).to({y:322.1136,alpha:0.926},0).wait(1).to({y:320.5614,alpha:0.9453},0).wait(1).to({y:319.0091,alpha:0.9616},0).wait(1).to({y:317.4568,alpha:0.975},0).wait(1).to({y:315.9045,alpha:0.9857},0).wait(1).to({y:314.3523,alpha:0.994},0).wait(1).to({regX:0.3,regY:0.3,x:229.75,y:313,alpha:1},0).wait(1).to({regX:0,regY:0,x:229.55,y:311.2476,alpha:0.992},0).wait(1).to({y:309.6952,alpha:0.9818},0).wait(1).to({y:308.1428,alpha:0.9693},0).wait(1).to({y:306.5904,alpha:0.9541},0).wait(1).to({y:305.0381,alpha:0.936},0).wait(1).to({y:303.4857,alpha:0.9146},0).wait(1).to({y:301.9333,alpha:0.8895},0).wait(1).to({y:300.3809,alpha:0.8604},0).wait(1).to({y:298.8285,alpha:0.8267},0).wait(1).to({y:297.2761,alpha:0.7881},0).wait(1).to({y:295.7237,alpha:0.744},0).wait(1).to({y:294.1713,alpha:0.6942},0).wait(1).to({y:292.6189,alpha:0.6384},0).wait(1).to({y:291.0666,alpha:0.5768},0).wait(1).to({y:289.5142,alpha:0.51},0).wait(1).to({y:287.9618,alpha:0.4388},0).wait(1).to({y:286.4094,alpha:0.3647},0).wait(1).to({y:284.857,alpha:0.2892},0).wait(1).to({y:283.3046,alpha:0.2138},0).wait(1).to({y:281.7522,alpha:0.1399},0).wait(1).to({y:280.1998,alpha:0.0684},0).wait(1).to({regX:0.3,regY:0.1,x:229.75,y:278.8,alpha:0},0).to({_off:true},1).wait(22).to({_off:false,regY:0.3,y:347.15},0).wait(1).to({regX:0,regY:0,x:229.55,y:345.3977,alpha:0.0846},0).wait(1).to({y:343.8455,alpha:0.1702},0).wait(1).to({y:342.2932,alpha:0.255},0).wait(1).to({y:340.7409,alpha:0.3373},0).wait(1).to({y:339.1886,alpha:0.4159},0).wait(1).to({y:337.6364,alpha:0.4895},0).wait(1).to({y:336.0841,alpha:0.5576},0).wait(1).to({y:334.5318,alpha:0.6198},0).wait(1).to({y:332.9795,alpha:0.676},0).wait(1).to({y:331.4273,alpha:0.7264},0).wait(1).to({y:329.875,alpha:0.7713},0).wait(1).to({y:328.3227,alpha:0.8111},0).wait(1).to({y:326.7705,alpha:0.8461},0).wait(1).to({y:325.2182,alpha:0.8766},0).wait(1).to({y:323.6659,alpha:0.9032},0).wait(1).to({y:322.1136,alpha:0.926},0).wait(1).to({y:320.5614,alpha:0.9453},0).wait(1).to({y:319.0091,alpha:0.9616},0).wait(1).to({y:317.4568,alpha:0.975},0).wait(1).to({y:315.9045,alpha:0.9857},0).wait(1).to({y:314.3523,alpha:0.994},0).wait(1).to({regX:0.3,regY:0.3,x:229.75,y:313,alpha:1},0).wait(1).to({regX:0,regY:0,x:229.55,y:311.2476,alpha:0.992},0).wait(1).to({y:309.6952,alpha:0.9818},0).wait(1).to({y:308.1428,alpha:0.9693},0).wait(1).to({y:306.5904,alpha:0.9541},0).wait(1).to({y:305.0381,alpha:0.936},0).wait(1).to({y:303.4857,alpha:0.9146},0).wait(1).to({y:301.9333,alpha:0.8895},0).wait(1).to({y:300.3809,alpha:0.8604},0).wait(1).to({y:298.8285,alpha:0.8267},0).wait(1).to({y:297.2761,alpha:0.7881},0).wait(1).to({y:295.7237,alpha:0.744},0).wait(1).to({y:294.1713,alpha:0.6942},0).wait(1).to({y:292.6189,alpha:0.6384},0).wait(1).to({y:291.0666,alpha:0.5768},0).wait(1).to({y:289.5142,alpha:0.51},0).wait(1).to({y:287.9618,alpha:0.4388},0).wait(1).to({y:286.4094,alpha:0.3647},0).wait(1).to({y:284.857,alpha:0.2892},0).wait(1).to({y:283.3046,alpha:0.2138},0).wait(1).to({y:281.7522,alpha:0.1399},0).wait(1).to({y:280.1998,alpha:0.0684},0).wait(1).to({regX:0.3,regY:0.1,x:229.75,y:278.8,alpha:0},0).to({_off:true},1).wait(32));

	// smoke copy 4
	this.instance_5 = new lib.Smokepuff();
	this.instance_5.setTransform(176.95,347.2,0.683,0.6838,180,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).wait(1).to({regX:0,regY:0,x:177,y:345.7652,alpha:0.0809},0).wait(1).to({y:344.2804,alpha:0.1627},0).wait(1).to({y:342.7957,alpha:0.244},0).wait(1).to({y:341.3109,alpha:0.3233},0).wait(1).to({y:339.8261,alpha:0.3992},0).wait(1).to({y:338.3413,alpha:0.4708},0).wait(1).to({y:336.8565,alpha:0.5375},0).wait(1).to({y:335.3717,alpha:0.5988},0).wait(1).to({y:333.887,alpha:0.6547},0).wait(1).to({y:332.4022,alpha:0.7052},0).wait(1).to({y:330.9174,alpha:0.7505},0).wait(1).to({y:329.4326,alpha:0.791},0).wait(1).to({y:327.9478,alpha:0.8269},0).wait(1).to({y:326.463,alpha:0.8585},0).wait(1).to({y:324.9783,alpha:0.8863},0).wait(1).to({y:323.4935,alpha:0.9105},0).wait(1).to({y:322.0087,alpha:0.9313},0).wait(1).to({y:320.5239,alpha:0.9491},0).wait(1).to({y:319.0391,alpha:0.9641},0).wait(1).to({y:317.5543,alpha:0.9765},0).wait(1).to({y:316.0696,alpha:0.9865},0).wait(1).to({y:314.5848,alpha:0.9943},0).wait(1).to({regX:0.1,regY:0.1,x:176.95,y:313.05,alpha:1},0).wait(1).to({regX:0,regY:0,x:177,y:310.9659,alpha:0.9884},0).wait(1).to({y:308.8319,alpha:0.9726},0).wait(1).to({y:306.6978,alpha:0.952},0).wait(1).to({y:304.5638,alpha:0.9257},0).wait(1).to({y:302.4297,alpha:0.8929},0).wait(1).to({y:300.2957,alpha:0.8524},0).wait(1).to({y:298.1616,alpha:0.8032},0).wait(1).to({y:296.0276,alpha:0.744},0).wait(1).to({y:293.8935,alpha:0.6739},0).wait(1).to({y:291.7595,alpha:0.5927},0).wait(1).to({y:289.6254,alpha:0.5013},0).wait(1).to({y:287.4913,alpha:0.402},0).wait(1).to({y:285.3573,alpha:0.2987},0).wait(1).to({y:283.2232,alpha:0.1952},0).wait(1).to({y:281.0892,alpha:0.0949},0).wait(1).to({regX:0.1,regY:-0.1,x:176.95,y:278.8,alpha:0},0).to({_off:true},1).wait(27).to({_off:false,regY:0.1,y:347.2},0).wait(1).to({regX:0,regY:0,x:177,y:345.7652,alpha:0.0809},0).wait(1).to({y:344.2804,alpha:0.1627},0).wait(1).to({y:342.7957,alpha:0.244},0).wait(1).to({y:341.3109,alpha:0.3233},0).wait(1).to({y:339.8261,alpha:0.3992},0).wait(1).to({y:338.3413,alpha:0.4708},0).wait(1).to({y:336.8565,alpha:0.5375},0).wait(1).to({y:335.3717,alpha:0.5988},0).wait(1).to({y:333.887,alpha:0.6547},0).wait(1).to({y:332.4022,alpha:0.7052},0).wait(1).to({y:330.9174,alpha:0.7505},0).wait(1).to({y:329.4326,alpha:0.791},0).wait(1).to({y:327.9478,alpha:0.8269},0).wait(1).to({y:326.463,alpha:0.8585},0).wait(1).to({y:324.9783,alpha:0.8863},0).wait(1).to({y:323.4935,alpha:0.9105},0).wait(1).to({y:322.0087,alpha:0.9313},0).wait(1).to({y:320.5239,alpha:0.9491},0).wait(1).to({y:319.0391,alpha:0.9641},0).wait(1).to({y:317.5543,alpha:0.9765},0).wait(1).to({y:316.0696,alpha:0.9865},0).wait(1).to({y:314.5848,alpha:0.9943},0).wait(1).to({regX:0.1,regY:0.1,x:176.95,y:313.05,alpha:1},0).wait(1).to({regX:0,regY:0,x:177,y:310.9659,alpha:0.9884},0).wait(1).to({y:308.8319,alpha:0.9726},0).wait(1).to({y:306.6978,alpha:0.952},0).wait(1).to({y:304.5638,alpha:0.9257},0).wait(1).to({y:302.4297,alpha:0.8929},0).wait(1).to({y:300.2957,alpha:0.8524},0).wait(1).to({y:298.1616,alpha:0.8032},0).wait(1).to({y:296.0276,alpha:0.744},0).wait(1).to({y:293.8935,alpha:0.6739},0).wait(1).to({y:291.7595,alpha:0.5927},0).wait(1).to({y:289.6254,alpha:0.5013},0).wait(1).to({y:287.4913,alpha:0.402},0).wait(1).to({y:285.3573,alpha:0.2987},0).wait(1).to({y:283.2232,alpha:0.1952},0).wait(1).to({y:281.0892,alpha:0.0949},0).wait(1).to({regX:0.1,regY:-0.1,x:176.95,y:278.8,alpha:0},0).to({_off:true},1).wait(16));

	// smoke copy 5
	this.instance_6 = new lib.Smokepuff();
	this.instance_6.setTransform(284.3,347.15,0.683,0.6838,0,0,0,0.2,0.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).wait(1).to({regX:0,regY:0,x:284.15,y:345.584,alpha:0.0744},0).wait(1).to({y:344.218,alpha:0.1496},0).wait(1).to({y:342.852,alpha:0.2246},0).wait(1).to({y:341.486,alpha:0.2982},0).wait(1).to({y:340.12,alpha:0.3693},0).wait(1).to({y:338.754,alpha:0.437},0).wait(1).to({y:337.388,alpha:0.5008},0).wait(1).to({y:336.022,alpha:0.5602},0).wait(1).to({y:334.656,alpha:0.615},0).wait(1).to({y:333.29,alpha:0.6652},0).wait(1).to({y:331.924,alpha:0.7109},0).wait(1).to({y:330.558,alpha:0.7522},0).wait(1).to({y:329.192,alpha:0.7894},0).wait(1).to({y:327.826,alpha:0.8228},0).wait(1).to({y:326.46,alpha:0.8525},0).wait(1).to({y:325.094,alpha:0.8789},0).wait(1).to({y:323.728,alpha:0.9022},0).wait(1).to({y:322.362,alpha:0.9225},0).wait(1).to({y:320.996,alpha:0.9402},0).wait(1).to({y:319.63,alpha:0.9554},0).wait(1).to({y:318.264,alpha:0.9684},0).wait(1).to({y:316.898,alpha:0.9791},0).wait(1).to({y:315.532,alpha:0.9879},0).wait(1).to({y:314.166,alpha:0.9948},0).wait(1).to({regX:0.2,regY:0.3,x:284.3,y:313,alpha:1},0).wait(1).to({regX:0,regY:0,x:284.15,y:311.7955,alpha:0.995},0).wait(1).to({y:310.791,alpha:0.9892},0).wait(1).to({y:309.7865,alpha:0.9825},0).wait(1).to({y:308.7821,alpha:0.9747},0).wait(1).to({y:307.7776,alpha:0.9659},0).wait(1).to({y:306.7731,alpha:0.956},0).wait(1).to({y:305.7686,alpha:0.9449},0).wait(1).to({y:304.7641,alpha:0.9325},0).wait(1).to({y:303.7596,alpha:0.9186},0).wait(1).to({y:302.7551,alpha:0.9033},0).wait(1).to({y:301.7506,alpha:0.8863},0).wait(1).to({y:300.7462,alpha:0.8677},0).wait(1).to({y:299.7417,alpha:0.8471},0).wait(1).to({y:298.7372,alpha:0.8246},0).wait(1).to({y:297.7327,alpha:0.8},0).wait(1).to({y:296.7282,alpha:0.7732},0).wait(1).to({y:295.7237,alpha:0.744},0).wait(1).to({y:294.7192,alpha:0.7124},0).wait(1).to({y:293.7147,alpha:0.6784},0).wait(1).to({y:292.7103,alpha:0.6418},0).wait(1).to({y:291.7058,alpha:0.6028},0).wait(1).to({y:290.7013,alpha:0.5615},0).wait(1).to({y:289.6968,alpha:0.5181},0).wait(1).to({y:288.6923,alpha:0.4728},0).wait(1).to({y:287.6878,alpha:0.4259},0).wait(1).to({y:286.6833,alpha:0.3779},0).wait(1).to({y:285.6788,alpha:0.3293},0).wait(1).to({y:284.6744,alpha:0.2803},0).wait(1).to({y:283.6699,alpha:0.2315},0).wait(1).to({y:282.6654,alpha:0.1832},0).wait(1).to({y:281.6609,alpha:0.1356},0).wait(1).to({y:280.6564,alpha:0.0892},0).wait(1).to({y:279.6519,alpha:0.0439},0).wait(1).to({regX:0.2,regY:0.1,x:284.3,y:278.8,alpha:0},0).to({_off:true},1).wait(7).to({_off:false,regY:0.3,y:347.15},0).wait(1).to({regX:0,regY:0,x:284.15,y:345.584,alpha:0.0744},0).wait(1).to({y:344.218,alpha:0.1496},0).wait(1).to({y:342.852,alpha:0.2246},0).wait(1).to({y:341.486,alpha:0.2982},0).wait(1).to({y:340.12,alpha:0.3693},0).wait(1).to({y:338.754,alpha:0.437},0).wait(1).to({y:337.388,alpha:0.5008},0).wait(1).to({y:336.022,alpha:0.5602},0).wait(1).to({y:334.656,alpha:0.615},0).wait(1).to({y:333.29,alpha:0.6652},0).wait(1).to({y:331.924,alpha:0.7109},0).wait(1).to({y:330.558,alpha:0.7522},0).wait(1).to({y:329.192,alpha:0.7894},0).wait(1).to({y:327.826,alpha:0.8228},0).wait(1).to({y:326.46,alpha:0.8525},0).wait(1).to({y:325.094,alpha:0.8789},0).wait(1).to({y:323.728,alpha:0.9022},0).wait(1).to({y:322.362,alpha:0.9225},0).wait(1).to({y:320.996,alpha:0.9402},0).wait(1).to({y:319.63,alpha:0.9554},0).wait(1).to({y:318.264,alpha:0.9684},0).wait(1).to({y:316.898,alpha:0.9791},0).wait(1).to({y:315.532,alpha:0.9879},0).wait(1).to({y:314.166,alpha:0.9948},0).wait(1).to({regX:0.2,regY:0.3,x:284.3,y:313,alpha:1},0).wait(1).to({regX:0,regY:0,x:284.15,y:311.7955,alpha:0.995},0).wait(1).to({y:310.791,alpha:0.9892},0).wait(1).to({y:309.7865,alpha:0.9825},0).wait(1).to({y:308.7821,alpha:0.9747},0).wait(1).to({y:307.7776,alpha:0.9659},0).wait(1).to({y:306.7731,alpha:0.956},0).wait(1).to({y:305.7686,alpha:0.9449},0).wait(1).to({y:304.7641,alpha:0.9325},0).wait(1).to({y:303.7596,alpha:0.9186},0).wait(1).to({y:302.7551,alpha:0.9033},0).wait(1).to({y:301.7506,alpha:0.8863},0).wait(1).to({y:300.7462,alpha:0.8677},0).wait(1).to({y:299.7417,alpha:0.8471},0).wait(1).to({y:298.7372,alpha:0.8246},0).wait(1).to({y:297.7327,alpha:0.8},0).wait(1).to({y:296.7282,alpha:0.7732},0).wait(1).to({y:295.7237,alpha:0.744},0).wait(1).to({y:294.7192,alpha:0.7124},0).wait(1).to({y:293.7147,alpha:0.6784},0).wait(1).to({y:292.7103,alpha:0.6418},0).wait(1).to({y:291.7058,alpha:0.6028},0).wait(1).to({y:290.7013,alpha:0.5615},0).wait(1).to({y:289.6968,alpha:0.5181},0).wait(1).to({y:288.6923,alpha:0.4728},0).wait(1).to({y:287.6878,alpha:0.4259},0).wait(1).to({y:286.6833,alpha:0.3779},0).wait(1).to({y:285.6788,alpha:0.3293},0).wait(1).to({y:284.6744,alpha:0.2803},0).wait(1).to({y:283.6699,alpha:0.2315},0).wait(1).to({y:282.6654,alpha:0.1832},0).wait(1).to({y:281.6609,alpha:0.1356},0).wait(1).to({y:280.6564,alpha:0.0892},0).wait(1).to({y:279.6519,alpha:0.0439},0).wait(1).to({regX:0.2,regY:0.1,x:284.3,y:278.8,alpha:0},0).to({_off:true},1).wait(11));

	// smoke
	this.instance_7 = new lib.Smokepuff();
	this.instance_7.setTransform(241.6,423,0.9999,1.0011,0,0,0,0.1,0.2);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,x:241.5,y:421.7583,alpha:0.0386},0).wait(1).to({y:420.7167,alpha:0.0775},0).wait(1).to({y:419.675,alpha:0.1167},0).wait(1).to({y:418.6333,alpha:0.1559},0).wait(1).to({y:417.5917,alpha:0.1951},0).wait(1).to({y:416.55,alpha:0.2339},0).wait(1).to({y:415.5083,alpha:0.2724},0).wait(1).to({y:414.4667,alpha:0.3102},0).wait(1).to({y:413.425,alpha:0.3474},0).wait(1).to({y:412.3833,alpha:0.3837},0).wait(1).to({y:411.3417,alpha:0.4191},0).wait(1).to({y:410.3,alpha:0.4534},0).wait(1).to({y:409.2583,alpha:0.4866},0).wait(1).to({y:408.2167,alpha:0.5186},0).wait(1).to({y:407.175,alpha:0.5494},0).wait(1).to({y:406.1333,alpha:0.579},0).wait(1).to({y:405.0917,alpha:0.6073},0).wait(1).to({y:404.05,alpha:0.6344},0).wait(1).to({y:403.0083,alpha:0.6602},0).wait(1).to({y:401.9667,alpha:0.6848},0).wait(1).to({y:400.925,alpha:0.7081},0).wait(1).to({y:399.8833,alpha:0.7303},0).wait(1).to({y:398.8417,alpha:0.7514},0).wait(1).to({y:397.8,alpha:0.7713},0).wait(1).to({y:396.7583,alpha:0.7902},0).wait(1).to({y:395.7167,alpha:0.808},0).wait(1).to({y:394.675,alpha:0.8248},0).wait(1).to({y:393.6333,alpha:0.8406},0).wait(1).to({y:392.5917,alpha:0.8554},0).wait(1).to({y:391.55,alpha:0.8694},0).wait(1).to({y:390.5083,alpha:0.8825},0).wait(1).to({y:389.4667,alpha:0.8948},0).wait(1).to({y:388.425,alpha:0.9062},0).wait(1).to({y:387.3833,alpha:0.9169},0).wait(1).to({y:386.3417,alpha:0.9268},0).wait(1).to({y:385.3,alpha:0.9361},0).wait(1).to({y:384.2583,alpha:0.9446},0).wait(1).to({y:383.2167,alpha:0.9525},0).wait(1).to({y:382.175,alpha:0.9597},0).wait(1).to({y:381.1333,alpha:0.9664},0).wait(1).to({y:380.0917,alpha:0.9724},0).wait(1).to({y:379.05,alpha:0.9779},0).wait(1).to({y:378.0083,alpha:0.9828},0).wait(1).to({y:376.9667,alpha:0.9872},0).wait(1).to({y:375.925,alpha:0.9911},0).wait(1).to({y:374.8833,alpha:0.9946},0).wait(1).to({y:373.8417,alpha:0.9975},0).wait(1).to({regX:0.1,regY:0.2,x:241.6,y:373,alpha:1},0).wait(1).to({regX:0,regY:0,x:241.5,y:371.7351,alpha:0.9965},0).wait(1).to({y:370.6702,alpha:0.9925},0).wait(1).to({y:369.6053,alpha:0.9881},0).wait(1).to({y:368.5404,alpha:0.9832},0).wait(1).to({y:367.4755,alpha:0.9778},0).wait(1).to({y:366.4106,alpha:0.9719},0).wait(1).to({y:365.3457,alpha:0.9653},0).wait(1).to({y:364.2808,alpha:0.9582},0).wait(1).to({y:363.2159,alpha:0.9505},0).wait(1).to({y:362.151,alpha:0.9421},0).wait(1).to({y:361.0861,alpha:0.933},0).wait(1).to({y:360.0212,alpha:0.9232},0).wait(1).to({y:358.9563,alpha:0.9126},0).wait(1).to({y:357.8914,alpha:0.9012},0).wait(1).to({y:356.8265,alpha:0.889},0).wait(1).to({y:355.7616,alpha:0.8758},0).wait(1).to({y:354.6967,alpha:0.8617},0).wait(1).to({y:353.6318,alpha:0.8467},0).wait(1).to({y:352.5669,alpha:0.8306},0).wait(1).to({y:351.502,alpha:0.8134},0).wait(1).to({y:350.4371,alpha:0.795},0).wait(1).to({y:349.3722,alpha:0.7755},0).wait(1).to({y:348.3073,alpha:0.7548},0).wait(1).to({y:347.2424,alpha:0.7329},0).wait(1).to({y:346.1775,alpha:0.7096},0).wait(1).to({y:345.1126,alpha:0.6851},0).wait(1).to({y:344.0477,alpha:0.6592},0).wait(1).to({y:342.9828,alpha:0.6321},0).wait(1).to({y:341.9179,alpha:0.6037},0).wait(1).to({y:340.853,alpha:0.5741},0).wait(1).to({y:339.7881,alpha:0.5433},0).wait(1).to({y:338.7232,alpha:0.5114},0).wait(1).to({y:337.6583,alpha:0.4786},0).wait(1).to({y:336.5934,alpha:0.445},0).wait(1).to({y:335.5285,alpha:0.4107},0).wait(1).to({y:334.4636,alpha:0.3759},0).wait(1).to({y:333.3987,alpha:0.3407},0).wait(1).to({y:332.3338,alpha:0.3053},0).wait(1).to({y:331.2689,alpha:0.2699},0).wait(1).to({y:330.204,alpha:0.2346},0).wait(1).to({y:329.1391,alpha:0.1995},0).wait(1).to({y:328.0742,alpha:0.1648},0).wait(1).to({y:327.0093,alpha:0.1306},0).wait(1).to({y:325.9444,alpha:0.097},0).wait(1).to({y:324.8795,alpha:0.064},0).wait(1).to({y:323.8146,alpha:0.0316},0).wait(1).to({regX:0.1,regY:-0.1,x:241.6,y:322.9,alpha:0},0).to({_off:true},1).wait(48));

	// smoke copy
	this.instance_8 = new lib.Smokepuff();
	this.instance_8.setTransform(193.7,423.05,0.9999,1.001,180,0,0,0.1,0.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(47).to({_off:false},0).wait(1).to({regX:0,regY:0,x:193.8,y:422.25,alpha:0.037},0).wait(1).to({y:421.25,alpha:0.0744},0).wait(1).to({y:420.25,alpha:0.112},0).wait(1).to({y:419.25,alpha:0.1496},0).wait(1).to({y:418.25,alpha:0.1872},0).wait(1).to({y:417.25,alpha:0.2246},0).wait(1).to({y:416.25,alpha:0.2617},0).wait(1).to({y:415.25,alpha:0.2982},0).wait(1).to({y:414.25,alpha:0.3341},0).wait(1).to({y:413.25,alpha:0.3693},0).wait(1).to({y:412.25,alpha:0.4036},0).wait(1).to({y:411.25,alpha:0.437},0).wait(1).to({y:410.25,alpha:0.4695},0).wait(1).to({y:409.25,alpha:0.5008},0).wait(1).to({y:408.25,alpha:0.5311},0).wait(1).to({y:407.25,alpha:0.5602},0).wait(1).to({y:406.25,alpha:0.5882},0).wait(1).to({y:405.25,alpha:0.615},0).wait(1).to({y:404.25,alpha:0.6407},0).wait(1).to({y:403.25,alpha:0.6652},0).wait(1).to({y:402.25,alpha:0.6886},0).wait(1).to({y:401.25,alpha:0.7109},0).wait(1).to({y:400.25,alpha:0.7321},0).wait(1).to({y:399.25,alpha:0.7522},0).wait(1).to({y:398.25,alpha:0.7713},0).wait(1).to({y:397.25,alpha:0.7894},0).wait(1).to({y:396.25,alpha:0.8066},0).wait(1).to({y:395.25,alpha:0.8228},0).wait(1).to({y:394.25,alpha:0.8381},0).wait(1).to({y:393.25,alpha:0.8525},0).wait(1).to({y:392.25,alpha:0.8661},0).wait(1).to({y:391.25,alpha:0.8789},0).wait(1).to({y:390.25,alpha:0.8909},0).wait(1).to({y:389.25,alpha:0.9022},0).wait(1).to({y:388.25,alpha:0.9127},0).wait(1).to({y:387.25,alpha:0.9225},0).wait(1).to({y:386.25,alpha:0.9317},0).wait(1).to({y:385.25,alpha:0.9402},0).wait(1).to({y:384.25,alpha:0.9481},0).wait(1).to({y:383.25,alpha:0.9554},0).wait(1).to({y:382.25,alpha:0.9622},0).wait(1).to({y:381.25,alpha:0.9684},0).wait(1).to({y:380.25,alpha:0.974},0).wait(1).to({y:379.25,alpha:0.9791},0).wait(1).to({y:378.25,alpha:0.9837},0).wait(1).to({y:377.25,alpha:0.9879},0).wait(1).to({y:376.25,alpha:0.9916},0).wait(1).to({y:375.25,alpha:0.9948},0).wait(1).to({y:374.25,alpha:0.9976},0).wait(1).to({regX:0.1,regY:0.2,x:193.7,y:373.05,alpha:1},0).wait(1).to({regX:0,regY:0,x:193.8,y:371.7779,alpha:0.995},0).wait(1).to({y:370.3059,alpha:0.9892},0).wait(1).to({y:368.8338,alpha:0.9825},0).wait(1).to({y:367.3618,alpha:0.9747},0).wait(1).to({y:365.8897,alpha:0.9659},0).wait(1).to({y:364.4177,alpha:0.956},0).wait(1).to({y:362.9456,alpha:0.9449},0).wait(1).to({y:361.4736,alpha:0.9325},0).wait(1).to({y:360.0015,alpha:0.9186},0).wait(1).to({y:358.5295,alpha:0.9033},0).wait(1).to({y:357.0574,alpha:0.8863},0).wait(1).to({y:355.5854,alpha:0.8677},0).wait(1).to({y:354.1133,alpha:0.8471},0).wait(1).to({y:352.6413,alpha:0.8246},0).wait(1).to({y:351.1692,alpha:0.8},0).wait(1).to({y:349.6972,alpha:0.7732},0).wait(1).to({y:348.2251,alpha:0.744},0).wait(1).to({y:346.7531,alpha:0.7124},0).wait(1).to({y:345.281,alpha:0.6784},0).wait(1).to({y:343.809,alpha:0.6418},0).wait(1).to({y:342.3369,alpha:0.6028},0).wait(1).to({y:340.8649,alpha:0.5615},0).wait(1).to({y:339.3928,alpha:0.5181},0).wait(1).to({y:337.9208,alpha:0.4728},0).wait(1).to({y:336.4487,alpha:0.4259},0).wait(1).to({y:334.9767,alpha:0.3779},0).wait(1).to({y:333.5046,alpha:0.3293},0).wait(1).to({y:332.0326,alpha:0.2803},0).wait(1).to({y:330.5605,alpha:0.2315},0).wait(1).to({y:329.0885,alpha:0.1832},0).wait(1).to({y:327.6164,alpha:0.1356},0).wait(1).to({y:326.1444,alpha:0.0892},0).wait(1).to({y:324.6723,alpha:0.0439},0).wait(1).to({regX:0.1,x:193.7,y:322.95,alpha:0},0).to({_off:true},1).wait(12));

	// smoke copy 2
	this.instance_9 = new lib.Smokepuff();
	this.instance_9.setTransform(277.6,423,0.9999,1.0011,0,0,0,0.1,0.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).wait(1).to({regX:0,regY:0,x:277.5,y:421.8909,alpha:0.0336},0).wait(1).to({y:420.9818,alpha:0.0676},0).wait(1).to({y:420.0727,alpha:0.1017},0).wait(1).to({y:419.1636,alpha:0.136},0).wait(1).to({y:418.2545,alpha:0.1702},0).wait(1).to({y:417.3455,alpha:0.2043},0).wait(1).to({y:416.4364,alpha:0.2381},0).wait(1).to({y:415.5273,alpha:0.2717},0).wait(1).to({y:414.6182,alpha:0.3048},0).wait(1).to({y:413.7091,alpha:0.3373},0).wait(1).to({y:412.8,alpha:0.3693},0).wait(1).to({y:411.8909,alpha:0.4005},0).wait(1).to({y:410.9818,alpha:0.431},0).wait(1).to({y:410.0727,alpha:0.4607},0).wait(1).to({y:409.1636,alpha:0.4895},0).wait(1).to({y:408.2545,alpha:0.5175},0).wait(1).to({y:407.3455,alpha:0.5444},0).wait(1).to({y:406.4364,alpha:0.5705},0).wait(1).to({y:405.5273,alpha:0.5956},0).wait(1).to({y:404.6182,alpha:0.6198},0).wait(1).to({y:403.7091,alpha:0.6429},0).wait(1).to({y:402.8,alpha:0.6652},0).wait(1).to({y:401.8909,alpha:0.6865},0).wait(1).to({y:400.9818,alpha:0.7069},0).wait(1).to({y:400.0727,alpha:0.7264},0).wait(1).to({y:399.1636,alpha:0.745},0).wait(1).to({y:398.2545,alpha:0.7628},0).wait(1).to({y:397.3455,alpha:0.7797},0).wait(1).to({y:396.4364,alpha:0.7958},0).wait(1).to({y:395.5273,alpha:0.8111},0).wait(1).to({y:394.6182,alpha:0.8256},0).wait(1).to({y:393.7091,alpha:0.8394},0).wait(1).to({y:392.8,alpha:0.8525},0).wait(1).to({y:391.8909,alpha:0.8649},0).wait(1).to({y:390.9818,alpha:0.8766},0).wait(1).to({y:390.0727,alpha:0.8877},0).wait(1).to({y:389.1636,alpha:0.8982},0).wait(1).to({y:388.2545,alpha:0.908},0).wait(1).to({y:387.3455,alpha:0.9173},0).wait(1).to({y:386.4364,alpha:0.926},0).wait(1).to({y:385.5273,alpha:0.9341},0).wait(1).to({y:384.6182,alpha:0.9417},0).wait(1).to({y:383.7091,alpha:0.9488},0).wait(1).to({y:382.8,alpha:0.9554},0).wait(1).to({y:381.8909,alpha:0.9616},0).wait(1).to({y:380.9818,alpha:0.9673},0).wait(1).to({y:380.0727,alpha:0.9725},0).wait(1).to({y:379.1636,alpha:0.9773},0).wait(1).to({y:378.2545,alpha:0.9817},0).wait(1).to({y:377.3455,alpha:0.9857},0).wait(1).to({y:376.4364,alpha:0.9893},0).wait(1).to({y:375.5273,alpha:0.9925},0).wait(1).to({y:374.6182,alpha:0.9954},0).wait(1).to({y:373.7091,alpha:0.9978},0).wait(1).to({regX:0.1,regY:0.2,x:277.6,y:373,alpha:1},0).wait(1).to({regX:0,regY:0,x:277.5,y:372.1327,alpha:0.9979},0).wait(1).to({y:371.4653,alpha:0.9955},0).wait(1).to({y:370.798,alpha:0.993},0).wait(1).to({y:370.1307,alpha:0.9904},0).wait(1).to({y:369.4633,alpha:0.9875},0).wait(1).to({y:368.796,alpha:0.9845},0).wait(1).to({y:368.1286,alpha:0.9812},0).wait(1).to({y:367.4613,alpha:0.9777},0).wait(1).to({y:366.794,alpha:0.9741},0).wait(1).to({y:366.1266,alpha:0.9702},0).wait(1).to({y:365.4593,alpha:0.9661},0).wait(1).to({y:364.792,alpha:0.9617},0).wait(1).to({y:364.1246,alpha:0.9571},0).wait(1).to({y:363.4573,alpha:0.9523},0).wait(1).to({y:362.7899,alpha:0.9472},0).wait(1).to({y:362.1226,alpha:0.9419},0).wait(1).to({y:361.4553,alpha:0.9362},0).wait(1).to({y:360.7879,alpha:0.9303},0).wait(1).to({y:360.1206,alpha:0.9241},0).wait(1).to({y:359.4533,alpha:0.9176},0).wait(1).to({y:358.7859,alpha:0.9108},0).wait(1).to({y:358.1186,alpha:0.9037},0).wait(1).to({y:357.4513,alpha:0.8963},0).wait(1).to({y:356.7839,alpha:0.8885},0).wait(1).to({y:356.1166,alpha:0.8803},0).wait(1).to({y:355.4492,alpha:0.8718},0).wait(1).to({y:354.7819,alpha:0.8629},0).wait(1).to({y:354.1146,alpha:0.8536},0).wait(1).to({y:353.4472,alpha:0.8439},0).wait(1).to({y:352.7799,alpha:0.8339},0).wait(1).to({y:352.1126,alpha:0.8234},0).wait(1).to({y:351.4452,alpha:0.8124},0).wait(1).to({y:350.7779,alpha:0.801},0).wait(1).to({y:350.1105,alpha:0.7892},0).wait(1).to({y:349.4432,alpha:0.7769},0).wait(1).to({y:348.7759,alpha:0.7641},0).wait(1).to({y:348.1085,alpha:0.7508},0).wait(1).to({y:347.4412,alpha:0.7371},0).wait(1).to({y:346.7739,alpha:0.7228},0).wait(1).to({y:346.1065,alpha:0.708},0).wait(1).to({y:345.4392,alpha:0.6928},0).wait(1).to({y:344.7719,alpha:0.677},0).wait(1).to({y:344.1045,alpha:0.6607},0).wait(1).to({y:343.4372,alpha:0.6438},0).wait(1).to({y:342.7698,alpha:0.6265},0).wait(1).to({y:342.1025,alpha:0.6087},0).wait(1).to({y:341.4352,alpha:0.5904},0).wait(1).to({y:340.7678,alpha:0.5717},0).wait(1).to({y:340.1005,alpha:0.5524},0).wait(1).to({y:339.4332,alpha:0.5328},0).wait(1).to({y:338.7658,alpha:0.5127},0).wait(1).to({y:338.0985,alpha:0.4923},0).wait(1).to({y:337.4311,alpha:0.4715},0).wait(1).to({y:336.7638,alpha:0.4504},0).wait(1).to({y:336.0965,alpha:0.4291},0).wait(1).to({y:335.4291,alpha:0.4075},0).wait(1).to({y:334.7618,alpha:0.3857},0).wait(1).to({y:334.0945,alpha:0.3637},0).wait(1).to({y:333.4271,alpha:0.3416},0).wait(1).to({y:332.7598,alpha:0.3195},0).wait(1).to({y:332.0925,alpha:0.2973},0).wait(1).to({y:331.4251,alpha:0.2751},0).wait(1).to({y:330.7578,alpha:0.2529},0).wait(1).to({y:330.0904,alpha:0.2308},0).wait(1).to({y:329.4231,alpha:0.2088},0).wait(1).to({y:328.7558,alpha:0.187},0).wait(1).to({y:328.0884,alpha:0.1653},0).wait(1).to({y:327.4211,alpha:0.1438},0).wait(1).to({y:326.7538,alpha:0.1225},0).wait(1).to({y:326.0864,alpha:0.1014},0).wait(1).to({y:325.4191,alpha:0.0806},0).wait(1).to({y:324.7517,alpha:0.06},0).wait(1).to({y:324.0844,alpha:0.0397},0).wait(1).to({y:323.4171,alpha:0.0197},0).wait(1).to({regX:0.1,regY:-0.1,x:277.6,y:322.9,alpha:0},0).to({_off:true},1).wait(1));

	// clouds
	this.instance_10 = new lib.Cloud1();
	this.instance_10.setTransform(-20,132,0.4,0.4);

	this.instance_11 = new lib.Cloud1();
	this.instance_11.setTransform(115,207,0.4,0.4);

	this.instance_12 = new lib.Cloud2();
	this.instance_12.setTransform(1,226,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(144));

	// bkgd
	this.instance_13 = new lib.BkgdPrepare_300x250_DisplayPrepare();
	this.instance_13.setTransform(0,250,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(144));

	// stageBackground
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgY/gwbMAx/AAAMAAABg3Mgx/AAAg");
	this.shape_2.setTransform(150,300);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgY/AwcMAAAhg3MAx/AAAMAAABg3g");
	this.shape_3.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(144));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(89,299.5,224.10000000000002,314.9);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/MOE265_Display_Prepare_PrepAware_300x600_atlas_P_1.png?1623434504129", id:"MOE265_Display_Prepare_PrepAware_300x600_atlas_P_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;