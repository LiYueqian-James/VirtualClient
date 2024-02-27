// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace VirtualClient.Actions
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;
    using System.Linq;
    using System.Reflection.Metadata;
    using System.Text;
    using System.Text.RegularExpressions;
    using System.Xml.Linq;
    using System.Xml.Serialization;
    using VirtualClient.Contracts;

    /// <summary>
    /// Parser for the NTttcp workload.
    /// </summary>
    public class ThreeDMarkMetricsParser : MetricsParser
    {
        /// <summary>
        /// Parser for the 3DMark workload
        /// </summary>
        /// <param name="rawText">The raw text from the 3DMark export process.</param>
        /// <param name="definition">The 3dmark definition.</param>
        public ThreeDMarkMetricsParser(string rawText, string definition)
            : base(rawText)
        {
            this.Defintion = definition;
        }

        private string Defintion { get; set; }

        /// <inheritdoc/>
        public override IList<Metric> Parse()
        {
            IList<Metric> metrics = new List<Metric>();
            try
            {
                if (this.Defintion == "custom_TSGT1.3dmdef")
                {
                    metrics.Add(new Metric("timespy.graphics.1 [fps]", this.ParseXMLTag("TimeSpyPerformanceGraphicsTest1"), "fps", MetricRelativity.HigherIsBetter));
                }
                else if (this.Defintion == "custom_TSGT2.3dmdef")
                {
                    metrics.Add(new Metric("timespy.graphics.2 [fps]", this.ParseXMLTag("TimeSpyPerformanceGraphicsTest2"), "fps", MetricRelativity.HigherIsBetter));
                }
                else if (this.Defintion == "custom_TSCT.3dmdef")
                {
                    metrics.Add(new Metric("timespy.cpu [fps]", this.ParseXMLTag("TimeSpyPerformanceCpuSection2"), "fps", MetricRelativity.HigherIsBetter));
                }
                else if (this.Defintion == "custom_TSGT1X.3dmdef")
                {
                    metrics.Add(new Metric("timespyextreme.graphics.1 [fps]", this.ParseXMLTag("TimeSpyExtremeGraphicsTest1"), "fps", MetricRelativity.HigherIsBetter));
                }
                else if (this.Defintion == "custom_TSGT2X.3dmdef")
                {
                    metrics.Add(new Metric("timespyextreme.graphics.2 [fps]", this.ParseXMLTag("TimeSpyExtremeGraphicsTest2"), "fps", MetricRelativity.HigherIsBetter));
                }
                else if (this.Defintion == "custom_TSCTX.3dmdef")
                {
                    metrics.Add(new Metric("timespyextreme.cpu [fps]", this.ParseXMLTag("TimeSpyExtremeCpuSection0"), "fps", MetricRelativity.HigherIsBetter));
                }
                else if (this.Defintion == "custom_PCIE.3dmdef")
                {
                    metrics.Add(new Metric("pciebandwidth.gpu [GB/s]", this.ParseXMLTag("PciExpressBandwidthPerformance"), "GB/s", MetricRelativity.HigherIsBetter));
                    metrics.Add(new Metric("pcie.gpu [fps]", this.ParseXMLTag("PciExpressFpsPerformance"), "fps", MetricRelativity.HigherIsBetter));
                }
                else if (this.Defintion == "custom_DXRTFT.3dmdef")
                {
                    metrics.Add(new Metric("dxraytracing.gpu [fps]", this.ParseXMLTag("DirectxRaytracingFtFpsPerformance"), "fps", MetricRelativity.HigherIsBetter));
                }
                else if (this.Defintion == "custom_PR.3dmdef")
                {
                metrics.Add(new Metric("portroyal.gpu [fps]", this.ParseXMLTag("PortRoyalCustomGraphicsTest1"), "fps", MetricRelativity.HigherIsBetter));
                metrics.Add(new Metric("portroyal.finalscore", this.ParseXMLTag("PortRoyalCustomGraphicsScore"), "score", MetricRelativity.HigherIsBetter));
                }
            }
            catch (Exception exc)
            {
                throw new WorkloadException($"Results not found. The workload '3DMark' did not produce any valid results.", exc, ErrorReason.WorkloadFailed);
            }

            return metrics;
        }

        /// <summary>
        /// Gets the value sandwiched between the given XML tags
        /// </summary>
        /// <param name="tagName"></param>
        /// <returns></returns>
        private double ParseXMLTag(string tagName)
        {
            string pattern = $"<{tagName}.*>((.|\\n)*?)<\\/{tagName}>";
            Match m = Regex.Match(this.RawText, pattern);
            XElement tag = XElement.Parse(m.Value);
            double val = double.Parse(tag.Value);
            return val;
        }
    }
}